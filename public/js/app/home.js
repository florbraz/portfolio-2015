define(["app/main"], function(main) {
    
    var App = require(main);
    
    App.Home = {
        Init:function() {
            
            App.Home.Functions();
            
            $(window).resize(function() {
                
            });
            
        },
        Resize: {
            
        },
        Functions: function() {
            // home functions
            alert('oi');
        }
    }   
    
    return App; 
       
});