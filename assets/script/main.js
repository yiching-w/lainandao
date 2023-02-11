$( '.hamburger-to-close' ).click( function( event ) {
  $( this ).toggleClass( 'close' );
});

const floatItems = $('.floatItems');
$(window).on('scroll', function(){
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $(floatItems).css('display', 'block');
  } else {
    $(floatItems).css('display', 'none');
  }
});

const scrollTop = $('.scrollTop');
$(scrollTop).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 800);
    return false;
});

(function() {
  /**
   * Portfolio details slider
   */

  var swiper = new Swiper('.carousel-gallery .swiper-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 5,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    pagination: {
      el: '.carousel-gallery .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is <= 480px
      425: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  $('a[data-fancybox="gallery"]').fancybox({
    buttons : [ "close" ]
  });

  const profileSwiper = new Swiper(".profile-swiper-container", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
      slideShadows: true
    },
    autoplay: {
      delay: 2300
    }
  });
  

})()