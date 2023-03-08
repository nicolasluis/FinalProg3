<?php
$destinatario= "nicolas.luis11@gmail.com";

$nombre=$_POST['nombre'];
$email=$_POST['email'];
$fecha=$_POST['fecha'];
$hora=$_POST['hora'];
$mensaje=$_POST['message'];

$fechayhora= "Día: " . $fecha . "\nHorario: " . $hora;

$titulo="Solicitud de reunión para vender con YOPI";

$mensajeCompleto= $mensaje . "\nEmail: " . $email . "\n" .  $fechayhora . "\n" . $nombre;


if(mail($destinatario, $titulo, $mensajeCompleto)){
    // Si el correo se envió correctamente
    echo "<script>alert('Su pedido de reunión fue enviado');</script>";
    echo "<script>setTimeout(function(){window.history.go(-1);}, 2000);</script>";
} else {
    // Si hubo algún error al enviar el correo
    echo "<script>alert('Ha ocurrido un error al enviar su pedido de reunión.');</script>";
    echo "<script>setTimeout(function(){window.history.go(-1);}, 2000);</script>";
}
?>
