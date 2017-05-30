
<?php


	$destino = "monoproduccion@gmail.com";

	
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$telefono = $_POST["telefono"];	
	$mensaje = $_POST["mensaje"];

		
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;


	if(mail($destino, "Website-Esculapio-Consulta de Producto:", $contenido);){

		echo "En la menor brevedad nos pondremos en contacto con usted";

	}
	

	
	/*header("Location:/../../proximamente.html");*/


?>

