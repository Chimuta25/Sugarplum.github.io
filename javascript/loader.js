var loading2_on = function() {
  $(document.body).append("<div id=\"blind\"><span class=\"loading22\"></span></div>");
};
var loading2_off = function() {
  $("#blind").remove();
};
var hoge2 = function() {
  loading2_on();
  $.ajax( {
      "url": "",
      "complete": function() {
          loading2_off();
      }
  } );
};　