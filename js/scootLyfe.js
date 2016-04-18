/*jshint devel:true */

// on ready
$(document).ready(function() {

$('.how-to-slider').flickity({
  // options
  prevNextButtons: false,
  //pageDots: false,
  cellSelector: '.cell'
});


var nextBtn = $('.next-btn');
var prevBtn = $('.prev-btn');

// previous
prevBtn.on( 'click', function() {
  $('.how-to-slider').flickity('previous');
});
// next
nextBtn.on( 'click', function() {
  $('.how-to-slider').flickity('next');
});

$('.how-to-slider').flickity('select', 1);

}); // end of ready




// $(window).resize(function() {
//   //setIntroType();
//   }); // end of resize
