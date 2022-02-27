(function ($) {
    var $hasSub = $('.has-sub'),
        $Sub = $('.nav__sub'),
        $navToggle =  $('.nav-toggle');
        $hasSub.on('click', function (e) {
            $(this).find('.nav__sub').toggle();
        });
        $navToggle.on('click', function (e) {
            $('body').toggleClass('show-menu');
            $(this).toggleClass('is-active');
        });

})(jQuery); 