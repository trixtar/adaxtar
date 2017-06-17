var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var apellido =  formulario.apellido;
var telefono = formulario.telefono;
var email = formulario.email;
var edad = formulario.edad;
var calle = formulario.calle;
var numero = formulario.numero;
var ciudad = formulario.ciudad;
var cp = formulario.cp;
var error = document.getElementById('error');
var errores = [];
var limpiar = document.getElementById('limpiar');
var enviar = document.getElementById('enviar');
var direccion = document.getElementById('direccion');
var toggle = false;



	function soloLetras(x) { 

	expr = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/ ; //letras, espacios, ñ y tildes
	if(expr.test(x)) {
		return true;
	}
	return false;
	}
	

	function validarNombre(e){ //Funcion para validar el nombre//
		if(nombre.value == '' || nombre.value == null){
			console.log('Nombre vacío');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu nombre.</li>';
			e.preventDefault();
		} 
		else {
			if (!soloLetras(nombre.value)) {
				console.log('Nombre inválido');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un nombre válido.</li>';
				e.preventDefault();
			} else {
				error.style.display = 'none';
			}
		}
	} //Fin validarNombre//

	function validarApellido(e){ //Funcion para validar apellido//
		if(apellido.value == '' || apellido.value == null){
			console.log('Apellido vacío');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu apellido.</li>';
			e.preventDefault();
		} 
		else {
			if (!soloLetras(apellido.value)) {
				console.log('Apellido inválido');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un apellido válido.</li>';
				e.preventDefault();
			} else {
			error.style.display = 'none';
			}
		}
	} //Fin validarApellido//


	function validarTelefono(e) { //Funcion para validar el n° de telefono //
		tel=telefono.value;

		if (tel == '' || tel == null){
			console.log('Teléfono vacío');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu telefono.</li>';
			e.preventDefault();
		} else {
			if (tel.length < 8 || tel.length > 12){
				console.log('Teléfono inválido');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un teléfono válido.</li>';
				e.preventDefault();
			}else{
				error.style.display = 'none';
			}
		}

	}	//Fin validarTelefono//


	function validarEmail(e) { //Funcion para validar formato de mail//
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Expresion regular para chequear formato mail//
		if (email.value == '' || email.value == null) {
			console.log('E-mail vacío');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu e-mail.</li>';
			e.preventDefault();
		}else{
			if (!expr.test(email.value)) {
				console.log('E-mail inválido');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá un e-mail válido.</li>';
				e.preventDefault();
			}//else{
				error.style.display = 'none';
		//	}
		}
	} //Fin validarEmail//

	function validarEdad(e) { //Funcion para validar edad//
		
		if (edad.value == '' || edad.value == null) {
			console.log('Edad vacía');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu edad.</li>';
			e.preventDefault();
		}else{

			if(isNaN(parseInt(edad.value))) {
				console.log('Edad inválida');
				error.style.display = 'block';
				error.innerHTML += '<li>La edad debe ser un número.</li>';
				e.preventDefault();

			}else {

				if (edad.value > 120 || edad.value < 21) {
					console.log('Edad fuera de rango');
					error.style.display = 'block';
					error.innerHTML += '<li>Por favor ingresá una edad válida. Debés ser mayor de 21 años.</li>';
					e.preventDefault();
				} 
			} 
		}

		
	} //Fin validar edad //


function validarCalle(e) {   // función validar calle

	if (calle.value == '' || calle.value == null) {
			console.log('Calle vacía');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu calle.</li>';
			e.preventDefault();
		}

}


function validarNumero(e) {   // función validar número de calle

	if (numero.value == '' || numero.value == null) {
			console.log('Número de calle vacío');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu número de calle.</li>';
			e.preventDefault();
		} else if (numero.length > 6) {
			console.log('Número de calle inválido');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá un número de calle válido.</li>';
			e.preventDefault();
		}

}


function validarCiudad(e) {   // función validar ciudad

	if (ciudad.value == '' || ciudad.value == null) {
			console.log('Ciudad vacía');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu ciudad.</li>';
			e.preventDefault();
		} else {
			if (!soloLetras(ciudad.value)) {
				console.log('Ciudad inválida');
				error.style.display = 'block';
				error.innerHTML += '<li>Por favor ingresá una ciudad válida.</li>';
				e.preventDefault();
			}
		}

}


function validarCP(e) {   // función validar código postal

	if (cp.value == '' || cp.value == null) {
			console.log('Código postal vacío');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor ingresá tu código postal.</li>';
			e.preventDefault();
		}

}


function validarFormulario(e) {
		
		error.innerHTML = '';
		errores = []; 

		validarNombre(e);
		validarApellido(e);
		validarTelefono(e);
		validarEmail(e);
		validarEdad(e);

		if (toggle) {
			validarCalle(e);
			validarNumero(e);
			validarCiudad(e);
			validarCP(e);
		}
		
} //Fin validar formulario//
	
function limpiarFormulario(){

	nombre.value = null;
	apellido.value = null;
	telefono.value = null;
	email.value = null;
	edad.value = null;
	calle.value = null;
	numero.value = null;
	ciudad.value = null;
	cp.value = null;

	console.log("Limpiar formulario");

}	


function agregarDireccion() {

var direccionFormGroup = document.getElementById('direccionformgroup');

// MOSTRAR/OCULTAR FORMGROUP

if (!toggle) {
	direccionFormGroup.style.display = 'block';
	console.log("formgroup visible");
	toggle = true;
} else if (toggle) {
	direccionFormGroup.style.display = 'none';
	console.log("formgroup invisible");
	toggle = false;
}


}


formulario.addEventListener('submit', validarFormulario);
limpiar.addEventListener('click',limpiarFormulario);
direccion.addEventListener('change', agregarDireccion);

