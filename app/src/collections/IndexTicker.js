define([
  'underscore',
  'backbone',
  'models/IndexTicker'
], function(
  _,
  Backbone,
  IndexTickerModel){
  
  return Backbone.Collection.extend({
    model: IndexTickerModel
  });

});
