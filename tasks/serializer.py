
# utiilzamos el serializer para transformar los tipos de datos de python a json. 

from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        # fields = ('id', 'title', 'description', 'done')
        
        model = Task
        #para coinvertir todos los atributos
        fields = '__all__'