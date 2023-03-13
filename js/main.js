$(document).ready(function() {
    // Mobile Menu
    $('.header .menu-btn').on('click', function(e) {
        $('.header').toggleClass('menu-open');
        $('body').toggleClass('overflow');
        e.preventDefault();
    })
})