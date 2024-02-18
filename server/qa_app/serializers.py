from rest_framework import serializers

class QuestionAnswerSerializer(serializers.Serializer):
    context = serializers.CharField()
    question = serializers.CharField()