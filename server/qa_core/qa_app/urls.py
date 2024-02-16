from django.urls import path
from .views import AnswerQuestionAPIView

urlpatterns = [
    path('answer_question/', AnswerQuestionAPIView.as_view(), name='answer_question'),
]