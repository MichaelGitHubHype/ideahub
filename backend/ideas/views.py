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
        with open("ideas/files/travel.txt") as travel:
            travel_idea = random.choice(travel.readlines())
        with open("ideas/files/youtube.txt") as travel:
            video = random.choice(travel.readlines())

        return Response({
            "hackathon": hackathon.strip(),
            "course": bird_course.strip(),
            "travel": travel_idea.strip(),
            "video": video.strip()
        })

    def post(self, request, *args, **kwargs):
        if 'course' in request.data:
            with open('ideas/files/courses.txt', 'a') as courses:
                courses.write(request.data['course'] + '\n')
        if 'hackathon' in request.data:
            with open('ideas/files/hackathons.txt', 'a') as hackathons:
                hackathons.write(request.data['hackathon'] + '\n')
        if 'travel' in request.data:
            with open('ideas/files/travel.txt', 'a') as travel:
                travel.write(request.data['travel'] + '\n')
        if 'video' in request.data:
            with open('ideas/files/video.txt', 'a') as video:
                video.write(request.data['video'] + '\n')

        return HttpResponse("Ok")