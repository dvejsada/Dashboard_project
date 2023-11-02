document.getElementById("button_guest").addEventListener("click", guestClicked);
document.getElementById("button_clean").addEventListener("click", cleanClicked);
document.getElementById("button_tv").addEventListener("click", tvClicked);

function guestClicked() {
    domain = "input_boolean"
    service = "toggle"
    entity = "input_boolean.guest_mode"
    data = {}
    callService(entity, service, domain, data);
}

function cleanClicked() {
    domain = "input_boolean"
    service = "toggle"
    entity = "input_boolean.cleaning_mode"
    data = {}
    callService(entity, service, domain, data);
}

function tvClicked() {
    domain = "media_player"
    service = "toggle"
    entity = "media_player.living_room_tv_3"
    data = {}
    callService(entity, service, domain, data);
}