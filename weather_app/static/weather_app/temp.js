document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('search-bar').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    // No need for the API key here anymore!
    const apiUrl = `/api/weather/${city}/`;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.temperature').innerText = `${data.main.temp}°C`;
        document.querySelector('.city-name').innerText = data.name;
        document.querySelector('.wind .big-value').innerText = `${data.wind.speed} km/h`;
        document.querySelector('.humidity .big-value').innerText = `${data.main.humidity}%`;

        // Construct icon URL based on the icon code from the data (assuming OpenWeatherMap's standard icon URLs)
        const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector('.weather-image').setAttribute('src', iconUrl);
    })
    .catch(error => {
        console.error("Error fetching the weather data:", error);
    });
}