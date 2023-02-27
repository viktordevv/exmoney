from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=200, null=True, blank=True)
    profile_pic = models.ImageField(
        default="default-profile.png", null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
