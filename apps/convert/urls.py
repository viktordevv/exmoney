from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('convert/', views.convert, name="converter"),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
