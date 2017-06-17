$(document).ready(function(){

	$('#mensaje').hide();


	$('#ingresar').on('click', function(e) {

		$('#mensaje').empty().removeClass();

		e.preventDefault();

		var user = $('#usuario').val();

		var pass = $('#password').val();

		if (user == 'pepe' && pass == 123456) {

			$('#mensaje').show();
			$('#mensaje').addClass('alert alert-success');
			$('#mensaje').append('<p>Bienvenido al sistema</p>');

		} else {

			$('#mensaje').show();
			$('#mensaje').addClass('alert alert-danger');
			$('#mensaje').append('<p>El usuario o la contraseña son incorrectos. Vuelva a intentarlo</p><p><a>¿Ha olvidado su contraseña?</a></p>');

		}

	});

});