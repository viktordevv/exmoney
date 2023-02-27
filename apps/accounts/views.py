from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from .models import *
from .forms import CreateUserForm, UserEditForm
from .decorators import unauthenticated_user

# Create your views here.



@unauthenticated_user
def registerPage(request):

    form = CreateUserForm()

    if request.method == 'POST':

        form = CreateUserForm(request.POST)

        if form.is_valid():
    
            username = form.cleaned_data.get('username')

            form.save()

            messages.success(request, 'La cuenta fue creada para ' + username)

            return redirect('login')

    context = {'form': form}

    return render(request, 'accounts/register.html', context)



def upgrade(request):
        
    users = request.user # Devuelve un solo registro.

    if request.method == "POST" :
        
        form = UserEditForm(request.POST) # Agregamos los formularios de Django.

        if form.is_valid(): # Validacion del forulario.

            data = form.cleaned_data # cleaned_da es donde se guarda la iinfo.

            users.first_name = data["first_name"]
            users.last_name = data["last_name"]
            users.email = data["email"]


            users.save() # Guardamos el formulario.

            form = UserEditForm(instance=request.user)


            return render (request,"accounts/upgrade.html",{"mensaje": f'Datos actualiados correctamente ',"form": form})
        
        return render (request,"accounts/upgrade.html",{"mensaje": f'Error en la contraseña',"form": form})
    else:
        
        form = UserEditForm(instance=request.user)

        return render (request,"accounts/upgrade.html",{"form": form})
        

@unauthenticated_user
def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.info(request, 'Username or Password is incorrect')

    context = {}
    return render(request, 'accounts/login.html', context)


def logoutUser(request):
    logout(request)
    return redirect('home')


