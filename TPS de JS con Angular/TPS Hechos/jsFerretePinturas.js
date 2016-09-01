var miAplicacion = angular.module("FerretePinturas", []);

miAplicacion.controller('controladorFP', function($scope){
	$scope.FahrenheitCentigrados = function()
	{
		var temperatura=document.getElementById('Temperatura').value;
		var pasajeCentigrados=temperatura-32;
		alert(temperatura+" grados Farenheit son "+pasajeCentigrados+" grados Centigrados");
	}

	$scope.CentigradosFahrenheit = function()
	{
		var temperatura=document.getElementById('Temperatura').value;
		temperatura=parseInt(temperatura);
		var pasajeFarenheit=temperatura+32;
		alert(temperatura+" grados Centigrados son "+pasajeFarenheit+" grados Farenheit");
	}
})