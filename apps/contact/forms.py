from django import forms

from apps.contact.models import ContactModel


class ContacForm(forms.ModelForm):

    class Meta:
        model = ContactModel
        fields = (
            'name',
            'email',
            'affair',
            'message',
            'importance',
        )
