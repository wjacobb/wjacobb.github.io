function windchill(temperature, windspeed) {
    let temperature = 76;
    let windspeed = 3;
    var chill = 35.74 + (0.6215 * temperature) - (35.75 * (windspeed ** 0.16)) + (0.4275 * temperature * (windspeed ** 0.16));
    document.querySelector('#chill').textContent = chill;
}