/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        backbone: '../lib/backbone/backbone'
    },
    packages: [

    ]
});
require(['main']);
