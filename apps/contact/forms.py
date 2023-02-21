from django import forms
from django.forms import ModelForm, TextInput, EmailInput

from apps.contact.models import ContactoModel

class ContactoForms(forms.Form):
    nombre = forms.CharField(label='Your name')
    email = forms.EmailField()
    asunto = forms.CharField()
    mensaje = forms.CharField()


