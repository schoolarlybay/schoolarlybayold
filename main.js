/*=======================================================
Copyright
=======================================================*/

var getCurrentDate = window.setInterval(function() {
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  document.getElementById("currentTime").innerHTML = date
}, 1000)

/*=======================================================
Prevent Copying
=======================================================*/

$(document).ready(function() {
    $('body').bind('cut copy', function(e) {
        e.preventDefault();
      });
 });

/*=======================================================
Prevent Right Click
=======================================================

 $(document).ready(function() {
     $("body").on("contextmenu", function(e) {
         return false;
      });
  });
$(document).ready(function() {
     $('body').bind('cut copy', function(e) {
         e.preventDefault();
      });
  });
*/
