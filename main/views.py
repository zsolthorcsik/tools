from django.shortcuts import render
from django.urls import path, include



# Create your views here

def homepage(request):
    context = {

    }
    return render(request, template_name="main/home.html", context=context)


def comma_separated_dates(request):
    context = {
        'scripts_to_include':['/static/js/comma_separated_dates.js']
    }
    return render(request, template_name="main/tools_templates/comma_separated_dates.html", context=context)
