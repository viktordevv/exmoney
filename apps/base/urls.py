from django.urls import path
from apps.base.views import * 

urlpatterns = [
    path('', home, name="home"),
    path('servicios/', sercicios, name="services"),
    path('soporte/', soporte, name="support"),
    path('empresa/', empresa, name="company"),

]
