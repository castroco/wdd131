function calculateWindChill(tempF, speed) {
    let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    f = Math.round(f * 10) / 10;
    if (tempF <= 50 && speed > 3) {
        return f;
    } else {
        return "N/A";
    }
}

function get_data() {
    let date = new Date();
    let full_year = date.getFullYear();
    const year_span = document.querySelector("#currentyear");
    let year = `${full_year}`;
    year_span.innerHTML = year;

    document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;
    let temp = parseFloat(document.querySelector("#temperature").textContent);
    let wind = parseFloat(document.querySelector("#wind").textContent);
    document.querySelector("#windchill").textContent = calculateWindChill(temp, wind);
}