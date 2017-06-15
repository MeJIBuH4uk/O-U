(function() {
    $(document).ready(function () {
        function menu() {
            if ($(window).width() <= 600) {
                $('#menu-button').on("click", function () {
                    $(this).toggleClass("active");
                });
            } else {
                $('#menu-button').removeClass("active");
            }
        }

        menu();

        $(window).resize( function() {
            menu();
        });
    });
})();

(function () {
    $(document).ready(function () {
        $('.slider ul').lightSlider({
            item: 1,
            loop: false,
            slideMove: 1,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed: 800,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        item: 1,
                        slideMove: 1,
                        slideMargin: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 1,
                        slideMove: 1
                    }
                }
            ]
        });
    });
})();