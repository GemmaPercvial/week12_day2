const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view');
const PlanetInfoView = require('./views/planet_info_view');

document.addEventListener('DOMContentLoaded', () => {

  const selectView = new SelectView();
  selectView.bindEvents();
  
  const planetDetailsElement = document.querySelector('.planet-details')

  const planetInfoView = new PlanetInfoView(planetDetailsElement);
  planetInfoView.bindEvents();

  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();


});
