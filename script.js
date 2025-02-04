const APIKEY = "9c8778b9a7b9f840a2eb89aaf2bab6a5";

let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.querySelector('#cityName').innerHTML = `<i class="fas fa-city"></i> ${data.name}`;
            document.querySelector('#temp').innerHTML = `<i class="fas fa-thermometer-half"></i> ${data.main.temp}°C`;
            document.querySelector('#humidity').innerHTML = `<i class="fas fa-tint"></i> ${data.main.humidity}%`;
            document.querySelector('#wind').innerHTML = `<i class="fas fa-wind"></i> ${data.wind.speed} km/h`;
            document.querySelector('#conditions').innerHTML = `<i class="fas fa-cloud"></i> ${data.weather[0].description}`;
        })
        .catch(error => console.log('Erreur lors de la récupération des données : ' + error.message));
};

// Ajout d'un écouteur d'événement sur le bouton de recherche
document.querySelector("#searchButton").addEventListener("click", function() {
    let ville = document.querySelector("#cityInput").value;
    if (ville) {
        apiCall(ville);
    } else {
        alert("Veuillez entrer un nom de ville !");
    }
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = "Local Time : " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();
