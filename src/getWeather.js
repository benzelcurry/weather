import cleanData from './cleanData.js';
import forecastCleaner from  './forecastCleaner.js';

// Fetches weather data and posts temp to screen

export default async function getWeather(location, time, weather, temperature, feelsLike, humidity, wind) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=aaf3fe91467b4ee119231483d81d2f44`, {mode: 'cors'});
    const weatherData = await response.json();
    const forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=aaf3fe91467b4ee119231483d81d2f44`, {mode: 'cors'});
    const forecastData = await forecast.json();
    const neededData = cleanData(weatherData);
    const unixTime = neededData.time;
    const realTime = new Date(unixTime * 1000);
    const fiveDays = forecastCleaner(forecastData);

    forecastCleaner(forecastData);

    console.log(fiveDays);
    console.log(weatherData);
    console.log(neededData);

    time.textContent = `Last updated: ${realTime.toLocaleTimeString("en-us")}`;
    weather.textContent = `Weather: ${capitalizeLetter(neededData.weather)}`;
    temperature.textContent = `Temperature: ${(1.8 * (neededData.temperature - 273) + 32).toFixed(1)}°F`;
    feelsLike.textContent = `Feels like: ${(1.8 * (neededData.feelsLike - 273) + 32).toFixed(1)}°F`;
    humidity.textContent = `Humidity: ${neededData.humidity}%`;
    wind.textContent = `Wind speed: ${(neededData.wind * 2.236936).toFixed(1)} mph`;

    // ADD FUNCTIONALITY FOR GETTING/DISPLAYING FORECAST
}

// Capitalizes the first letter of the string returned from OpenWeather API; for use with any string that may be returned
function capitalizeLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}