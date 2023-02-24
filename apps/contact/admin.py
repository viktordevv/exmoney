from django.contrib import admin

from apps.contact.models import ContactModel


# Register your models here.
class ContactAdmin (admin.ModelAdmin):
    list_display  = (
        'name',
        'email',
        'affair',
        'message',
        'importance',
    )

    search_fields = ('importance', 'email')

    list_filter = ('importance','email')



admin.site.register( ContactModel, ContactAdmin)