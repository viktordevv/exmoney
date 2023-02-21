
from django.db import models

# Create your models here.

class ContactoModel(models.Model):
    nombre = models.CharField('Nombre', max_length=50)
    email = models.EmailField('Email', max_length=254)
    asunto = models.CharField('Asunto', max_length=50)
    mensaje = models.TextField()

    def __str__(self):

        return self.nombre + self.asunto