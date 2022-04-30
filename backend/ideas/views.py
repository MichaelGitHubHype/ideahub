from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
import random
import os

# Create your views here.
def hello(request):
    return HttpResponse("Hey, how is it going?")


class IdeasView(APIView):
    def get(self, request, *args, **kwargs):
        print(os.listdir("."))
        with open("ideas/files/hackathons.txt") as hackathons:
            hackathon = random.choice(hackathons.readlines())
        with open("ideas/files/courses.txt") as courses:
            bird_course = random.choice(courses.readlines())

        return Response({
            "hackathon": hackathon.strip(),
            "course": bird_course.strip()
        })
