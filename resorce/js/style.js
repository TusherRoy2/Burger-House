$(document).ready(function() {

// CODE START

$('header nav .menu-icon .fa-bars').click(function (){
    $(this).fadeOut();
    $('header nav .menu-icon .fa-times').fadeIn();
    $('header nav .menu').fadeIn();
});
$('header nav .menu-icon .fa-times').click(function (){
    $(this).fadeOut();
    $('header nav .menu-icon .fa-bars').fadeIn();
    $('header nav .menu').fadeOut();
});

$(window).resize(function (){
    let scrnSize = $(window).width();

    if (scrnSize > 768){
        $('header nav .menu').removeAttr('style')
    }
})

// Owl Carousel Plugin
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    navText:['<span><i class="fas fa-chevron-left"></i></span>' , '<span><i class="fas fa-chevron-right"></i></i></span>'],
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// ANIMATED JS
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


})