from django.shortcuts import render, redirect
from django.http import HttpResponse
import aiohttp
import asyncio

 
def users(request):
    context = {}

    return render(request, 'badge/badge.html', context)


# async def values(request):
    
#     async with aiohttp.ClientSession() as session:
#         async with aiohttp.ClientSession() as session2:
#             async with session.get('http://api.coinlayer.com/live?access_key=7c7def6ef40f79c9ee415edba2850178', ) as resp:
#                 async with session2.get('http://api.coinlayer.com/list?access_key=7c7def6ef40f79c9ee415edba2850178', ) as respo2:
#                     if resp.status and respo2.status == 200:
#                         data = await resp.json()
#                         data2 = await respo2.json()
#                         a = data['rates']
#                         b = data2['crypto']
#                         print (b)
                        
#                     return render(request, 'badge/badge.html',{'tasa':a, 'data' :  b } )  
                


# async def values(request):
#     async with aiohttp.ClientSession() as session:
#         async with session.get('http://api.coinlayer.com/live?access_key=7c7def6ef40f79c9ee415edba2850178&expand=1', ) as resp:
#                     if resp.status  == 200:
#                         data = await resp.json()
#                         a = data['rates']

                        
#                     return render(request, 'badge/badge.html',{'tasa':a} )  
                

