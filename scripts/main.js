$(document).ready(function() {

    $("#hotel").on('click', function(event) {
          $(".index").hide();
          event.preventDefault();
          getHotel();
          $(".content").show();
    });

    $("#home").on('click', function(event) {
        event.preventDefault();
        $(".index").show();
        $(".content").hide();
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
            getPrices();
         });
};


function getPrices(){
      $("#prices").on('click', function(event) {
          console.log("clicked");
              $(".index").hide();
              event.preventDefault();
              $.ajax({
                url: "http://alcastaneda.github.io/prices.html",
                dataType: "html"
             }).done(function(data) {
                var bod = $(data).children();
                console.log(bod);
                $(".content").html(bod);
             });
        });
};
