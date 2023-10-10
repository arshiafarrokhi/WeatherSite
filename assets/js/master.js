const apiKey = "0cb34ba0fb4d7f9ae8a9ad6c30fec97f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search>input");
const searchBtn = document.querySelector(".search>button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".feels-like").innerHTML = data.main.feels_like;
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".country").innerHTML = data.sys.country;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/clouds.png?raw=true"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/clear.png?raw=true"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/rain.png?raw=true"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/drizzle.png?raw=true"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/mist.png?raw=true"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "https://github.com/Khyes/12_weather_webapp/blob/main/img/snow.png?raw=true"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
})