const axios = require('axios');

const cityName = process.argv[2];

const apiKey = '6ceca68b947ac428830d17cb4a74daff';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

axios.get(apiUrl)
  .then((response) => {
    const weatherData = response.data;
    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;
    const weatherDescription = weatherData.weather[0].description;

    console.log(`Weather in ${cityName}:`);
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Description: ${weatherDescription}`);
  })
  .catch((error) => {
    console.error('Error retrieving weather data:', error.message);
  });
