from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
# Create your views here.
# este clase crea todo el CRUD 
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()