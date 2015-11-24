define(["app/main", "typed"], function(main) {
    
    var App = require('app/main');
    
    App.Home = {
        Init:function() {
            
            App.Home.Typed();
            App.Home.Banner();
            
            $(window).resize(function() {
                
            });
            
        },
        Resize: {
            
        },
        Banner: function() {
            $(window).scroll(function() {
                $window = $(window);
                var scrollTop = $window.scrollTop();
                var windowHeight = $window.height();
                var percentTop = 1 - (scrollTop / windowHeight);

                if (App.Utils.IsOnPage('.banner h1')) {
                    $('.banner h1').css({
                        'transform': 'translate(0,'+ (scrollTop / 2.5) +'px)',
                        'opacity': percentTop - 0.2
                    });
                }
            });
            
        },
        Typed: function() {
            $('.banner h1 span').typed({
                strings: ['Hi, my name is <strong>Flor Braz</strong>. ^1000 <br />  <small>I’m an <strong class="nowrap">UX designer</strong> and <strong class="nowrap">Front-end Developer</strong> based in Brazil. </small>'],
                typeSpeed: 0
            });   
        }
    }   
    
    return App; 
       
});