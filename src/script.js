import './style.css';
import getWeather from './getWeather.js';
import cleanData from './cleanData.js';

// OpenWeather API key: aaf3fe91467b4ee119231483d81d2f44

const test = document.querySelector('.test');

getWeather(test);