"use strict";

define(["app/controllers"], function() {
    var App = {
        Utils : {
            IsOnPage: function(elem) {
                var $elem = $(elem);
                if ($elem.length) {
                        var $window = $(window);
                    
                        var docViewTop = $window.scrollTop();
                        var docViewBottom = docViewTop + $window.height();
                    
                        var elemTop = $elem.offset().top;
                        var elemBottom = elemTop + $elem.height();
                    
                        return ((elemBottom <= docViewBottom) && (elemTop + ($elem.height() / 2) >= docViewTop));      
                }
            },
            WindowWidth: function() {
                return $(window).width() + App.Utils.ScrollWidth();
            },
            ScrollWidth: function() {
                var outer = document.createElement("div");
                outer.style.visibility = "hidden";
                outer.style.width = "100px";
                outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    
                document.body.appendChild(outer);
    
                var widthNoScroll = outer.offsetWidth;
                // force scrollbars
                outer.style.overflow = "scroll";
    
                // add innerdiv
                var inner = document.createElement("div");
                inner.style.width = "100%";
                outer.appendChild(inner);        
    
                var widthWithScroll = inner.offsetWidth;
    
                // remove divs
                outer.parentNode.removeChild(outer);
    
                return widthNoScroll - widthWithScroll;
            }
        }
    }
    
    return App;        
});


