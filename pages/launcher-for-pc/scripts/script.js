$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:4,
        infinite:false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1.9
                }
              },
              {
              breakpoint: 400,
              settings: {
                slidesToShow: 1.6
              }
            },
            {
              breakpoint: 355,
              settings: {
                slidesToShow: 1.4
              }
            },
          ]
    });
});