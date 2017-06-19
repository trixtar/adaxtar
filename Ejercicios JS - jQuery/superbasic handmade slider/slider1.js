// VARIABLES

var slideimgs = ['images/slider1.jpg','images/slider2.jpg','images/slider3.jpg'];
var imagen = $('#slider-img');
var k=0;
var interval;

// FUNCIONES

function slide() {
$(imagen).fadeOut('slow', function() {

	if (k==(slideimgs.length-1)) {
		k=0
	} else {k++};

	console.log(slideimgs[k]);	
	$(imagen).attr('src',slideimgs[k]).fadeIn('slow');

	});
};


function slider() {
	interval = setInterval(slide, 4000);

	$('#sliderlink').on({
		mouseover: function(){
		clearInterval(interval);		
		},

		mouseleave: function(){
		slider();		
		}
	});

};


// DOCUMENT READY

$(document).ready(function(){

slider();

$('#sliderlink').on('click', function(){
	
	slide();
	
	});

});