from django.contrib import admin
from main.models import Painting, Client

class Client_View(admin.ModelAdmin):
    list_display = ('name', 'phone', 'created')

admin.site.register(Painting)
admin.site.register(Client, Client_View)