const APIKEY = "9c8778b9a7b9f840a2eb89aaf2bab6a5";

let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.querySelector('#cityName').innerHTML = data.name;
            document.querySelector('#temp').innerHTML = `Température : ${data.main.temp}°C`;
            document.querySelector('#humidity').innerHTML = `Humidité : ${data.main.humidity}%`;
            document.querySelector('#wind').innerHTML = `Vent : ${data.wind.speed} km/h`;
            document.querySelector('#conditions').innerHTML = `Conditions : ${data.weather[0].description}`;
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
