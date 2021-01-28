from django.shortcuts import render

# Create your views here.

def math1(request):
    context={}
    return render (request,'mathapp/math1.html',context)