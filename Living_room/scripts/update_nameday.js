function updateNameday() {
    if (today_nameday != null) {
        var span_nameday = document.getElementById("today_nameday");
        span_nameday.innerText = today_nameday;    
    }
}