'use strict';

// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

$(function() {

    //configuration
    var width=720;
    var animationSpeed=1000;
    var pause=3500;
    var currentSlide=1;

    //cache DOM
    var $slider=$('#slider');
    var $slideContainer=$slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    setInterval(function() {
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
            currentSlide++;
            if(currentSlide === $slides.length){
                currentSlide=1;
                $slideContainer.css('margin-left', 0);
            }
        });
    }, pause);


});
