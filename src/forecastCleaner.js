// Cleans the forecast data and returns the five-day forecast for every 24 hours from its call

export default function forecastCleaner(data) {
    let fiveDayForecast = {};

    for (let i = 7; i < 40; i += 8) {
        fiveDayForecast[i] = (data.list[i]);
    }

    return fiveDayForecast;
};