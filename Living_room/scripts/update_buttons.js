function updateButtons() {
    if (cleaning_mode == "on") {
        document.getElementById("button_clean").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
    else {
        document.getElementById("button_clean").style.backgroundColor = "rgba(255, 255, 255, 0.08)";
    }

    if (guest_mode == "on") {
        document.getElementById("button_guest").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
    else {
        document.getElementById("button_guest").style.backgroundColor = "rgba(255, 255, 255, 0.08)";
    }

    if (living_room_tv == "on") {
        document.getElementById("button_tv").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
    else {
        document.getElementById("button_tv").style.backgroundColor = "rgba(255, 255, 255, 0.08)";
    }
}