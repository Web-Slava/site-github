$(document).ready(function(){
    $("#menu, #menu2").on("click","a", function (event) {
     event.preventDefault();
     var id  = $(this).attr('href'),
     top = $(id).offset().top;
     $('body,html').animate({scrollTop: top}, 1400);
  });
  
    $('.header-btn').on('click', function () {
      $('.header__menu').toggleClass('move');
    });
  
});