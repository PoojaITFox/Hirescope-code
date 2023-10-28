 
// copyright year
// document.getElementById("year").innerHTML = new Date().getFullYear();
// go to top
$(document).ready(function () {
  // Back to top button
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').addClass('show');
    if (scrolled < 200) $('.go-top').removeClass('show');
  });
  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({
      scrollTop: "0"
    }, 500);
  });
});

jQuery(".mobile-collapse-title").click(function () {
  $(this).toggleClass("open")
  $(this).next("ul").toggleClass("full-width");
});
$('.solution-carousel').owlCarousel({
  loop:true,
  margin: 20,
  responsiveClass: true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1.2,
          nav:false,
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
 })