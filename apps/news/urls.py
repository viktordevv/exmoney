from django.urls import path
from . import views

urlpatterns = [
    path('news/', views.news, name="noticias1"),
    path('news2/', views.news2, name="noticias2"),
    path('news3/', views.news3, name="noticias3"),
    path('news4/', views.news4, name="noticias4"),
    path('news5/', views.news5, name="noticias5"),
    path('news6/', views.news6, name="noticias6"),
]
