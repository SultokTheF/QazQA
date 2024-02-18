from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .serializers import QuestionAnswerSerializer, QADataSerializer
from .models import QAData
from transformers import T5Tokenizer, T5ForConditionalGeneration
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import torch
import numpy as np

class BaseQuestionAPIView(APIView):
    def __init__(self):
        super().__init__()
        self.tokenizer = T5Tokenizer.from_pretrained("Kyrmasch/t5-kazakh-qa")
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.model = T5ForConditionalGeneration.from_pretrained("Kyrmasch/t5-kazakh-qa").to(self.device)

class AnswerQuestionAPIView(BaseQuestionAPIView):
    def post(self, request):
        serializer = QuestionAnswerSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        context = serializer.validated_data.get('context')
        question = serializer.validated_data.get('question')

        encoded = self.tokenizer.encode_plus(context, question, max_length=128, padding='max_length', truncation=True, return_tensors="pt")
        input_ids = encoded["input_ids"].to(self.device)
        attention_mask = encoded["attention_mask"].to(self.device)

        with torch.no_grad():
            output = self.model.generate(input_ids=input_ids, attention_mask=attention_mask, max_length=128)
            answer = self.tokenizer.decode(output[0], skip_special_tokens=True)

        return Response({'answer': answer}, status=status.HTTP_200_OK)

class BestContextAPIView(BaseQuestionAPIView):
    def post(self, request):
        question = request.data.get('question', '')
        
        # Find the best context based on cosine similarity
        best_context = self.find_best_context(question)
        
        # If no suitable context is found, return an error response
        if not best_context:
            return Response({'error': 'No suitable context found'}, status=status.HTTP_404_NOT_FOUND)
        
        # Use the logic from AnswerQuestionAPIView to generate an answer using the best context
        encoded = self.tokenizer.encode_plus(best_context, question, max_length=128, padding='max_length', truncation=True, return_tensors="pt")
        input_ids = encoded["input_ids"].to(self.device)
        attention_mask = encoded["attention_mask"].to(self.device)

        with torch.no_grad():
            output = self.model.generate(input_ids=input_ids, attention_mask=attention_mask, max_length=128)
            answer = self.tokenizer.decode(output[0], skip_special_tokens=True)

        return Response({'answer': answer}, status=status.HTTP_200_OK)
    
    def find_best_context(self, question):
        # Get all contexts
        contexts = list(QAData.objects.values_list('context', flat=True))
        
        # Tokenize and vectorize the question and contexts using TF-IDF
        vectorizer = TfidfVectorizer()
        X = vectorizer.fit_transform([question] + contexts)
        
        # Calculate cosine similarity between the question vector and each context vector
        similarity_scores = cosine_similarity(X[0:1], X[1:]).flatten()
        
        # Find the index of the context with the highest similarity score
        best_context_index = np.argmax(similarity_scores)
        
        if similarity_scores[best_context_index] > 0:
            return contexts[best_context_index]
        else:
            return None

class QADataViewSet(viewsets.ModelViewSet):
    queryset = QAData.objects.all()
    serializer_class = QADataSerializer
