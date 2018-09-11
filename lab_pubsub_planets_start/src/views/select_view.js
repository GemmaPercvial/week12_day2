const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(){
};

  SelectView.prototype.bindEvents = function(){
    const planetLis = document.querySelectorAll('li');
    for (var i = 0; i < planetLis.length; i++) {
        planetLis [i].addEventListener('click', (event) => {
            const planetId = event.target.id;
            PubSub.publish('SelectView:planet-selected', planetId);
        });
    }
  }

  module.exports = SelectView;