from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

from apps.accounts.decorators import allowed_users

# Create your views here.


# @login_required(login_url='login')
# @allowed_users(allowed_roles=['user'])
def home(request):
    context = {}

    return render(request, 'base/index.html', context)


def sercicios(request):
    contex = {}

    return render(request, 'base/services.html',contex)

def soporte(request):
    contex = {}

    return render(request, 'base/support.html',contex)

def empresa(request):
    contex = {}

    return render(request, 'base/empresa.html',contex)



