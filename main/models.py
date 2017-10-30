from django.db import models

class Painting(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255, null=True, blank=True)
    year = models.SmallIntegerField()
    size = models.CharField(max_length=50, null=True, blank=True)
    cost = models.SmallIntegerField()
    image = models.FileField()
    sold_out = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id) + ") " + str(self.name)

class Client(models.Model):
    name = models.CharField(max_length=30)
    phone = models.CharField(max_length=13)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return str(self.name)