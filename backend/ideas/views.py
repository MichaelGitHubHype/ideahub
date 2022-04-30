from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
import random

# Create your views here.
def hello(request):
    return HttpResponse("Hey, how is it going?")


class IdeasView(APIView):
    def get(self, request, *args, **kwargs):
        options = ['a', 'b', 'c']
        letter = random.choice(options)
        return Response({
            "letter": letter
        })
