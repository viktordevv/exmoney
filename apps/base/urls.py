from django.urls import path
from apps.base.views import * 
from django.conf import settings

urlpatterns = [
    path('', home, name="home"),
    path('servicios/', sercicios, name="servicios"),
    path('soporte/', soporte, name="soporte"),
    path('empresa/', empresa, name="empresa"),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
