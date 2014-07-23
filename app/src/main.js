define([
  'famous/core/Engine',
  'famous/core/Surface',
  'views/widgets/IndexTicker',
  'collections/IndexTicker'
], function(
  Engine,
  Surface,
  IndexTickerView,
  IndexTickerCollection) {
    return {
      initialize: function() {

        var mainContext = Engine.createContext();

        mainContext.setPerspective(1000);

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

        mainContext.add(ticker);
      }
  };
});
