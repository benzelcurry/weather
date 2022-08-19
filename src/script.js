import './style.css';
import getWeather from './getWeather.js';

// OpenWeather API key: aaf3fe91467b4ee119231483d81d2f44

const test = document.querySelector('.test');
const locationDisplay = document.querySelector('.location');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const search = document.querySelector('.search');
let location = 'Portland';

locationDisplay.textContent = location;

search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') { 
        location = search.value;
        search.value = "";
        locationDisplay.textContent = `Location: ${location}`;
        getWeather(test, location, weather, temperature, feelsLike, humidity, wind);
    }
});

getWeather(test, location, weather, temperature, feelsLike, humidity, wind);