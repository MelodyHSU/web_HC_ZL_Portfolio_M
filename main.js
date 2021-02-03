$("#banner").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500
});

$("#works").slick({
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
        {
            breakpoint: 1025,
            slidesToShow: 3,
            slidesToScroll: 1,

        },

        {
            breakpoint: 767,
            slidesToShow: 1,
            slidesToScroll: 1,

        }
       
    ]
});