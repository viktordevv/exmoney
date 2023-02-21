from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('apps.accounts.urls')),
    path('', include('apps.base.urls')),
    path('', include('apps.contact.urls')),
    path('', include('apps.convert.urls')),
    path('', include('apps.badge.urls')),
    path('', include('apps.news.urls'))
    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
