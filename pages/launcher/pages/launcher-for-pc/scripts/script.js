$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.6
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.7
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2.7
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2.3
        }
      },
      {
        breakpoint: 570,
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