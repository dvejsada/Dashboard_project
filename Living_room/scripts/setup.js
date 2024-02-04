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
var today_nameday;
var living_room_heating;
var guest_mode;
var cleaning_mode;
var living_room_tv;
var sun_state;

// Setting up entities names - set id and entity name. Id 1 is reserved for call getting entitites states

var entity_current_time = [2,"sensor.time"];
var entity_current_outside_temp = [3,"sensor.openweathermaphourly_temperature"];
var entity_internal_temp = [4,"sensor.teplotni_sensor_obyvak_temperature"]
var entity_weather_state = [5,"sensor.openweathermaphourly_condition"];
var entity_livingroom_heating = [6,"sensor.living_room_heating"];
var entity_internal_humidity = [7,"sensor.teplotni_sensor_obyvak_humidity"]
var entity_outside_rain_probability = [8,"sensor.openweathermapdaily_forecast_precipitation_probability"];
var entity_moon_state = [9, "sensor.moon_phase"];
var entity_uv_index = [10,"sensor.openweathermaphourly_uv_index"];
var entity_today_nameday = [11,"sensor.svatky_a_narozeniny"];
var entity_guest_mode = [12,"input_boolean.guest_mode"];
var entity_cleaning_mode = [13,"input_boolean.cleaning_mode"];
var entity_living_room_tv = [14,"media_player.living_room_tv_3"];
var entity_sun_state = [15,"sun.sun"];

// Connection global variables
var socket;
var service_call_id;
