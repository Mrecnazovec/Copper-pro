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
        626: {
            items: 2
        },
        900: {
            items: 3
        }
    }
})