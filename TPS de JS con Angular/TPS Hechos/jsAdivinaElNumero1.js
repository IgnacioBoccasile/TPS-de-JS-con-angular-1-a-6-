/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var miAplicacion = angular.module('AdivinaElNumero1' , []);

miAplicacion.controller("controladorADV1", function($scope)
{
	var contadorIntentos;
	var numeroSecreto;

	$scope.comenzar = function()
	{
		contadorIntentos=0;
	    document.getElementById('intentos').value=contadorIntentos;
	    numeroSecreto=Math.floor((Math.random() * 100) + 1); 
	}

    $scope.verificar = function()
    {
    	contadorIntentos=contadorIntentos+1;
	    document.getElementById('intentos').value=contadorIntentos;
	    var numeroIngresado=document.getElementById('numero').value;
	    
	    if(numeroSecreto==numeroIngresado)
	    {
	    	alert("Adivinaste!!! lo hiciste en "+contadorIntentos+" intentos");
	    }

	    else
	    {
	    	if(numeroSecreto<numeroIngresado)
	    	{
	    		alert("Menos!!");
	    	}

	    	else
	    	{
	    		alert("Más!!");
	    	}
	    }
    }
});