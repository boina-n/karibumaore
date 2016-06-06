from django.db import models

# Create your models here.
class Person(models.Model):
    userid=models.CharField(max_length=200)
    mail=models.EmailField(max_length=254)

class Questions(models.Model):
    question_text=models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class QuestionChoice(models.Model):
    choice_text=models.CharField(max_length=200)
    pub_date=models.DateField()

class Devinnette(models.Model):
    choice_text=models.CharField(max_length=200)
    pub_date=models.DateField()
    #added_by=

class DevinnetteChoice(models.Model):
    choice_text=models.CharField(max_length=200)
    pub_date=models.DateField()