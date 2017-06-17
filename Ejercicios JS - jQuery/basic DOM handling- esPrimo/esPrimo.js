function esPrimo() {

var numerito = document.getElementById("inputNum").value;
var resultado = document.getElementById("resultado");
var resto = 0;
var restoTotal = 0;

for (i=numerito;i>=1;i--) {
	resto = numerito % i;
	if (resto == 0) {
		restoTotal++;
	}
}

if (restoTotal<=2) {
	resultado.style.display = "block";
	resultado.innerHTML = numerito + " es primo.";
} else {
	resultado.style.display = "block";
	resultado.innerHTML = numerito + " no es primo.";
}

return

}