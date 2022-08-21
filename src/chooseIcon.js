// Takes forecast data as an argument and determines which weather icons to display

import Sunny from './photos/sunny.svg';
import Partly_Cloudy from './photos/partly-cloudy.svg';
import Cloudy from './photos/cloudy.svg';
import Rain from './photos/rain.svg';
import Snow from './photos/snow.svg';

export default function chooseIcon(day, forecast) {
    const sunny = document.createElement('img');
    sunny.src = Sunny;
    sunny.classList.add('svg');

    const partlyCloudy = document.createElement('img');
    partlyCloudy.src = Partly_Cloudy;
    partlyCloudy.classList.add('svg');

    const cloudy = document.createElement('img');
    cloudy.src = Cloudy;
    cloudy.classList.add('svg');

    const rain = document.createElement('img');
    rain.src = Rain;
    rain.classList.add('svg');

    const snow = document.createElement('img');
    snow.src = Snow;
    snow.classList.add('svg');

    if (day.hasChildNodes() === true) {
        day.removeChild(day.lastChild);
        chooseIcon();
    } else {
        chooseIcon();
    }

    function chooseIcon() {
        if (forecast[1] === 'clear sky') {
            day.appendChild(sunny);
        } else if (forecast[1] === 'few clouds' || forecast[1] === 'broken clouds') {
            day.appendChild(partlyCloudy);
        } else if (forecast[1] === 'scattered clouds' || forecast[1] === 'mist') {
            day.appendChild(cloudy);
        } else if (forecast[1].includes('rain') || forecast[1] === thunderstorm) {
            day.appendChild(rain);
        } else if (forecast[1] === 'snow') {
            day.appendChild(snow);
        } else {
            day.appendChild(partlyCloudy);
        }
    }
}