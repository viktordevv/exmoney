from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('register/', views.registerPage, name="register"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
