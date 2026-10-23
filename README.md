# WeatherScope

Application météo en JavaScript vanilla : on tape une ville, elle affiche la météo actuelle et l'heure locale.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![OpenWeatherMap](https://img.shields.io/badge/API-OpenWeatherMap-EB6E4B)

## Fonctionnalités

- Recherche par ville (bouton ou touche Entrée)
- Température, humidité, vent et conditions, avec une icône adaptée (Font Awesome)
- Heure locale de la ville recherchée, mise à jour en direct (API TimezoneDB)

## Lancer le projet

1. Cloner le dépôt.
2. Copier `config.example.js` en `config.js` et y mettre ses clés [OpenWeatherMap](https://openweathermap.org/api) et [TimezoneDB](https://timezonedb.com/api).
3. Ouvrir `index.html` dans le navigateur.

## Structure

```text
index.html          page
style.css           styles
script.js           appels API et affichage
config.example.js   modèle pour les clés API
```
---

Réalisé par **Ethan Lalienne** · [GitHub](https://github.com/ethn924) · [Portfolio](https://ethn924.github.io/Portfolio/)
