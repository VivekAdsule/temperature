from django.shortcuts import render
import os
import requests
from django.http import JsonResponse

# Your existing index view
def index(request):
    return render(request, 'weather_app/temp.html')

# New view to handle the weather API request
def get_weather(request, city):
    # Retrieve API key from environment variables
    API_KEY = os.environ.get('OPENWEATHER_API_KEY')
    
    # Construct the URL for OpenWeatherMap API
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric'
    
    # Make the request
    response = requests.get(url)
    
    # Return the JSON response to the frontend
    return JsonResponse(response.json())