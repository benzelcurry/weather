import cleanData from './cleanData.js';

// Fetches weather data and posts temp to screen

export default async function getWeather(test, location, weather, temperature, feelsLike, humidity, wind) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=aaf3fe91467b4ee119231483d81d2f44`, {mode: 'cors'});
    const weatherData = await response.json();
    const neededData = cleanData(weatherData);

    console.log(neededData);

    // Re-do this so all values have their own unique div on the page that gets filled. Might not use a for loop. Might use an array instead of an object and then assign values from there.
    // for (const key in neededData) {
    //     const weatherValues = document.createElement('div');
    //     test.appendChild(weatherValues);
    //     weatherValues.textContent = neededData[key];
    //     console.log(neededData[key]);
    // }

    weather.textContent = capitalizeLetter(neededData.weather);
    temperature.textContent = `Temperature: ${(1.8 * (neededData.temperature - 273) + 32).toFixed(1)}°F`;
    feelsLike.textContent = `Feels like: ${(1.8 * (neededData.feelsLike - 273) + 32).toFixed(1)}°F`;
    humidity.textContent = `Humidity: ${neededData.humidity}%`;
    wind.textContent = `Wind speed: ${(neededData.wind * 2.236936).toFixed(1)} mph`;
}

// Capitalizes the first letter of the string returned from OpenWeather API; for use with any string that may be returned
function capitalizeLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}