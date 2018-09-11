const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
    PubSub.subscribe('SelectView:planet-selected', (event) => {
        const planetName = event.detail;
        console.log(planetName);
        const planetObject = this.planets.find(planet => {
          return planet.name === planetName;
        });
        PubSub.publish('Planets:selected-planet-ready', planetObject);
    });
}

module.exports = SolarSystem;
