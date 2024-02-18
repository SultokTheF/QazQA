from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import QuestionAnswerSerializer
from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

# Load tokenizer and model during Django startup
tokenizer = T5Tokenizer.from_pretrained("Kyrmasch/t5-kazakh-qa")
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = T5ForConditionalGeneration.from_pretrained("Kyrmasch/t5-kazakh-qa").to(device)

class AnswerQuestionAPIView(APIView):
    def post(self, request):
        # Deserialize the request data using the serializer
        serializer = QuestionAnswerSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        # Retrieve context and question from the validated data
        context = serializer.validated_data.get('context')
        question = serializer.validated_data.get('question')

        # Encode input and move tensors to appropriate device
        encoded = tokenizer.encode_plus(context, question, max_length=128, padding='max_length', truncation=True, return_tensors="pt")
        input_ids = encoded["input_ids"].to(device)
        attention_mask = encoded["attention_mask"].to(device)

        # Generate answer
        with torch.no_grad():
            output = model.generate(input_ids=input_ids, attention_mask=attention_mask, max_length=128)
            answer = tokenizer.decode(output[0], skip_special_tokens=True)

        # Return the answer in the response
        return Response({'answer': answer}, status=status.HTTP_200_OK)