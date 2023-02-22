from django.urls import path
from . import views
from django.conf import settings


urlpatterns = [
    path('badge/', views.users, name="badge"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
