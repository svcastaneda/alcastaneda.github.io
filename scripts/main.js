$(document).ready(function() {

  $("#hotel").on('click', function(event) {
      $(".index").hide();
      event.preventDefault();
      getHotel();
  });

});



function getHotel(){
  $.ajax({
            url: "http://alcastaneda.github.io/hotel.html",
            dataType: "html"
         }).done(function(data) {
            var bod = $(data).children();
            console.log(bod);
            $(".content").html(bod);
         });
};
