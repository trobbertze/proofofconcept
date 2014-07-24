define([
  'famous/core/Engine',
  'views/Home',
  'control/Controller'
], function(
  Engine,
  Home,
  Controller) {
    return {
      initialize: function() {

        var mainContext = Engine.createContext();

        mainContext.setPerspective(1000);

        var home = new Home();

        Controller.register(home);

        mainContext.add(home);
      }
  };
});
