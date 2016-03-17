$(document).ready(function() {

    $("#home").on('click', function(event) {
        event.preventDefault();
        $(".index").show();
        $(".content").hide();
    });

    $("#hotel").on('click', function(event) {
          $(".index").hide();
          event.preventDefault();
          getHotel();
          $(".content").show();
    });

    $("#faq").on('click', function(event) {
          $(".index").hide();
          event.preventDefault();
          getFAQ();
          $(".content").show();
    });

    $("#registry").on('click', function(event) {
          $(".index").hide();
          event.preventDefault();
          getRegistry();
          $(".content").show();
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

function getFAQ(){
   $.ajax({
            url: "http://alcastaneda.github.io/faq.html",
            dataType: "html"
         }).done(function(data) {
            var bod = $(data).children();
            console.log(data);
            $(".content").html(bod);
         });
}

function getRegistry(){
   $.ajax({
            url: "http://alcastaneda.github.io/registry.html",
            dataType: "html"
         }).done(function(data) {
            var bod = $(data).children();
            console.log(bod);
            $(".content").html(bod);
         });
}
