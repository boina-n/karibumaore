from django.db import models

# Create your models here.

Class Person(models.Model):
    userid=models.CharField(max_lenght=30)
    mail=models.CharField(max_lenght=30)
zdzadzad