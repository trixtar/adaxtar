//FUNCTIONS

var myFunctions = {
	
	closeModal: function() {
		$('main').removeClass('translucid');
		$('#modal').css('display','none');
	}
};

// DOCUMENT READY

$(document).ready(function(){


$('.thumb').on('click', function(e){

	e.preventDefault();

	imagen = $(this).data('img');
	alt = $(this).data('title');
	url = 'images/repuestos'+imagen+'.jpg';

	console.log(url);
	$('#bigimage').attr('src',url);
	console.log(alt);
	$('#bigimage').attr('alt',alt);
	$('#modal').css('display','block');
	$('main').addClass('translucid');

	// se cierra con escape

	$(document).on('keyup', function(event){
		if (event.which==27) {myFunctions.closeModal();}
	});

	// se cierra con la X

	$('#closemodal').on('click',function(e){
	e.preventDefault();
	myFunctions.closeModal();
	});

});

}); // document ready