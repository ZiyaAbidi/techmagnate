(function ($) {
    "use strict";
    $(document).ready(function () {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })

        // Preloader
        var win = $(window);
        win.on('load', function () {
            $('#pre-loader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        })


        $('.main-carousel').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            navText: [
                "<img src='assets/img/left-icon.png' class='left-icon'>",
                "<img src='assets/img/right-icon.png' class='right-icon'>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
        });


        // popup-video-section statt
        $(function () {
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });
        // popup-video-section end

        // counter-start
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
        $('.counter').addClass('animated fadeInDownBig');
        // counter-end


        $('.experience-carousel').owlCarousel({
            loop: true,
            nav: true,
            margin: 30,
            navText: [
                "<i class='fa-solid fa-arrow-left'></i>",
                "<i class='fa-solid fa-arrow-right'></i>"
            ],
            autoplay: false,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.testimonials-carousel').owlCarousel({
            loop: true,
            nav: true,
            margin: 5,
            navText: [
                "<i class='fa-solid fa-angle-left'></i>",
                "<i class='fa-solid fa-angle-right'></i>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });

})(jQuery);