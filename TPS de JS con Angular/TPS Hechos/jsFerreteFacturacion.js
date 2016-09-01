var miAplicacion = angular.module("FerreteFacturacion", []);

miAplicacion.controller("controladorFF", function($scope){
	$scope.Sumar = function()
	{
		var precio1=document.getElementById('PrecioUno').value;
		var precio2=document.getElementById('PrecioDos').value;
		var precio3=document.getElementById('PrecioTres').value;
		var suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
		alert("La suma es "+suma);
	}
	
	$scope.Promedio = function()
	{
		var precio1=document.getElementById('PrecioUno').value;
		var precio2=document.getElementById('PrecioDos').value;
		var precio3=document.getElementById('PrecioTres').value;
		var suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
		var promedio=(suma/3);
		alert("El promedio es "+promedio);
	}
	
	$scope.PrecioFinal = function()
	{
		var precio1=document.getElementById('PrecioUno').value;
		var precio2=document.getElementById('PrecioDos').value;
		var precio3=document.getElementById('PrecioTres').value;
		var suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
		var preciofinal=(suma*1.21);
		alert("El precio final es "+preciofinal);
	}
})