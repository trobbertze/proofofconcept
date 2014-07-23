define([
  'underscore',
  'famous/core/View',
  'famous/core/Surface',
  'famous/core/Modifier',
  'famous/surfaces/ContainerSurface',
  'famous/views/SequentialLayout',
  'famous/utilities/Utility',
  'views/widgets/IndexTicker',
  'collections/IndexTicker',
  'views/widgets/Header'
], function(
  _,
  View,
  Surface,
  Modifier,
  ContainerSurface,
  SequentialLayout,
  Utility,
  IndexTickerView,
  IndexTickerCollection,
  HeaderView) {
  // ---------------------------------------------------------------------------
  function Home(options) {
    View.apply(this, arguments);

    // var layout = new SequentialLayout({
    //
    // })

    //var header = new HeaderView();

    var tickerCollection = new IndexTickerCollection();

    tickerCollection.add(
      {
        name: 'dow',
        title: 'DOW',
        level: 17113.54,
        changePoints: 61.81,
        changePerc: 0.0036
      }
    );

    tickerCollection.add(
      {
        name: 'nasdaq',
        title: 'NASDAQ',
        level: 4456.02,
        changePoints: 31.32,
        changeperc: 0.0071
      }
    );

    tickerCollection.add(
      {
        name: 'sp500',
        title: 'S&P 500',
        level: 1983.53,
        changePoints: 9.9,
        changePerc: 0.005
      }
    );

    var ticker = new IndexTickerView({
      collection: tickerCollection
    });

    this.add(ticker);

  }
  // ---------------------------------------------------------------------------
  Home.prototype = Object.create(View.prototype);
  Home.prototype.constructor = Home;
  // ---------------------------------------------------------------------------

  return Home;
});
