from django.shortcuts import render, redirect
from django.views.generic.edit import FormView

from apps.contact.forms import ContactoForms
from apps.contact.models import ContactoModel


# def contact(request):
#     context = {}

#     return render(request, 'contact/contacto.html', context)


class NewConcatoView (FormView):
    template_name = 'contact/contacto.html'
    form_class = ContactoForms
    success_url = 'contacto'

    def form_valid(self, form ) :
        
        asunto = ContactoModel(
            name = form.cleaned_data['nombre'],
            email = form.cleaned_data['email'],
            asunto = form.cleaned_data['asunto'],
            mensaje = form.cleaned_data['mensaje'],
            
        )
        asunto.save()

        return super(NewConcatoView,self).form_valid(form)