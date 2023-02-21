from django.urls import path
from . import views


urlpatterns = [
    path('badge/', views.users, name="badge"),
]
