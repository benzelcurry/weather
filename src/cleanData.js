// Cleans the data returned from OpenWeather API and returns a simplified object that only contains necessary data

/* DEFAULT UNITS:
Temperature: Kelvin
Humidity: %
Wind speed: m/s
*/

export default function cleanData(data) {
    const time = data.dt;
    const weather = data.weather[0].description;
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    
    return {time, weather, temperature, feelsLike, humidity, wind};
}