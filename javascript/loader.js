$(function (){
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    setTimeout('stopload ()',1000);
    }, 2000)
  })
})
