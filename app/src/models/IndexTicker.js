define([
  'underscore',
  'backbone',
  'famous/utilities/Timer'
], function(
  _,
  Backbone,
  Timer) {
  return Backbone.Model.extend({
    // ---------------------------------------------------------------------------
    defaults: {
      title: '',
      level: 0,
      changePoints: 0,
      changePerc: 0
    },
    // ---------------------------------------------------------------------------
    initialize: function() {
        this.on(
          'change:level',
          this._onLevelChange,
          this
        );

        this._mockChanges();
    },
    // ---------------------------------------------------------------------------
    _onLevelChange: function() {
      this._setNewChanges(
        this.previous('level'),
        this.get('level')
      );
    },
    // ---------------------------------------------------------------------------
    _setNewChanges: function(oldLevel, newLevel) {
      this.set('changePoints', newLevel - oldLevel);
      this.set('changePerc', (this.get('changePoints') / this.get('level')) *100 );
    },
    // ---------------------------------------------------------------------------
    _mockChanges: function() {
      // TODO: This is to mock changes in the model and should be replaced by
      // actual API calls.
      Timer.setTimeout(function() {
        var upOrDown = Math.random() > 0.5 ? 1 : -1;
        var changeInLevel = upOrDown * (Math.round(Math.random() * 10 * 100)) / 100; // rounded to 2 decimals.
        this.set('level', this.get('level') + changeInLevel);
        this._mockChanges();
      }.bind(this), Math.round(Math.random() * 10000));
    }
  });
});
