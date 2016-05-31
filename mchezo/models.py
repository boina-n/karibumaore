from django.db import models

# Create your models here.

Class Person(models.Model):
    userid=models.CharField(max_lenght=30)
    mail=models.CharField(max_lenght=30)

Class Questions(models.Model):
    question_text=models.CharField(max_lenght=90)
    pub_date=models.CharField(max_lenght=30)
	#sent_by=foreign_key_userid?
	
Class QuestionChoice(models.Model):
    userid=models.CharField(max_lenght=30)
    mail=model.CharField(max_lenght=30)
	
Class Devinnette(models.Model):
    choice_text=models.CharField(max_lenght=90)
    pub_date=models.CharField(max_lenght=30)

Class DevinnetteChoice(models.Model):
    choice_text=models.CharField(max_lenght=90)
    pub_date=models.CharField(max_lenght=30)
