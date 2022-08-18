// Cleans the data returned from OpenWeather API and returns a simplified object that only contains necessary data

/* DEFAULT UNITS:
Temperature: Kelvin
Humidity: %
Wind speed: m/s
*/

export default function cleanData(data) {
    const weather = data.weather.description;
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
}