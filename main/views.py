from django.shortcuts import render
from main.models import Painting, Client

def index(request):
    paintings = Painting.objects.all()

    context = {
        'art': paintings,
    }

    if request.POST:
        data = request.POST
        new_callback = Client.objects.create(name=str(data.get('name')), phone=data.get('phone'))

    return render(request, 'index.html', context)
