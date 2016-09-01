var miAplicacion = angular.module('FerreteConstruccion', []);

miAplicacion.controller("controladorFC", function($scope){
	$scope.Rectangulo = function()
	{
		var largo=document.getElementById('Largo').value;
		var ancho=document.getElementById('Ancho').value;
		var largopordos=parseInt(largo*2);
		var anchopordos=parseInt(ancho*2);
		var suma=(largopordos+anchopordos);
		var hilostotales=(suma*3);
		alert("Los hilos de alambre a comprar son "+hilostotales);
	}
	
	$scope.Circulo = function()
	{
		var radio=document.getElementById('Radio').value;
		radio=parseInt(radio);
		var radioporpi=(radio*3.14);
		var perimetro=(radioporpi/2);
		var hilostotales=(perimetro*3);
		alert("Los hilos de alambre a comprar son "+hilostotales);
	}
	
	$scope.Materiales = function()
	{
		var largo=document.getElementById('Largo').value;
		var ancho=document.getElementById('Ancho').value;
		var superficie=(largo*ancho);
		var cemento=(superficie*2);
		var cal=(superficie*3);
		alert("Las bolsas de cemento requeridas son "+cemento+" y las bolsas de cal a comprar son "+cal);	
	}
})