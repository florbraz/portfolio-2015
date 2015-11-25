requirejs.config({
    baseUrl: "js/lib",
    paths: {
        app: "../app",
        lib: "../lib",
        directive: "../directive",
        factory: "../factory",
        jquery: [
            '//ajax.aspnetcdn.com/ajax/jquery/jquery-2.0.0.min',
            //If the CDN location fails, load from this location
            'js/lib/jquery-2.0.0.min'
        ]
    },
    shim: {
        typed  : ["jquery"],
        'angularAMD' : ['angular'],
        'angular-route' : ['angular']
    },
    deps : ['app']
});

require(
    [
        'jquery', 
        'app/main', 
        'app/home',
        'app/navigation'
    ],
    
    function ($) {
        
        var App = require('app/main');
        var Navigation = require('app/navigation');
        var Home = require('app/home');
        
        $.extend(App, Navigation, Home);
        
        App.Navigation.Init();
        
        App.Home.Init();        
    
    }
);