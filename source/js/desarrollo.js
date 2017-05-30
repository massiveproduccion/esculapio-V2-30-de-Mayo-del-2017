
/*cssnano can be used directly via its JavaScript API.*/

/*var cssnano = require('cssnano');
var fs = require('fs');

cssnano.process(css, opts).then(function (result) {
  fs.writeFileSync('main.scss', main.css);
});*/


/*///////////////////////////////////////////////////////////////////////////////////////*/

/*Mobile First*/
$(document).ready(function(){

	/*
	Tiempo
	*/

		fechaActual = new Date();
		

		if(window.onload){

			tiempoTranscurrido = fechaActual.getTime();

			tiempoResultante = fechaActual - tiempoTranscurrido;

			diferencial = tiempoResultante < 0.001 ;

		}

		

		
	

	/*
	PreCarga del Slideshow:
	_______________________
	*/

		//opcional en el if(){} | window.onload | 'body onload'

		if(tiempoResultante < 4 ){

			setTimeout(cargaSlideshow, 3000);

				function cargaSlideshow(){

					document.getElementById('main').innerHTML = loadPage('includes/suministros_medicos_esculapio.html');

					function loadPage(href){
				        var xmlhttp = new XMLHttpRequest();
				            xmlhttp.open("GET", href, false);
				            xmlhttp.send();
				            return xmlhttp.responseText;
				    }

				    slideshow();


				}	

		}
		


	/*
	Slideshow, Funcionamiento con Jquery y Javascript:
	__________________________________________________
	*/

		function slideshow(){
			
			var slider = $("#slider");

			var prev = $("#prev");

			var next = $("#next");
			
			$('#slider picture:last').insertBefore('#slider picture:first');

			
			slider.css('margin-left', '-'+100+'%');


						
			next.on('click', function(){

				moveRight()

			});

			
			function moveRight(){

				slider.animate({
					marginLeft: '-'+200+'%'},700, function(){
						
						$('#slider picture:first').insertAfter('#slider picture:last');
						
						slider.css('margin-left', '-'+100+'%');

						
				});
			}


			
			prev.on('click', function(){

				moveLeft()

			});

			
			function moveLeft(){

				slider.animate({
					marginLeft: 0+'%'},700, function(){
						
						$('#slider picture:last').insertBefore('#slider picture:first');
						
						slider.css('margin-left', '-'+100+'%');

						
				});
			}

			
			function autoplay(){
				interval = setInterval(function(){
					moveRight();
				}, 5000)
			}
			
			autoplay();

			
			setTimeout(myFunction, 120000);

				function myFunction(){

					location.reload(true);
				    
				}


		}
			

	//----------------------------------------------------------------------------

	//acción para carga de la sección productos por slide stática y no por slideshow
	$('#main div').click(function(){

		$('#load').load('includes/productos_esculapio.html');

		$('#load').show();

	});	


	//----------------------------------------------------------------------------

	//acción para los productos en forma de slideshow
	$('#contenedor #slider picture').click(function(){

		$('#load').load('includes/producto_base.html');

		$('#load').show();

	});


	//----------------------------------------------------------------------------

	//acción para los productos en forma de slideshow
	$('#c_productos div').click(function(){

		$('#load').load('includes/producto_base.html');

		$('#load').show();

	});


	//----------------------------------------------------------------------------

	//sección consulte producto extendida
	$('#search div').click(function(){

		$('#load').load('includes/consulte_producto.html');

		$('#load').show();

	});


	//----------------------------------------------------------------------------

	//sección de carga de quiénes somos
	$('nav li:nth-of-type(1)').click(function(){

		$('#load').load('includes/esculapio_quienes_somos.html');

		$('#load').show();

	});


	//----------------------------------------------------------------------------

	//sección de contáctenos
	$('nav li:nth-of-type(2)').click(function(){

		$('#load').load('includes/esculapio_contactenos.html');

		$('#load').show();

	});




	//----------------------------------------------------------------------------

	//sección de carga de productos por categorías
	$('#categorias div:nth-of-type(1)').click(function(){

		$('#load').load('includes/productos_esculapio.html');

		$('#load').show();

	});


	//----------------------------------------------------------------------------

	//sección de carga de productos por categorías
	$('#categorias div:nth-of-type(2)').click(function(){

		$('#load').load('includes/equipos_esculapio.html');

		$('#load').show();

	});



	





	
	




})