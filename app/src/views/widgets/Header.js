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

    var background = new Surface({
      size: [undefined, 60],
      classes: [
        'header'
      ],
      content: 'hello world'
    });

    this.add(background);

  }
  // ---------------------------------------------------------------------------
  Header.prototype = Object.create(View.prototype);
  Header.prototype.constructor = Header;
  // ---------------------------------------------------------------------------

  return Header;
});
