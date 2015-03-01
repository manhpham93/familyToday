jQuery(document).ready(function ($) {
    var owl = $("#slider-focal");

    owl.owlCarousel({
        items: 4,
        lazyLoad: true,
        lazyEffect: true
    });
    
    $(".next-focal").click(function () {
        owl.trigger('owl.next');
    });
    $(".prev-focal").click(function () {
        owl.trigger('owl.prev');
    });
    
});
