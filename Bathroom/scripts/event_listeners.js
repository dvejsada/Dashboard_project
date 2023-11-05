// Set event listeners for buttons

document.getElementById("e2_img").addEventListener("click", (evt) =>  play_radio("media-source://radio_browser/229a2972-2d42-4f57-94a9-da84211bd575"));
document.getElementById("fajn_img").addEventListener("click", (evt) =>  play_radio("media-source://radio_browser/8c5750b4-6870-11ea-9d09-52543be04c81"));
document.getElementById("city_img").addEventListener("click", (evt) =>  play_radio("media-source://radio_browser/cc25c606-91ab-436f-a4ea-c3b151eb1e10"));
document.getElementById("vol_plus").addEventListener("click", (evt) => vol_change("up"));
document.getElementById("vol_minus").addEventListener("click", (evt) => vol_change("down"));
document.getElementById("temp_plus").addEventListener("click", (evt) => temp_change("up"));
document.getElementById("temp_minus").addEventListener("click", (evt) => temp_change("down"));
document.getElementById("cal_img_wrapper").addEventListener("click", (evt) => heat_mode_change("auto"));

// Set functions for buttons

function play_radio(source) {
    callService("media_player.obyvak_speaker", "play_media", "media_player", {media_content_id: source, media_content_type: "audio/mpeg"});
}

function vol_change(change) {
    if (change == "up"){
        service = "volume_up";
    }
    else {
        service = "volume_down";
    }

    callService("media_player.obyvak_speaker", service, "media_player", {});
}

function temp_change(change) {

    var new_temp;
    if (change == "up") {
        new_temp = heating_target_temp + 0.5
    }
    else {
        new_temp = heating_target_temp - 0.5
    }
    callService(entity_heating_target_temp[1], "set_temperature", "climate", {temperature: new_temp});
}

function heat_mode_change(mode) {
    callService(entity_heating_target_temp[1], "set_hvac_mode", "climate", {hvac_mode: mode});
}