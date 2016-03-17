$(document).ready(function() {

  $("#hotel").on('click', function(event) {

      event.preventDefault();

      $(".index").hide();

        $.ajax({
            url: "http://alcastaneda.github.io/hotel.html",
            dataType: "html"
         }).done(function(data) {
            var bod = $(data).children();
            console.log(bod);
            $(".content").html(bod);
         });
  });

});
