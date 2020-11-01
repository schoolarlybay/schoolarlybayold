/*=======================================================
Copyright
=======================================================*/

var getCurrentDate = window.setInterval(function() {
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  document.getElementById("currentTime").innerHTML = date;
}, 1000)

/*=======================================================
Onload
=======================================================*/

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function citation() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function timeCitation() {
   setTimeout(citation, 15000)
}

window.onload = timeCitation()

/*=======================================================
Prevent Copying
=======================================================

$(document).ready(function() {
    $('body').bind('cut copy', function(e) {
        e.preventDefault();
      });
 });
*/
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
