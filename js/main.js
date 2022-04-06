$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 50000,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 2
        },
        768: {
            items: 3
        }
    }
})