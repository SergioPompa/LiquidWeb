
function cargaSendMail(){

	var nombre = $('#nombre');
	var email = $('#email');
	var tel = $('#telefono');
	var com = $('#comentarios');

	if (nombre.val()!="" & email.val()!="" & tel.val()!="" & com.val()!="") {

		var datos = {
                "nombre":nombre.val(),
                "email":email.val(),
                "telefono":tel.val(),
                "comentarios":com.val(),
            };

            $.ajax({
                type: "POST",
                url: "contacto.php",
                data: datos,
            })
            .done(function (){
                    $('#datos-inf')[0].reset();
                    $("#c_information").fadeIn(1000).delay(2500).fadeOut(1000);
                })
	}else{
		if (nombre.val()==0) {
			alert('Debe poner un nombre de contacto.');
			nombre.focus();
		}else if (email.val()==0) {
			alert('Debe poner un email de contacto.');
			email.focus();
		}else if (tel.val()==0) {
			alert('Debe poner un teléfono de contacto.');
			tel.focus();
		}else if (com.val()==0) {
			alert('Debe poner un mensaje.');
			com.focus();
		}
	}
}

