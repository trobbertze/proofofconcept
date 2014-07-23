define([
  'underscore',
  'famous/core/View',
  'famous/core/Surface',
  'famous/core/Modifier',
  'famous/surfaces/ContainerSurface',
  'famous/views/SequentialLayout',
  'famous/utilities/Utility'
], function(
  _,
  View,
  Surface,
  Modifier,
  ContainerSurface,
  SequentialLayout,
  Utility) {
  // ---------------------------------------------------------------------------
  function Item(options) {
    View.apply(this, arguments);

    this.model = options.model;

    this.formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2
    });

    var width = 90;

    var container = new ContainerSurface({
      size: [width, 47],
      classes: [
        'item'
      ]
    });

    var layout = new SequentialLayout({
      direction: Utility.Direction.y
    });

    var title = new Surface({
      size: [width, 15],
      content: this.model.get('title'),
      classes: [
        'title'
      ]
    });

    this.level = new Surface({
      size: [width, 15],
      content: this.formatter.format(this.model.get('level'))
    });

    var changeLayout = new SequentialLayout({
      direction: Utility.Direction.X
    });

    this.changePoints = new Surface({
      size: [30, 15],
      content: this.model.get('changePoints'),
      classes: [
        'changes'
      ],
      properties: {
        color: this._getChangeColor(this.model.get('changePoints'))
      }
    });

    this.changePerc = new Surface({
      size: [10, 15],
      content: this._formatPercentageStr(this.model.get('changePerc')),
      classes: [
        'changes'
      ],
      properties: {
        color: this._getChangeColor(this.model.get('changePoints'))
      }
    });

    changeLayout.sequenceFrom([
      this.changePoints,
      this.changePerc
    ]);

    layout.sequenceFrom([
      title,
      this.level,
      changeLayout
    ]);

    container.add(layout);
    this.add(container);

    // Set model events
    this.model.on('change:level', this._onLevelChange, this);
    this.model.on('change:changePoints', this._onChangePointsChange, this);
    this.model.on('change:changePerc', this._onChangePercChange, this);

  }
  // ---------------------------------------------------------------------------
  Item.prototype = Object.create(View.prototype);
  Item.prototype.constructor = Item;
  // ---------------------------------------------------------------------------
  Item.prototype._getChangeColor = function(change) {
    if (change > 0) {
      return '#0b7b41';
    }
    else if (change < 0) {
      return '#ef3d36';
    }
    else {
      return '#000000';
    }
  };
  // ---------------------------------------------------------------------------
  Item.prototype._formatPercentageStr = function(perc) {
    perc = Math.round(perc * 100) / 100; //Round to 2 decimals
    return '(' + perc + '%)';
  };
  // ---------------------------------------------------------------------------
  Item.prototype._onLevelChange = function() {
    this.level.setContent(this.formatter.format(this.model.get('level')));
  };
  // ---------------------------------------------------------------------------
  Item.prototype._onChangePointsChange = function() {
    var changePoints = this.model.get('changePoints');
    changePoints = Math.round(changePoints * 100) / 100; //Round to 2 decimals

    this.changePoints.setContent(changePoints);

    this.changePoints.setProperties({
      color: this._getChangeColor(this.model.get('changePoints'))
    });
  };
  // ---------------------------------------------------------------------------
  Item.prototype._onChangePercChange = function() {
    this.changePerc.setContent(
      this._formatPercentageStr(this.model.get('changePerc'))
    );

    this.changePerc.setProperties({
      color: this._getChangeColor(this.model.get('changePoints'))
    });
  };
  return Item;
});
