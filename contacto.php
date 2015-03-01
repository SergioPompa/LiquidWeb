<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tlf = $_POST['telefono'];
$com = $_POST['comentarios'];

//Estoy recibiendo el formulario, compongo el cuerpo
				$cuerpo =  "Formulario de contacto de \n \n";
				$cuerpo .= "Nombre: " . $nombre. "\n \n";
				$cuerpo .= "Email: " . $email . "\n \n";
				$cuerpo .= "Número de contacto: " . $tlf . "\n \n";
				$cuerpo .= "Text: \n" . $com. "\n \n";


				//mando el correo...
				mail("spompag@gmail.com","Liquid Instalaciones: Formulario de contacto",utf8_decode($cuerpo),"De: Contacto desde la Web");

?>