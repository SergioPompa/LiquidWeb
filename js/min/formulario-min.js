function cargaSendMail(){var e=$("#nombre"),a=$("#email"),o=$("#telefono"),n=$("#comentarios");if(""!=e.val()&""!=a.val()&""!=o.val()&""!=n.val()){var l={nombre:e.val(),email:a.val(),telefono:o.val(),comentarios:n.val()};$.ajax({type:"POST",url:"contacto.php",data:l}).done(function(){$("#datos-inf")[0].reset(),$("#c_information").fadeIn(1e3).delay(2500).fadeOut(1e3)})}else 0==e.val()?(alert("Debe poner un nombre de contacto."),e.focus()):0==a.val()?(alert("Debe poner un email de contacto."),a.focus()):0==o.val()?(alert("Debe poner un teléfono de contacto."),o.focus()):0==n.val()&&(alert("Debe poner un mensaje."),n.focus())}