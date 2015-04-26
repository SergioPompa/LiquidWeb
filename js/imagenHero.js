
function mostrarImagen() {

	ahora = new Date();
	var dia = ahora.getUTCDate();
	var mes = ahora.getUTCMonth();

	if (mes>11 && dia>=22) {
		imagen="img/hero.jpg";
		imagenMovil="img/heroMovil.jpg";
		titular="PORQUE EL FRÍO SÓLO PUEDE SER AGRADABLE";
		span="CUANDO ESTÁS FUERA DE CASA";
		texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
	} else if (mes>=8 && dia>=23) {
		imagen="img/otonoHero.png";
		imagenMovil="img/otonoHeroMovil.png";
		titular="ACONDICIONA TU HOGAR ANTES DE QUE LLEGUE";
		span="EL FRÍO DEL INVIERNO";
		texto="Renueve su caldera y mejore la instalación de los radiadores.";
	} else if (mes>=5 && dia>=21) {
		imagen="img/veranoHero.png";
		imagenMovil="img/veranoHeroMovil.png";
		titular="PORQUE EL CALOR SÓLO PUEDE SER AGRADABLE";
		span="CUANDO ESTÁS FUERA DE CASA";
		texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
	} else if (mes>=2 && dia>=21) {
		imagen="img/primaveraHero.png";
		imagenMovil="img/primaveraHeroMovil.png";
		titular="ACONDICIONA TU HOGAR ANTES DE QUE LLEGUE";
		span="EL CALOR DEL VERANO";
		texto="";
	} else if (mes>=0 && dia>=0) {
		imagen="img/hero.jpg";
		imagenMovil="img/heroMovil.jpg";
		titular="PORQUE EL FRÍO SÓLO PUEDE SER AGRADABLE";
		span="CUANDO ESTÁS FUERA DE CASA";
		texto="Con lo que vas a ahorrar podrás disfrutar con tu familia en lo que más te guste";
	}


	document.heroImg.src=imagen;
	document.getElementById('heroImgMovil').srcset=imagenMovil;
	document.getElementById('heroTitle').innerHTML=titular;
	document.getElementById('heroTitleSpan').innerHTML=span;
	document.getElementById('heroText').innerHTML=texto;

}