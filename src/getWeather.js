import cleanData from './cleanData.js';
import forecastCleaner from  './forecastCleaner.js';
import chooseIcon from './chooseIcon.js';
import changeBackground from './changeBackground.js';

// Fetches weather data and posts temp to screen

export default async function getWeather(location, time, weather, temperature, feelsLike, humidity, wind) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=aaf3fe91467b4ee119231483d81d2f44`, {mode: 'cors'});
    const weatherData = await response.json();
    const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=aaf3fe91467b4ee119231483d81d2f44`, {mode: 'cors'});
    const forecastData = await forecast.json();
    const neededData = cleanData(weatherData);
    let unixTime = neededData.time;
    let realTime = new Date(unixTime * 1000);
    const fiveDays = forecastCleaner(forecastData);
    const body = document.querySelector('body');

    time.textContent = `Last updated: ${realTime.toLocaleTimeString("en-us")} (System time)`;
    weather.textContent = `Weather: ${capitalizeLetter(neededData.weather)}`;
    temperature.textContent = `Temperature: ${(1.8 * (neededData.temperature - 273) + 32).toFixed(1)}°F`;
    feelsLike.textContent = `Feels like: ${(1.8 * (neededData.feelsLike - 273) + 32).toFixed(1)}°F`;
    humidity.textContent = `Humidity: ${neededData.humidity}%`;
    wind.textContent = `Wind speed: ${(neededData.wind * 2.236936).toFixed(1)} mph`;

    changeBackground(body, neededData.weather);

    // Beginning of forecast section
    const tomorrow = document.querySelector('.tomorrow');
    const tomorrowIcon = document.querySelector('.tomorrow-icon');
    const twoDays = document.querySelector('.two-days');
    const twoIcon = document.querySelector('.two-icon');
    const threeDays = document.querySelector('.three-days');
    const threeIcon = document.querySelector('.three-icon');
    const fourDays = document.querySelector('.four-days');
    const fourIcon = document.querySelector('.four-icon');
    const fifthDay = document.querySelector('.five-days');
    const fifthIcon = document.querySelector('.five-icon');

    
    tomorrow.innerText = `${capitalizeLetter(fiveDays[7][1])}\n${(1.8 * (fiveDays[7][2] - 273) + 32).toFixed(1)}°F`;
    chooseIcon(tomorrowIcon, fiveDays[7]);

    twoDays.innerText = `${capitalizeLetter(fiveDays[15][1])}\n${(1.8 * (fiveDays[15][2] - 273) + 32).toFixed(1)}°F`;
    chooseIcon(twoIcon, fiveDays[15]);

    threeDays.innerText = `${capitalizeLetter(fiveDays[23][1])}\n${(1.8 * (fiveDays[23][2] - 273) + 32).toFixed(1)}°F`;
    chooseIcon(threeIcon, fiveDays[23]);

    fourDays.innerText = `${capitalizeLetter(fiveDays[31][1])}\n${(1.8 * (fiveDays[31][2] - 273) + 32).toFixed(1)}°F`;
    chooseIcon(fourIcon, fiveDays[31]);

    fifthDay.innerText = `${capitalizeLetter(fiveDays[39][1])}\n${(1.8 * (fiveDays[39][2] - 273) + 32).toFixed(1)}°F`;
    chooseIcon(fifthIcon, fiveDays[39]);
}

// Capitalizes the first letter of the string returned from OpenWeather API; for use with any string that may be returned
function capitalizeLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}