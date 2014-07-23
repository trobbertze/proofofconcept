define([
  'famous/core/Engine',
  'views/Home'
], function(
  Engine,
  Home) {
    return {
      initialize: function() {

        var mainContext = Engine.createContext();

        mainContext.setPerspective(1000);

        var home = new Home();

        mainContext.add(home);
      }
  };
});
