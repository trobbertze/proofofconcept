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
  function Header(options) {
    View.apply(this, arguments);

    this.options = options;

    var background = new Surface({
      size: [undefined, 40],
      classes: [
        'header'
      ]
    });

    this.add(background);

    var hamburger = new Surface({
      size: [true, 40],
      classes: [
        'header',
        'hamburger'
      ],
      content: '<i class="fa fa-bars">&nbsp;</i>'
    });

    hamburger.on('click', this._onHamburgerClick.bind(this));

    this.add(new Modifier({
      origin: [0, 0]
    })).add(hamburger);

    var title = new Surface({
      size: [true, 40],
      classes: [
        'header',
        'title'
      ],
      content: this.options.title
    });

    this.add(new Modifier({
      origin: [0.5, 0]
    })).add(title);

  }
  // ---------------------------------------------------------------------------
  Header.prototype = Object.create(View.prototype);
  Header.prototype.constructor = Header;
  // ---------------------------------------------------------------------------
  Header.prototype.getSize = function() {
    return [50, 40];
  };
  // ---------------------------------------------------------------------------
  Header.prototype._onHamburgerClick = function() {
    this._eventOutput.emit('hamburgerClick');
  };
  return Header;
});
