// Setting up the global variables to be filled with HA entities

var current_outside_temp;
var max_outside_temp;
var outside_rain_probability;
var outside_rain_amount;
var weather_state;
var moon_state;
var uv_index;
var next_bus_time;
var current_time;
var sun_state;

// Setting up entities names - set id and entity name. Id 1 is reserved for call getting entitites states

var entity_current_time = [2,"sensor.time"];
var entity_current_outside_temp = [3,"sensor.openweathermaphourly_temperature"];
var entity_outside_rain_amount = [4,"sensor.openweathermapdaily_forecast_precipitation"];
var entity_weather_state = [5,"sensor.openweathermaphourly_condition"];
var entity_next_bus_time = [6,"sensor.nodered_5a45b64cb0e0c4c2"];
var entity_max_outside_temp = [7,"sensor.openweathermapdaily_forecast_temperature"];
var entity_outside_rain_probability = [8,"sensor.openweathermapdaily_forecast_precipitation_probability"];
var entity_moon_state = [9, "sensor.moon_phase"];
var entity_uv_index = [10,"sensor.openweathermaphourly_uv_index"];
var entity_sun_state = [11,"sun.sun"];

// Connection global variables
var socket;
var service_call_id;
