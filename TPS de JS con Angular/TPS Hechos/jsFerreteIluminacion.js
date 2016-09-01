var miAplicacion = angular.module("FerreteIluminacion", []);

miAplicacion.controller("controladorFI", function($scope){
	$scope.CalcularPrecio = function()
	{
		var cantidad=document.getElementById('Cantidad').value;
		var marca=document.getElementById('Marca').value;
		var descuento;
		var precioParcial=cantidad*35;
		var subTotal;
		var IIBB=0;
		var totalAPagar;

		switch(cantidad)
		{
			case "5":
                if(marca=="ArgentinaLuz")
                {
                   descuento=precioParcial*0.4;
                }
				
                else
                {
                   descuento=precioParcial*0.3;
                }
				
                break;

            case "4":
                if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                   descuento=precioParcial*0.25;
                }
				
                else
                {
                   descuento=precioParcial*0.2;
                }
				
                break;

            case "3":
                if(marca=="ArgentinaLuz")
                {
                   descuento=precioParcial*0.15;
                }
				
                else if(marca=="FelipeLamparas")
                {
                   descuento=precioParcial*0.1;
                }
				
                else
                {
                   descuento=precioParcial*0.05;
                }
				
                break;

            default:
                if(cantidad>=6)
                {
                   descuento=precioParcial*0.5;
                }
				
                break;
		}

		subTotal=precioParcial-descuento;
		alert("El subtotal es "+subTotal);
	
		if(subTotal>120)
		{
			IIBB=subTotal*0.1;
			alert("Usted pagó $"+IIBB+" de IIBB.");
		}
	
		totalAPagar=subTotal+IIBB;
		alert("El total a pagar es "+totalAPagar);
		document.getElementById('precioDescuento').value=totalAPagar;
	}
})
