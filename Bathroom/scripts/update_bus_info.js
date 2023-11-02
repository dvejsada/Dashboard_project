function updateBusInfo() {
    // Convert the string to a number.
    const time = parseInt(next_bus_time, 10);
    var displayTime
 
    // Add the correct string based on the value of the time.
    if (time === 1) {
        displayTime = `${time} minuta`;
    } else if (time >= 2 && time <= 4) {
        displayTime = `${time} minuty`;
    } else if (time > 4) {
        displayTime = `${time} minut`;
    }

    // Get the span HTML element and set its inner text.
    const timeSpanElement = document.getElementById('bus_time_value');
    if (timeSpanElement !== null) {
        timeSpanElement.innerText = displayTime;
    } 

}