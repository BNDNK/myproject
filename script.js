const apiKey = "dd298bb4fa9e4eb3846877f796b6b3d3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?& units=metric&q=atlanta";

async function CheckWeather(){
    const response = await fetch(apiUrl + '&appid=${apiKey}');
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.temp; + "F";
    document.querySelector(".humidity").innerHTML = data.humidity;
    document.querySelector(".wind").innerHTML = data.wind;

}

CheckWeather();
