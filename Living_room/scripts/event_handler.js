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
        living_room_heating = response.event.variables.trigger.to_state.state;
        updateHeatingInfo();
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
        today_nameday = response.event.variables.trigger.to_state.state;
        updateNameday();
    }

    if (response.id === 12){
        guest_mode = response.event.variables.trigger.to_state.state;
        updateButtons();
    }

    if (response.id === 13){
        cleaning_mode = response.event.variables.trigger.to_state.state;
        updateButtons();
    }

    if (response.id === 14){
        living_room_tv = response.event.variables.trigger.to_state.state;
        updateButtons();
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

    // Filter moon phase
    moon_state = response["result"].filter(function (el) {return el.entity_id == entity_moon_state[1]})[0].state;

    // Filter moon phase
    uv_index = response["result"].filter(function (el) {return el.entity_id == entity_uv_index[1]})[0].state;

    // Filter internal temp
   internal_temp = response["result"].filter(function (el) {return el.entity_id == entity_internal_temp[1]})[0].state;

    // Filter internal humidity
    internal_humidity = response["result"].filter(function (el) {return el.entity_id == entity_internal_humidity[1]})[0].state;

    // Filter nameday sensor
    today_nameday = response["result"].filter(function (el) {return el.entity_id == entity_today_nameday[1]})[0].state;

    // Filter living room heating
    living_room_heating = response["result"].filter(function (el) {return el.entity_id == entity_livingroom_heating[1]})[0].state;

    // Filter guest mode
    guest_mode = response["result"].filter(function (el) {return el.entity_id == entity_guest_mode[1]})[0].state;

    // Filter cleaning mode
    cleaning_mode = response["result"].filter(function (el) {return el.entity_id == entity_cleaning_mode[1]})[0].state;

    // Filter living room tv
    living_room_tv = response["result"].filter(function (el) {return el.entity_id == entity_living_room_tv[1]})[0].state;

    updateHeatingInfo();
    updateClock();
    updateWeatherInfo();
    updateNameday();
    updateButtons();
}