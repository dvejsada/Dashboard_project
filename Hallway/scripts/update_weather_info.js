function updateWeatherInfo() {
    var weatherImage = document.getElementById("weather_image");
    var basePath = "img/";
    var rounded_uv_index = Math.round(uv_index)

    // Set weather state image
    switch(weather_state) {
        case 'clear-night':
            // Set moon state
            switch(moon_state) {
                case "new_moon":
                    weatherImage.src = basePath + "moon-new.svg";
                    break;
                case "waxing_crescent":
                    weatherImage.src = basePath + "moon-waxing-crescent.svg";
                    break;
                case "first_quarter":
                    weatherImage.src = basePath + "moon-first-quarter.svg";
                    break;
                case "waxing_gibbous":
                    weatherImage.src = basePath + "moon-waxing-gibbous.svg";
                    break;
                case "full_moon":
                    weatherImage.src = basePath + "moon-full.svg";
                    break;
                case "waning_gibbous":
                    weatherImage.src = basePath + "moon-waning-gibbous.svg";
                    break;
                case "last_quarter":
                    weatherImage.src = basePath + "moon-last-quarter.svg";
                    break;
                case "waning_crescent":
                    weatherImage.src = basePath + "moon-waning-crescent.svg";
                    break;
            }
            break;
        case 'cloudy':
            weatherImage.src = basePath + "cloudy.svg";
            break;
        case 'fog':
            weatherImage.src = basePath + "fog-day.svg";
            break;
        case 'hail':
            weatherImage.src = basePath + "hail.svg";
            break;
        case 'lightning':
            weatherImage.src = basePath + "lightning.svg";
            break;
        case 'lightning-rainy':
            weatherImage.src = basePath + "thunderstorms-rain.svg";
            break;
        case 'partlycloudy':
            weatherImage.src = basePath + "partly-cloudy-day.svg";
            break;
        case 'pouring':
            weatherImage.src = basePath + "extreme-rain.svg";
            break;
        case 'rainy':
            weatherImage.src = basePath + "rain.svg";
            break;
        case 'snowy':
            weatherImage.src = basePath + "snow.svg";
            break;
        case 'snowy-rainy':
            weatherImage.src = basePath + "sleet.svg";
            break;
        case 'sunny':
            // Set image with uv index
            weatherImage.src = basePath + "uv-index-" + String(rounded_uv_index) + ".svg";   
            break;
        case 'windy':
            weatherImage.src = basePath + "wind.svg";
            break;
        case 'windy-variant':
            weatherImage.src = basePath + "umbrella-wind.svg";
            break;
        case 'exceptional':
            weatherImage.src = basePath + "not-available.svg";
            break;
        default:
            console.log("Invalid weather state");
    }

    // Set current temp value
    var span_outside_current_temp = document.getElementById("temp_value");
    span_outside_current_temp.innerText = String(Math.round(current_outside_temp*10)/10);

    // Set max temp value
    var span_outside_max_temp = document.getElementById("outside_max_temp_value");
    span_outside_max_temp.innerText = String(Math.round(max_outside_temp*10)/10);

    // Set outside rain probability value
    var span_prec_prob = document.getElementById("rain_prob_value");
    span_prec_prob.innerText = String(outside_rain_probability);

    // Set outside rain amount value
    var span_prec_amount = document.getElementById("outside_rain_amount_value");
    span_prec_amount.innerText = String(outside_rain_amount);
}