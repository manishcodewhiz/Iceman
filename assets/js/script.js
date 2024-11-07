$(document).ready(function () {
  $('.header-top-text').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.main-slide').slick({
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: true,
    variableWidth: true,
  });
  // Toggle Menu
  $('.open-toggle').click(function () {
    $('.mobail-header').toggleClass('active');
    $('.navbar').slideToggle();
  });

  $('.close-toggle').click(function () {
    $('.mobail-header').removeClass('active');
    $('.navbar').slideUp();
  });



})