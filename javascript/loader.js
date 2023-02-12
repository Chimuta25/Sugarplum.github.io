window.addEventListener('DOMContentLoaded', function(){
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout('stopload ()',2000);
    }, 2000)
  })

  function stopload(){
    bg.delay(900).fadeOut(800);
    loader.delay(900).fadeOut(300);
}
