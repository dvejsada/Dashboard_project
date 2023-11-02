function handle_event_response(response) {
    if (response.id === 2){
        current_time = response.event.variables.trigger.to_state.state;
        updateClock();
    }
    if (response.id === 3){
        current_outside_temp = response.event.variables.trigger.to_state.state;
        updateWeatherInfo();
    }
    if (response.id === 4){
        internal_temp = response.event.variables.trigger.to_state.state;
        updateHeatingInfo();
    }
    if (response.id === 5){
        weather_state = response.event.variables.trigger.to_state.state;
        updateWeatherInfo();
    }
    if (response.id === 6){
        next_bus_time = response.event.variables.trigger.to_state.state;
        updateBusInfo();
    }
    if (response.id === 7){
        internal_humidity = response.event.variables.trigger.to_state.state;
        updateHeatingInfo();
    }
    if (response.id === 8){
        outside_rain_probability = response.event.variables.trigger.to_state.state;
        updateWeatherInfo();
    }
    if (response.id === 9){
        moon_state = response.event.variables.trigger.to_state.state;
        updateWeatherInfo();
    }
    if (response.id === 10){
        uv_index = response.event.variables.trigger.to_state.state;
        updateWeatherInfo();
    }
    if (response.id === 11){
        bathroom_heating = response.event.variables.trigger.to_state.state;
        updateHeatingInfo();
    }
    if (response.id === 12){
        heating_mode = response.event.variables.trigger.to_state.state;
        heating_target_temp = response.event.variables.trigger.to_state.attributes.temperature;
        updateHeatingInfo();
    }
}

// Filter the initial received states and assign to corresponding variables
function filter_states(response) {

    // Filter weather state
    weather_state = response["result"].filter(function (el) { return el.entity_id == entity_weather_state[1]})[0].state;

    // Filter current time
    current_time = response["result"].filter(function (el) { return el.entity_id == entity_current_time[1]})[0].state;

    // Filter current outside temp
    current_outside_temp = response["result"].filter(function (el) { return el.entity_id == entity_current_outside_temp[1]})[0].state;

    // Filter daily prec. probability
    outside_rain_probability = response["result"].filter(function (el) { return el.entity_id == entity_outside_rain_probability[1]})[0].state;

    // Filter next bus
    next_bus_time = response["result"].filter(function (el) {return el.entity_id == entity_next_bus_time[1]})[0].state;

    // Filter moon phase
    moon_state = response["result"].filter(function (el) {return el.entity_id == entity_moon_state[1]})[0].state;

    // Filter moon phase
    uv_index = response["result"].filter(function (el) {return el.entity_id == entity_uv_index[1]})[0].state;

    // Filter internal temp
    internal_temp = response["result"].filter(function (el) {return el.entity_id == entity_internal_temp[1]})[0].state;

    // Filter internal humidity
    internal_humidity = response["result"].filter(function (el) {return el.entity_id == entity_internal_humidity[1]})[0].state;

    // Filter bathroom heating
    bathroom_heating = response["result"].filter(function (el) {return el.entity_id == entity_bathroom_heating[1]})[0].state;

    // Filter bathroom heating mode and preset temperature
    heating_mode = response["result"].filter(function (el) {return el.entity_id == entity_heating_target_temp[1]})[0].state
    heating_target_temp = response["result"].filter(function (el) {return el.entity_id == entity_heating_target_temp[1]})[0].attributes.temperature;

    updateHeatingInfo();
    updateClock();
    updateBusInfo();
    updateWeatherInfo();
}