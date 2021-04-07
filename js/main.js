$(function(){

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true
  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $(".phone_mask").mask("+7 (999) 999-99-99");

  $(document).ready(function() {
    $('.menu__burger').click(function(event) {
      $('.menu__burger, .menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

});