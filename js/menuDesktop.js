$(document).ready(function() {

    if($(window).width()>=600){
    $('.instalacionesMenu').hover(function(){
      $(this).toggleClass( 'selectedDesktop');
      $('.instalacionesList').slideDown("slow");
    }, function (){
      $('.instalacionesList').slideUp("slow");
    });
  }
});