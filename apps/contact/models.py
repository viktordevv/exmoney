
from django.db import models

# Create your models here.

class ContactModel(models.Model):
    
    importance_level = {
        ('0','Muy Importante'),
        ('1','Relativamente Importante'),
        ('2','Poco Importante'),
        ('3','Duda'),
    }


    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    affair = models.CharField(max_length=50)
    message = models.CharField(max_length=500)
    importance = models.CharField(max_length=1, choices=importance_level )

    def __str__(self):

        return self.importance