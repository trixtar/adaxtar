$(document).ready(function(){


$('.thumb').on('click', function(){

	imagen = $(this).data('img');
	alt = $(this).data('title');
	url = 'images/repuestos'+imagen+'.jpg';

	console.log(url);
	$('#bigimage').attr('src',url);
	console.log(alt);
	$('#bigimage').attr('alt',alt);
	$('#modal').css('display','block');
	$('main').addClass('translucid');

});


$('#closemodal').on('click',function(){

	$('main').removeClass('translucid');
	$('#modal').css('display','none');

});


})