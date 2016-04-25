/*jshint devel:true */

// on ready
$(document).ready(function() {

$('.how-to-slider').flickity({
  contain: true,
  prevNextButtons: false,
  draggable: false,
  pageDots: false,
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

// $('.how-to-slider').flickity('select', 6);



$('.reveal-section').each(function() {
	var imgWrapper = $(this).find('.image-wrapper');
	imgWrapper.addClass('hidden');
});

$('.image-reveal-btn').click(function() {

	var wrap = $(this).parents('.reveal-section').find('.image-wrapper')
	var thisBtn = $(this);
	if (wrap.hasClass('hidden') ){
		wrap.removeClass('hidden');
		thisBtn.addClass('active-btn');
		if (thisBtn.hasClass('video') ){
			thisBtn.text('Hide Video');
		} else {
			thisBtn.text('Hide Demo');
		}
		

	} else {
		wrap.addClass('hidden');
		thisBtn.removeClass('active-btn');

		if (thisBtn.hasClass('video') ){
			thisBtn.text('View Video');
		} else {
			thisBtn.text('View Demo');
		}
	}
	
});

var startBtn = $('.get-started-btn');


var flkty = Flickity.data( $('.how-to-slider') )
$('.how-to-slider').on( 'cellSelect', function() {
    var page = $(this).data().flickity.selectedIndex;
    console.log(page);
    
    if (page === 0 ){
    	prevBtn.addClass('disabled');
    }
    if (page === 1 || page === 5){
    	nextBtn.removeClass('disabled');
		prevBtn.removeClass('disabled');
    }
});

$('.how-to-slider').on( 'settle', function() {
    var page = $(this).data().flickity.selectedIndex;
    if (page === 6){
    	startBtn.addClass('get-started-now');
    }
});

startBtn.click(function() {
	window.alert('User can now start using the app :-)');
});
$('.media-video').click(function() {
	window.alert('Opens video player');
});
$('.schedule-btn').click(function() {
	window.alert('Opens scheduling module');
});

$('.cell-links a').click(function(e) {
	e.preventDefault();
	window.alert('Takes user to FAQ page or helpful article');
});

$('a.start-link').click(function(e) {
	e.preventDefault();
	window.alert('exits pop-up and returns to app');
});

}); // end of ready