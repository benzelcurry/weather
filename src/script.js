import './style.css';
import getWeather from './getWeather.js';

const locationDisplay = document.querySelector('.location');
const time = document.querySelector('.time-updated');
const localTime = document.querySelector('.local-time');
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
        locationDisplay.textContent = location;
        getWeather(location, time, weather, temperature, feelsLike, humidity, wind);
    }
});

getWeather(location, time, weather, temperature, feelsLike, humidity, wind);