// Changes the background of the website according to weather and time of day

import Sunny from './photos/sunny.jpg';
import Overcast from './photos/overcast.jpg';

export default function changeBackground(body, weather, time) {
    if (weather.includes('sun') || weather.includes('clear') || weather.includes('few')) {
        body.style.backgroundImage = `url(${Sunny})`;
    } else if (weather.includes('scattered') || weather.includes('mist') || weather.includes('rain') || weather.includes('overcast')) {
        body.style.backgroundImage = `url(${Overcast})`;
    }
}