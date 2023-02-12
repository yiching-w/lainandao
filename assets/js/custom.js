$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
            $('.top-row').addClass('scrolled');
        } else {
            $('#back-to-top').fadeOut();
            $('.top-row').removeClass('scrolled');
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    new WOW().init();

    $('.scrollToSection').click(function (e) {
        e.preventDefault();
        let target = $($(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top;
            $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
        }
    });

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });

            }, true);

            portfolioIsotope.arrange({
                filter: '.filter-2F2'
            });
        }
    });

    window.addEventListener('load', () => {


        let portfolioContainer2 = select('.portfolio-container2');
        if (portfolioContainer2) {
            let portfolioIsotope = new Isotope(portfolioContainer2, {
                itemSelector: '.portfolio-item2',
            });

            let portfolioFilters = select('#portfolio-flters2 li', true);

            on('click', '#portfolio-flters2 li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });

            }, true);

            portfolioIsotope.arrange({
                filter: '.filter-lobby'
            });
        }
    });

    $('a[data-fancybox="gallery"]').fancybox({
        buttons: ["close"]
    });
});

