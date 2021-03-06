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
        
        
        // for (var key in App) {
        //     if (App.hasOwnProperty(key)) {
        //         var obj = App[key];
        //             for (var prop in obj) {
        //             // important check that this is objects own property 
        //             // not from prototype prop inherited
        //             if(obj.hasOwnProperty(prop)){
        //                 alert(prop + " = " + obj[prop]);
        //             }
        //         }
        //     }
        // }
        
        //App.Init();
        //App.Resize();
                
        //$(window).resize(function() {
        //     App.Resize();
        // });
    
        
        //$(window).on("focus", function() { // adding resize functions to window focus (as user might be on other tab when the resize is triggered)
        //     App.Resize();
        // });  

        App.Navigation.Init();
        
        App.Home.Init();        
    
    }
);