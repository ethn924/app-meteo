// 9c8778b9a7b9f840a2eb89aaf2bab6a5 = clé API
const APIKEY = "9c8778b9a7b9f840a2eb89aaf2bab6a5";


let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${APIKEY}&units=metric&lang=fr`; // Utiliser des backticks pour l'interpolation de la variable + récupération
// des données de l'API
fetch(url).then( response => response.json().then((data) => {
    console.log(data);
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = data.main.temp + '°';
    document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h';

})
).catch(err => console.log('Erreur ' + err));

//boutton du bloc

document.getElementById("searchButton").addEventListener("click", function() {
    const blocksContainer = document.getElementById("box-container");
    blocksContainer.style.display = "box"; // Afficher les blocs
});