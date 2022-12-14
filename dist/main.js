/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// OpenWeather API key: aaf3fe91467b4ee119231483d81d2f44

const test = document.querySelector('.test');

async function getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=aaf3fe91467b4ee119231483d81d2f44', {mode: 'cors'});

    const weatherData = await response.json();

    console.log(weatherData);
    console.log(weatherData.main);
    console.log(weatherData.main.temp);

    test.innerText = weatherData.main.temp;
}

getWeather();
/******/ })()
;