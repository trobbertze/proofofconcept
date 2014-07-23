/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        backbone: '../lib/backbone/backbone',
        bootstrap: '../lib/bootstrap/dist/js/bootstrap',
        jquery: '../lib/jquery/dist/jquery.min',
        underscore: '../lib/underscore/underscore'
    },
    packages: [

    ]
});

require([
    'main'
  ], function(Main) {
    Main.initialize();
});
