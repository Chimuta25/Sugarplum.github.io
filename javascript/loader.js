window.addEventListener('DOMContentLoaded', function(){
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout('stopload ()',2000);
    }, 2000)
  })
