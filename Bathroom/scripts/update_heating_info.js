function updateHeatingInfo() {
        
    // Set current temp value
    var span_internal_temp = document.getElementById("internal_temp_value");
    span_internal_temp.innerText = String(Math.round(internal_temp));
    
    // Set outside rain probability value
    var span_internal_humidity = document.getElementById("internal_humidity_value");
    span_internal_humidity.innerText = String(Math.round(internal_humidity));
}