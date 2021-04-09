$(function(){

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false
        }
      },
    ]
  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $(".phone_mask").mask("+7 (999) 999-99-99");


  function toggleMenu() {
    $('.menu__burger, .menu').toggleClass('active');
    $('body').toggleClass('lock');
  }

  $(document).ready(function() {
    $('.menu__burger').click(function(event) {
      $('.menu__burger, .menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
    $('.menu__list-link').each(function (i) {
      this.onclick = toggleMenu;
    });
  });

});
