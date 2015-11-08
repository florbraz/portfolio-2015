define(["app/main"], function(main) {
    
    var App = require('app/main');
    
    App.Navigation = {
        Init:function() {
            
            App.Navigation.ShowOnScroll();
            
            $(window).resize(function() {
                
            });
            
            $(window).scroll(function() {
                App.Navigation.ShowOnScroll();
            });
            
        },
        Resize: {
            
        },
        ShowOnScroll: function() {
            if (App.Utils.IsOnPage('.banner-content')) {
                $('header').removeClass('fixed-header');
            }
            else {
                $('header').addClass('fixed-header');
            }
        }
    }   
    
    return App; 
       
});