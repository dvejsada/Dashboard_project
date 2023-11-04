document.getElementById("e2_img").addEventListener("click", play_E2);
document.getElementById("fajn_img").addEventListener("click", play_Fajn);
document.getElementById("city_img").addEventListener("click", play_City);
document.getElementById("vol_plus").addEventListener("click", vol_up);
document.getElementById("vol_minus").addEventListener("click", vol_down);
document.getElementById("temp_plus").addEventListener("click", (evt) => temp_change("up"));
document.getElementById("temp_minus").addEventListener("click", (evt) => temp_change("down"));

function play_E2() {
    domain = "media_player"
    service = "play_media"
    entity = "media_player.obyvak_speaker"
    data = {media_content_id: "media-source://radio_browser/229a2972-2d42-4f57-94a9-da84211bd575", media_content_type: "audio/mpeg"}
    callService(entity, service, domain, data);
}

function play_City() {
    domain = "media_player"
    service = "play_media"
    entity = "media_player.obyvak_speaker"
    data = {media_content_id: "media-source://radio_browser/cc25c606-91ab-436f-a4ea-c3b151eb1e10", media_content_type: "audio/mpeg"}
    callService(entity, service, domain, data);
}

function play_Fajn() {
    domain = "media_player"
    service = "play_media"
    entity = "media_player.obyvak_speaker"
    data = {media_content_id: "media-source://radio_browser/8c5750b4-6870-11ea-9d09-52543be04c81", media_content_type: "audio/mpeg"}
    callService(entity, service, domain, data);
}

function vol_up() {
    domain = "media_player"
    service = "volume_up"
    entity = "media_player.obyvak_speaker"
    data = {}
    callService(entity, service, domain, data);
}

function vol_down() {
    domain = "media_player"
    service = "volume_down"
    entity = "media_player.obyvak_speaker"
    data = {}
    callService(entity, service, domain, data);
}

function temp_change(change) {

    var new_temp

    if (change == "up") {
        new_temp = heating_target_temp + 0.5
    }
    else {
        new_temp = heating_target_temp - 0.5
    }

    domain = "climate"
    service = "set_temperature"
    entity = "climate.bathroom"
    data = {temperature: new_temp}
    callService(entity, service, domain, data);
}