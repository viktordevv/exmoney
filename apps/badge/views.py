from django.shortcuts import render, redirect
from django.http import HttpResponse
import aiohttp
import asyncio

async def list(request):
    async with aiohttp.ClientSession() as session1:
       async with session1.get('http://api.coinlayer.com/list?access_key=ab2978034ee6b835f2e20c4c75a4f51b', ) as respo1:
                    if respo1.status  == 200:
                        data = await respo1.json()
                        b = data['crypto']  
                    return render(request, 'badge/list.html',{'list':b  }) 
                             

async def expand(request):
    async with aiohttp.ClientSession() as session2:
        async with session2.get('http://api.coinlayer.com/live?access_key=ab2978034ee6b835f2e20c4c75a4f51b&expand=1', ) as resp2:
                    if resp2.status  == 200:
                        data = await resp2.json()
                        c = data['rates']
                    return render(request, 'badge/expand.html',{'expand':c } )  



async def consulta(request):
    async with aiohttp.ClientSession() as session3:
        async with session3.get('https://api.frankfurter.app/latest?from=USD', ) as resp3:
         async with session3.get('https://api.frankfurter.app/currencies', ) as resp4:
                    if resp3.status and resp4.status  == 200:
                        data3 = await resp3.json()
                        data4 = await resp4.json()
                        a = data3['rates']
                        
                    return render(request, 'badge/list_bank.html',{'expand':a ,'expan':data4 } )  



