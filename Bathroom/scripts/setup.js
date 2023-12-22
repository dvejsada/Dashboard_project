// Setting up the global variables to be filled with HA entities

var current_outside_temp;
var outside_rain_probability;
var weather_state;
var moon_state;
var uv_index;
var next_bus_time;
var current_time;
var internal_temp;
var internal_humidity;
var bathroom_heating;
var heating_target_temp;
var heating_mode;
var sun_state;

// Setting up entities names - set id and entity name. Id 1 is reserved for call getting entities states

var entity_current_time = [2,"sensor.time"];
var entity_current_outside_temp = [3,"sensor.openweathermaphourly_temperature"];
var entity_internal_temp = [4,"sensor.everything_presence_one_6ea20c_temperature"]
var entity_weather_state = [5,"sensor.openweathermaphourly_condition"];
var entity_next_bus_time = [6,"sensor.nodered_5a45b64cb0e0c4c2"];
var entity_internal_humidity = [7,"sensor.everything_presence_one_6ea20c_humidity"]
var entity_outside_rain_probability = [8,"sensor.openweathermapdaily_forecast_precipitation_probability"];
var entity_moon_state = [9, "sensor.moon_phase"];
var entity_uv_index = [10,"sensor.openweathermaphourly_uv_index"];
var entity_bathroom_heating = [11,"sensor.bathroom_heating"];
var entity_heating_target_temp = [12,"climate.bathroom"];
var entity_sun_state = [13,"sun.sun"];

// Connection global variables
var socket;
var service_call_id;
