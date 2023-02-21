from django.shortcuts import render, redirect

def convert(request):
    context = {}

    return render(request, 'convert/convert.html', context)


