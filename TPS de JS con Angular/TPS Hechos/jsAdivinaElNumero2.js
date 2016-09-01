var miAplicacion = angular.module('AdivinaElNumero2', []);

miAplicacion.controller("controladorADV2", function($scope){
	
	var numeroSecreto; 
	var contadorIntentos;
	
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
			if(contadorIntentos == 1)
			{
				alert("usted es psíquico");
			}
		
			if(contadorIntentos == 2)
			{
				alert("excelente percepción");
			}
		
			if(contadorIntentos == 3)
			{
				alert("Esto es suerte");
			}
		
			if(contadorIntentos == 4)
			{
				alert("Excelente Técnica");
			}
		
			if(contadorIntentos == 5)
			{
				alert("usted está en la media");
			}
		
			if(contadorIntentos >= 6 && contadorIntentos <= 10)
			{
				alert("falta técnica");
			}
		
			if(contadorIntentos > 10)
			{
				alert("afortunado en el amor!!");
			}
			
			contadorIntentos --;
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
})