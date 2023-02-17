$(function () {
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 1300)
  })
})


$(window).on('load', function () {
	var style = '<link rel="stylesheet" href="zub.css">';
	$('head link:last').after(style);
});