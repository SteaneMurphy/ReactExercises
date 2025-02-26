function callAPI(location) 
{
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=0467bbad2230162c7dc089ff287cdc7f`;

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .then(data => readAPIData(data))
    .catch(error => locationError());
}

function readAPIData(data){
    document.getElementById("weather").innerHTML = "";
    document.getElementById("weather").innerHTML += 
    `Current Temperature in ${data.name} is ${data.main.temp} degrees`;
};

//sets location validation text
function locationError()
{
    document.querySelector(".locationValidation").innerHTML = "Unknown location entered, try another location";
}

//clears location validation text
function clearLocationError()
{
    document.querySelector(".locationValidation").innerHTML = "";
}

//call API when user clicks search button
document.querySelector("#searchBtn").addEventListener("click", function(){
    callAPI(document.querySelector("#searchText").value);
});

//call API when user presses ENTER key when input is in focus
document.querySelector("#searchText").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        callAPI(document.querySelector("#searchText").value);
    }
});

//clear validation as soon as user changes input
document.querySelector("#searchText").addEventListener("input", function() {
    clearLocationError();
});



