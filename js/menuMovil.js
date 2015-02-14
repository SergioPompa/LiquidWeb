var altura_del_header = $('.inicio').outerHeight(true);
var altura_del_menu_movil = $('.menu-movil').outerHeight(true);

    //detectar cambios de pantalla
    $(window).resize(cambioPantalla);

    cambioPantalla();

    function cambioPantalla(){

      if($(window).width()<600){

        $(window).scroll(function(){

          posicionarMenu();

        });
      }
    }

    function posicionarMenu() {

      if ($(window).scrollTop() >= altura_del_header){
        $('.menu-movil').css('display', 'inline-block');
        $('.wrapper').css('margin-top', (altura_del_menu_movil) + 'px');
      }else{
        $('.menu-movil').css('display', 'none');
      }
    }

    //función para gestionar la apertura del menú del movil

  $('.iconoMenu').on('click', gestionaMenu);


  function gestionaMenu()
  {
    $('#menu').slideToggle("slow");
  }