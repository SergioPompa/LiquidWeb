
function mostrarImagen() {

	ahora = new Date();
	var dia = ahora.getUTCDate();
	var mes = ahora.getUTCMonth();

	if (mes==11) {
		if (dia>=22) {
			// imagen="img/hero.jpg";
			// imagenMovil="img/heroMovil.jpg";
			// titular="PORQUE EL FRÍO SÓLO PUEDE SER AGRADABLE";
			// span="CUANDO ESTÁS FUERA DE CASA";
			// texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
			$('.cover-winter').css('display', 'inline-block');
      		$('.cover-spring').css('display', 'none');
      		$('.cover-summer').css('display', 'none');
      		$('.cover-fall').css('display', 'none');
		} else {
			// imagen="img/otonoHero.png";
			// imagenMovil="img/otonoHeroMovil.png";
			// titular="ACONDICIONA TU HOGAR ANTES DE QUE LLEGUE";
			// span="EL FRÍO DEL INVIERNO";
			// texto="Renueve su caldera y mejore la instalación de los radiadores.";
			$('.cover-winter').css('display', 'none');
      		$('.cover-spring').css('display', 'none');
      		$('.cover-summer').css('display', 'none');
      		$('.cover-fall').css('display', 'inline-block');
		}
	} else if (mes==8) {
		if (dia>=23) {
			// imagen="img/otonoHero.png";
			// imagenMovil="img/otonoHeroMovil.png";
			// titular="ACONDICIONA TU HOGAR ANTES DE QUE LLEGUE";
			// span="EL FRÍO DEL INVIERNO";
			// texto="Renueve su caldera y mejore la instalación de los radiadores.";
			$('.cover-winter').css('display', 'none');
      		$('.cover-spring').css('display', 'none');
      		$('.cover-summer').css('display', 'none');
      		$('.cover-fall').css('display', 'inline-block');
		} else {
			// imagen="img/veranoHero.jpg";
			// imagenMovil="img/veranoHeroMovil.jpg";
			// titular="PORQUE EL CALOR SÓLO PUEDE SER AGRADABLE";
			// span="CUANDO ESTÁS FUERA DE CASA";
			// texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
			$('.cover-winter').css('display', 'none');
      		$('.cover-spring').css('display', 'none');
      		$('.cover-summer').css('display', 'inline-block');
      		$('.cover-fall').css('display', 'none');
		}
	} else if (mes==5) {
		if (dia>=21) {
			// imagen="img/veranoHero.jpg";
			// imagenMovil="img/veranoHeroMovil.jpg";
			// titular="PORQUE EL CALOR SÓLO PUEDE SER AGRADABLE";
			// span="CUANDO ESTÁS FUERA DE CASA";
			// texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
			$('.cover-winter').css('display', 'none');
      		$('.cover-spring').css('display', 'none');
      		$('.cover-summer').css('display', 'inline-block');
      		$('.cover-fall').css('display', 'none');
		} else {
			// imagen="../img/primaveraHero.jpg";
			// imagenMovil="../img/primaveraHeroMovil.jpg";
			// titular="ACONDICIONA TU HOGAR ANTES DE QUE LLEGUE";
			// span="EL CALOR DEL VERANO";
			// texto="";
			$('.cover-winter').css('display', 'none');
      		$('.cover-spring').css('display', 'inline-block');
      		$('.cover-summer').css('display', 'none');
      		$('.cover-fall').css('display', 'none');
		}
	} else if (mes==2) {
		if (dia>=21) {
			// imagen="../img/primaveraHero.jpg";
			// imagenMovil="../img/primaveraHeroMovil.jpg";
			// titular="ACONDICIONA TU HOGAR ANTES DE QUE LLEGUE";
			// span="EL CALOR DEL VERANO";
			// texto="";
			$('.cover-winter').css('display', 'none');
      		$('.cover-spring').css('display', 'inline-block');
      		$('.cover-summer').css('display', 'none');
      		$('.cover-fall').css('display', 'none');
		} else {
			// imagen="img/hero.jpg";
			// imagenMovil="img/heroMovil.jpg";
			// titular="PORQUE EL FRÍO SÓLO PUEDE SER AGRADABLE";
			// span="CUANDO ESTÁS FUERA DE CASA";
			// texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
			$('.cover-winter').css('display', 'inline-block');
      		$('.cover-spring').css('display', 'none');
      		$('.cover-summer').css('display', 'none');
      		$('.cover-fall').css('display', 'none');
		}
	} else if (mes==0 | mes==1 ) {
		// imagen="img/hero.jpg";
		// imagenMovil="img/heroMovil.jpg";
		// titular="PORQUE EL FRÍO SÓLO PUEDE SER AGRADABLE";
		// span="CUANDO ESTÁS FUERA DE CASA";
		// texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
		$('.cover-winter').css('display', 'inline-block');
  		$('.cover-spring').css('display', 'none');
  		$('.cover-summer').css('display', 'none');
  		$('.cover-fall').css('display', 'none');
	} else if (mes==3 || mes==4 ) {
		// imagen="img/primaveraHero.jpg";
		// imagenMovil="img/primaveraHeroMovil.jpg";
		// titular="ACONDICIONA TU HOGAR ANTES DE QUE LLEGUE";
		// span="EL CALOR DEL VERANO";
		// texto="";
		$('.cover-winter').css('display', 'none');
  		$('.cover-spring').css('display', 'inline-block');
  		$('.cover-summer').css('display', 'none');
  		$('.cover-fall').css('display', 'none');
	} else if (mes==6 || mes==7 ) {
		// imagen="img/veranoHero.jpg";
		// imagenMovil="img/veranoHeroMovil.jpg";
		// titular="PORQUE EL CALOR SÓLO PUEDE SER AGRADABLE";
		// span="CUANDO ESTÁS FUERA DE CASA";
		// texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
		$('.cover-winter').css('display', 'none');
  		$('.cover-spring').css('display', 'none');
  		$('.cover-summer').css('display', 'inline-block');
  		$('.cover-fall').css('display', 'none');
	} else if (mes==9 || mes==10 ) {
		// imagen="img/otonoHero.png";
		// imagenMovil="img/otonoHeroMovil.png";
		// titular="ACONDICIONA TU HOGAR ANTES DE QUE LLEGUE";
		// span="EL FRÍO DEL INVIERNO";
		// texto="Renueve su caldera y mejore la instalación de los radiadores.";
		$('.cover-winter').css('display', 'none');
  		$('.cover-spring').css('display', 'none');
  		$('.cover-summer').css('display', 'none');
  		$('.cover-fall').css('display', 'inline-block');
	}


	// document.heroImg.src=imagen;
	// document.getElementById('heroImgMovil').srcset=imagenMovil;
	// document.getElementById('heroTitle').innerHTML=titular;
	// document.getElementById('heroTitleSpan').innerHTML=span;
	// document.getElementById('heroText').innerHTML=texto;

}
