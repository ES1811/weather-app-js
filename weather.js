//creating weather

let weather = {
    temperature: 0,
    condition: "Clear", //more conditions added later
    cloudiness: 0
}

function Weather() {
    //randomize temperatures between -10 and +40
    weather.temperature = Math.floor(Math.random() * 51) - 10; //multiply by 50 to give it a wide range
    //multiplying by 51 will guarantee max temperature will be +40ºC rather than 39 if mulitplied by 50

    //random selection of weather conditions
    const conditions = ["Clear", "Snow", "Rain", "Cloudy", "Storm"]
    weather.condition = conditions[Math.floor(Math.random() * conditions.length)];

    //random selection of weather cloudiness between 0% and 100%
    //similar comment above, multiplying by 100 will give max cloudiness 99%
    //so multiplying by 101 guarantees it will be at 100% max
    weather.cloudiness = Math.floor(Math.random() * 101);

    //specify if statement for lowest temp and worst weather
    let warning = document.getElementById("warning");
    if (weather.condition === "Snow" && weather.temperature < -10) {
        warning.textContent = "Stay at home kids :)";
    } else {
        warning.textContent = "";
    }

    //time to prevent having weird weather conditions with weird temps (like snow with 40ºC)
    if (weather.condition === "Snow" && weather.temperature >= 0) {
        weather.condition = "Cloudy"; // change condition to Cloudy if temperature is above 0°C
    } else if (weather.temperature >= 0 && weather.temperature <= 10) {
        //settting condition based on random chance
        weather.condition = Math.random() < 0.5 ? "Cloudy" : "Clear";
    } else if (weather.temperature >= 10 && weather.temperature <= 20) {
        //the weather could be cloudy, rain, or storm
        weather.condition = ["Cloudy", "Rain", "Storm"][Math.floor(Math.random() * 3)];
    } else if (weather.temperature >= 21 && weather.cloudiness > 27 && weather.cloudiness < 55) {
        //warm weather with moderate cloudiness
        weather.condition = Math.random() < 0.5 ? "Clear" : "Rain";
    } else if (weather.temperature >= 28) {
        //hot weather with a tendency for clear skies
        weather.condition = "Clear";
    } else if (weather.cloudiness >= 20 && weather.cloudiness <= 50) {
        //if cloudiness is high, the weather is rainy or cloudy
        weather.condition = Math.random() < 0.5 ? "Rain" : "Cloudy";
    }
}

function WeatherDisplay() {
    //call necessary text from the html file
    document.getElementById("temperature").textContent = `Temperature: ${weather.temperature} ºC`;
    document.getElementById("condition").textContent = `Condition: ${weather.condition}`;
    document.getElementById("cloudiness").textContent = `Cloudiness: ${weather.cloudiness}%`;

}

setInterval(() => {
    Weather();
    WeatherDisplay();
}, 180000)

Weather();
WeatherDisplay();