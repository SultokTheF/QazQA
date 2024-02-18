from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

from .serializers import QuestionAnswerSerializer
from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

from .serializers import QuestionAnswerSerializer, QADataSerializer
from .models import QAData

tokenizer = T5Tokenizer.from_pretrained("Kyrmasch/t5-kazakh-qa")
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = T5ForConditionalGeneration.from_pretrained("Kyrmasch/t5-kazakh-qa").to(device)

class AnswerQuestionAPIView(APIView):
    def post(self, request):
        serializer = QuestionAnswerSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        context = serializer.validated_data.get('context')
        question = serializer.validated_data.get('question')

        encoded = tokenizer.encode_plus(context, question, max_length=128, padding='max_length', truncation=True, return_tensors="pt")
        input_ids = encoded["input_ids"].to(device)
        attention_mask = encoded["attention_mask"].to(device)

        with torch.no_grad():
            output = model.generate(input_ids=input_ids, attention_mask=attention_mask, max_length=128)
            answer = tokenizer.decode(output[0], skip_special_tokens=True)

        return Response({'answer': answer}, status=status.HTTP_200_OK)
    
    
class QADataViewSet(viewsets.ModelViewSet):
    queryset = QAData.objects.all()
    serializer_class = QADataSerializer

    
