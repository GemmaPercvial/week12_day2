const PubSub = require('../helpers/pub_sub.js');
const Planets = require('../data/planets');

const PlanetInfoView = function(container){
    this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
    PubSub.subscribe('Planets:selected-planet-ready', (event) =>{
        this.displayPlanetInfo(event.detail);
    });

}

PlanetInfoView.prototype.displayPlanetInfo = function(planet){

    const planetInfoList = document.createElement('ul')
    this.container.innerHTML = '';
    this.container = document.querySelector('.planet-details').appendChild(planetInfoList);

    const planetName = document.createElement('li')
    planetName.textContent = `${planet.name}`;
    planetInfoList.appendChild(planetName);

    const planetDay = document.createElement('li');
    planetDay.textContent = `Day: ${planet.day} Earth Days`;
    planetInfoList.appendChild(planetDay);

    const planetOrbit = document.createElement('li')
    planetOrbit.textContent = `Orbit: ${planet.orbit}`;
    planetInfoList.appendChild(planetOrbit);

    const planetSurface = document.createElement('li')
    planetSurface.textContent = `Surface: ${planet.surface}`;
    planetInfoList.appendChild(planetSurface);

    const planetVolume = document.createElement('li')
    planetVolume.textContent = `Volume: ${planet.volume}`;
    planetInfoList.appendChild(planetVolume);

    const planetGravity =  document.createElement('li')
    planetGravity.textContent = `Gravity: ${planet.gravity}`;
    planetInfoList.appendChild(planetGravity);

    const planetMoons = document.createElement('li')
    planetMoons.textContent = `Moons: ${planet.moons}`;
    planetInfoList.appendChild(planetMoons);
    
}

module.exports = PlanetInfoView;
