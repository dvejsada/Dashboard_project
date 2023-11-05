function updateHeatingInfo() {
        
    // Set current temp value on the dashboard
    var span_internal_temp = document.getElementById("internal_temp_value");
    span_internal_temp.innerText = String(Math.round(internal_temp));
    
    // Set internal humidity value on the dashboard
    var span_internal_humidity = document.getElementById("internal_humidity_value");
    span_internal_humidity.innerText = String(Math.round(internal_humidity));

    // Set heating icon opacity based on the
    var opacity = bathroom_heating/100
    if (opacity < 0.2) {
        // Minimum opacity so the icon is visible even if no heating
        opacity = 0.2
    }
    document.getElementById("flame").style.opacity = opacity;

    // Set the current temperature preset to dashboard

    if (String(heating_target_temp).length < 3) {
        document.getElementById("temp_text").innerText = heating_target_temp + ".0";
    }
    else {
        document.getElementById("temp_text").innerText = heating_target_temp;
    }

    if (heating_mode == "auto") {
        document.getElementById("cal_img_wrapper").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        document.getElementById("cal_img").style.opacity = "1";
    }
    else {
        document.getElementById("cal_img_wrapper").style.backgroundColor = "rgba(255, 255, 255, 0.08)";
        document.getElementById("cal_img").style.opacity = "0.9";
    }

}