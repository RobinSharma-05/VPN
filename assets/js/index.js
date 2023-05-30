$(function () {
    $("#slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]

    });
});


$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '.next_btn',
    prevArrow: '.pre_btn',
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1.4
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1.01
        }
    }]
});