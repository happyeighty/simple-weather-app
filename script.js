const apiKey = '833452de72f6324d44f20bca355eaf90'; // Replace with your actual Weatherstack API key

async function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.info);
        }

        displayWeather(data);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temperature} °C</p>
        <p>Humidity: ${data.current.humidity} %</p>
        <p>${data.current.weather_descriptions[0]}</p>
    `;
}
