import cleanData from './cleanData.js';

// Fetches weather data and posts temp to screen

export default async function getWeather(test) {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=aaf3fe91467b4ee119231483d81d2f44', {mode: 'cors'});
    const weatherData = await response.json();
    const neededData = cleanData(weatherData);

    console.log(neededData);
}