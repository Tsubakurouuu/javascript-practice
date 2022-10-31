$(function(){
  $('#back a').on('click', function(event){
    $('bady, html').animate({
      scrollTop: 0
    }, 800);
    event.preventDefault();
  });
})