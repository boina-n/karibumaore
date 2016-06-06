from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Questions

# Create your views here.

def Questionslist(request):
    latest_question_list = Questions.objects.order_by('-pub_date')[:5]
    template = loader.get_template('mchedzo/index.html')
    context = {
        'latest_question_list': latest_question_list,
    }
    return HttpResponse(template.render(context, request))