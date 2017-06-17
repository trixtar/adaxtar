$(document).ready(function(){

	var slideimgs = ['images/slider1.jpg','images/slider2.jpg','images/slider3.jpg'];
	var k=0;


$('.slide').on('click', function(){

	if (k==(slideimgs.length-1)) {
		k=0
	} else {k+=1};

	console.log(slideimgs[k]);	
	$('#slider-img').attr('src',slideimgs[k]);


//meter consolelog de attr


/*
	$('#slider-img').fadeOut('slow',function(){
		//console.log($('#slider-img').attr('src'));
		$('#slider-img').attr('src',slideimgs[k]);
		console.log(slideimgs[k]);
	});

*/
	

});


})