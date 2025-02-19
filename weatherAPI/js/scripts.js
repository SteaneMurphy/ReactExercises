var URL = "http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&APPID=0467bbad2230162c7dc089ff287cdc7f";

function readAPIData(data){
    document.getElementById("weather").innerHTML += 
    `Current Temperature in ${data.name} is ${data.main.temp} degrees`;
};

fetch(URL)
.then(response => response.json())
.then(data => readAPIData(data));
