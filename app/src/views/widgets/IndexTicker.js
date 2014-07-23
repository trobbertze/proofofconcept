define([
  'underscore',
  'famous/core/View',
  'famous/core/Surface',
  'famous/core/Modifier',
  'famous/views/SequentialLayout',
  'famous/surfaces/ContainerSurface',
  'famous/core/ViewSequence',
  'famous/utilities/Utility',
  './indexTicker/item'
], function(
  _,
  View,
  Surface,
  Modifier,
  SequentialLayout,
  ContainerSurface,
  ViewSequence,
  Utility,
  Item) {
  // ---------------------------------------------------------------------------
  function IndexTicker(options) {
    View.apply(this, arguments);

    this.collection = options.collection;

    var modifier = new Modifier({
      origin: [0.5, 0]
    });

    var outerContainer = new ContainerSurface({
      size: [undefined, 75],
      classes: [
        'widget'
      ]
    });

    var container = new ContainerSurface({
      size: [undefined, undefined],
      classes: [
        'widget',
        'container'
      ]
    });

    var layout = new SequentialLayout({
      direction: Utility.Direction.X
    });

    var sequence = new ViewSequence();

    this.collection.each(function(model) {
      sequence.push(new Item({model: model}));
    }, this);

    layout.sequenceFrom(sequence);

    container.add(modifier).add(layout);
    outerContainer.add(container);
    this.add(modifier).add(outerContainer);

  }
  // ---------------------------------------------------------------------------
  IndexTicker.prototype = Object.create(View.prototype);
  IndexTicker.prototype.constructor = IndexTicker;
  // ---------------------------------------------------------------------------
  return IndexTicker;
});
