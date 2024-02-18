from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import AnswerQuestionAPIView, QADataViewSet, BestContextAPIView

router = DefaultRouter()
router.register(r'qa_data', QADataViewSet, basename='qa_data')

urlpatterns = [
    path('', include(router.urls)),
    path('answer_question/', AnswerQuestionAPIView.as_view(), name='answer_question'),
    path('best_context/', BestContextAPIView.as_view(), name='best_context'),
]