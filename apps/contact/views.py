from django.shortcuts import render, redirect
from django.views.generic import CreateView
from apps.contact.forms import ContacForm

from apps.contact.models import ContactModel

class ContactUs (CreateView):
    model = ContactModel 
    template_name = 'contact/contact.html'
    form_class = ContacForm
    context_object_name = {'mensate': f'Consulta enviada correctamente'}
    success_url = '/contact/'