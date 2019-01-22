$(document).ready(function(){
  $('.slider-reviews').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: false,
  centerMode: true,
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="slick-prev">Next</button>',
  nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
});
