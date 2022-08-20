// Cleans the forecast data and returns the five-day forecast for every 24 hours from its call

export default function forecastCleaner(data) {
    let fiveDayForecast = {};

    for (let i = 7; i < 40; i += 8) {
        let array = [];

        const time = data.list[i].dt;
        const weather = data.list[i].weather[0].description;
        const temperature = data.list[i].main.temp;

        array.push(time, weather, temperature)

        fiveDayForecast[i] = array;
    }

    return fiveDayForecast;
};