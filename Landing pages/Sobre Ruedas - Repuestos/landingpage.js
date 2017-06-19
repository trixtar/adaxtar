var options = ['Compra de repuestos', 'Tasación y/o venta de repuestos', 'Localización de repuestos originales', 'Service automotriz'];
var rollingimages = ["0.jpg", "1.jpg", "2.jpg"];
var k = 0;
var formulario = $('#formulario');
var errores = [];
var formError = $('#form-error');

$(document).ready(function(){

// SELECT DEL FORMULARIO

	var select = $('#opciones');

	$('#image1, #image2').hide();
	

	for (i=0; i<options.length; i++) {
		var value = i + 1;
		var option = '<option value="'+value+'">'+options[i]+'</options>';
		select.append(option);
	};

// SCROLL DEL MENU

$('.menubtn').on('click',function(event){

event.preventDefault();

vid = $(this).data('link');
id = '#' + vid;

console.log(id);

$(id).slideDown('slow',function(){
	$(id).focus();
});
	
});


// SLIDER

	$('#imgslider').click(function() {
		$('#image1').fadeIn('slow',function() {
			$('#image0').hide();
		});
	});

// VER MAS

$('.verMas').on('click',function(){
			var vid= $(this).data('id');
			var id='#' + vid;
			//necesito preguntar si esta en none o block
			console.log($(id).css('display'));
			if($(id).css('display') === "none"){
				//oculto todos antes
				$('.extra').hide();
				//piso el ocultar todo con la especificidad
				$(id).css('display','block');
				console.log($(id).css('display'));
			
			}else{
				if($(id).css('display') === "block"){
					$(id).css('display','none');
					console.log($(id).css('display'));
				}

			}
			

	})//fin verMas


// VALIDACION FORMULARIO

$('#enviar').on('click',function(e){

	e.preventDefault();
	errores=[];

	formError.hide().empty();

	var nombre = $('#formulario input[name=nombre]');
	var apellido = $('#formulario input[name=apellido]');
	var email = $('#formulario input[name=email]');
	var telefono = $('#formulario input[name=telefono]');
	var modelo = $('#formulario input[name=modelo]');

	validarNombre(e);
	validarApellido(e);
	validarEmail(e);
	validarTelefono(e);

	if (errores !== '' || errores !== null) {
		for (i=0;i<errores.length;i++){
		formError.append(errores[i]).show();	
		}
		
	}

});

$('#limpiar').on('click', function(e) {
	e.preventDefault();

	$('form#formulario input').val('');
	$('form#formulario input:checkbox').removeAttr('checked');
	$('form#formulario textarea').val('');
});

 
}); //documentready


function soloLetras(x) { 

	expr = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/ ; //letras, espacios, ñ y tildes
	if(expr.test(x)) {
		return true;
	}
	return false;
}


function validarNombre(e) {
	if (nombre.value == '' || nombre.value == null) {
		console.log('Nombre vacío');
		errores.push('<li>Por favor ingresá tu nombre</li>');
		e.preventDefault();
	} else if (!soloLetras(nombre.value)) {
		console.log('Nombre inválido');
		errores.push('<li>Por favor ingresá un nombre válido</li>');
		e.preventDefault();
	}
}

function validarApellido(e) {
	if (apellido.value == '' || apellido.value == null) {
		console.log('Apellido vacío');
		errores.push('<li>Por favor ingresá tu apellido</li>');
		e.preventDefault();
	} else if (!soloLetras(apellido.value)) {
		console.log('Apellido inválido');
		errores.push('<li>Por favor ingresá un apellido válido</li>');
		e.preventDefault();
	}
}

function validarEmail(e) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (email.value == '' || email.value == null) {
		console.log('E-mail vacío');
		errores.push('<li>Por favor ingresá tu e-mail</li>');
		e.preventDefault();
	} else if (!expr.test(email.value)) {
		console.log('E-mail inválido');
		errores.push('<li>Por favor ingresá un e-mail válido</li>');
		e.preventDefault();
	}
}


function validarTelefono(e) {
	expr = /^[0-9/-/(/)/#]+$/;
	if (telefono.value == '' || telefono.value == null) {
		console.log('Teléfono vacío');
		errores.push('<li>Por favor ingresá tu teléfono</li>');
		e.preventDefault();
	} else if (!expr.test(telefono.value)) {
		console.log('Teléfono inválido');
		errores.push('<li>Por favor ingresá un teléfono válido</li>');
		e.preventDefault();
	}
}


/*
$(#boton).on('click',function(){
	validarMail($(#mail).val());
}); //listener del boton





function validarMail(mail) etc etc



*/