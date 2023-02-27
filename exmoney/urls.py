from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('apps.accounts.urls')),
    path('', include('apps.base.urls')),
    path('', include('apps.contact.urls')),
    path('', include('apps.convert.urls')),
    path('', include('apps.badge.urls')),
    path('news/noticias1.html', TemplateView.as_view(template_name='news/noticias1.html')),
    path('news/noticias2.html', TemplateView.as_view(template_name='news/noticias2.html')),
    path('news/noticias3.html', TemplateView.as_view(template_name='news/noticias3.html')),
    path('news/noticias4.html', TemplateView.as_view(template_name='news/noticias4.html')),
    path('news/noticias5.html', TemplateView.as_view(template_name='news/noticias5.html')),
    path('news/noticias6.html', TemplateView.as_view(template_name='news/noticias6.html')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
