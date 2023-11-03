# Dashboard for NSPanel Pro

Custom HTML based dashboards for NSPanel Pro from Sonoff to connect to Home Assistant instance. This is a custom solution based primarily on my needs in different rooms, so for your use it needs to be adapted to your situations, needs and entities available (HTML/JS/CSS knowledge required).

| Living Room  | Bathroom | Hallway |
| ------------- | ------------- | ------------- |
| ![Screenshot](screenshot_living_room.png?raw=false "Living Room")  | ![Screenshot](screenshot_bathroom.png?raw=false "Bathroom")  | ![Screenshot](screenshot_hallway.png?raw=false "Hallway")  |


## What do you need?

- Sonoff NSPanel Pro installed - https://sonoff.tech/product/central-control-panel/nspanel-pro/
- Fully kiosk browser (or other browser) installed on NSPanel and ADB access - https://blakadder.com/nspanel-pro-sideload/
- Running Home Assistant - https://www.home-assistant.io/

## How to use?

- Download the latest release
- Add secrets.js file to the folder that will contain 2 variables - url (includes the URL for websocket connection to Home Assistant ("ws://YOUR_IP_ADDRESS:8123/api/websocket")) and token (contains your long-lived access token - https://developers.home-assistant.io/docs/auth_api/#long-lived-access-token)
- Setup all relevant entities in setup.js file and make other modification as you see fit.
- Copy the chosen directory on the SD card of the NSPanel Pro using ADB
- In Fully kiosk, set the dashboard.html as a Start URL

It is also advisable to disable scrolling and some other actions in the Fully Kiosk settings 

## What else do I need?

It is advisable to turn on/off the screen of the NSPanel when not in the room. This can be achieved using the fully kiosk broswer HA integration that expose some entities to control the NSPanel remotely and some HA / NodeRed automations.

It is also advisable to reload the page every time the screen is switched on. Sometimes, the websocket connection is terminated when the screen if off and the panel displays outdated info.

## What next?

This is still work in progress, there is a lot of things that I would like to improve or add to the dashboards. Please feel free to contribute or raise an issue or enhancement tip.

## Attributions

The dashboards are using beautifull weather icons created by Bas Milius - https://github.com/basmilius/weather-icons
