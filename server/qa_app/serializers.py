from rest_framework import serializers
from .models import QAData

class QuestionAnswerSerializer(serializers.Serializer):
    context = serializers.CharField()
    question = serializers.CharField()

class QADataSerializer(serializers.ModelSerializer):
    class Meta:
        model = QAData
        fields = ['context', 'question', 'answer']