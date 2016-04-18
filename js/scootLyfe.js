/*jshint devel:true */

// on ready
$(document).ready(function() {

$('.how-to-slider').flickity({
  // options
  prevNextButtons: false,
  draggable: false,
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

$('.how-to-slider').flickity('select', 6);

}); // end of ready

$('.reveal-section').each(function() {
	var imgWrapper = $(this).find('.image-wrapper');
	imgWrapper.addClass('hidden');
});

$('.image-reveal-btn').click(function() {

	var wrap = $(this).parent().find('.image-wrapper')
	var thisBtn = $(this);
	if (wrap.hasClass('hidden') ){
		wrap.removeClass('hidden');
		thisBtn.text('Hide Demo');
		thisBtn.addClass('active-btn');
	} else {
		wrap.addClass('hidden');
		thisBtn.text('View Demo');
		thisBtn.removeClass('active-btn');
	}
	
});

var startBtn = $('.get-started-btn');


var flkty = Flickity.data( $('.how-to-slider') )
$('.how-to-slider').on( 'settle', function() {
    var page = $(this).data().flickity.selectedIndex;
    console.log(page);
    if (page === 7){
    	startBtn.addClass('get-started-now');
    	console.log('go!');
    }
});

startBtn.click(function() {
	window.alert('User can now start using the app :-)')
});


// $(window).resize(function() {
//   //setIntroType();
//   }); // end of resize
