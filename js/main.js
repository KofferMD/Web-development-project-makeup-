const anchors = document.querySelectorAll('a[href*="#anchor"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs__content');



    if (tabs) {
        tabs.addEventListener('click', function (e) {
            if (e.target.classList.contains('tabs__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = function (path) {
        tabsBtn.forEach(function (el) {
            el.classList.remove('tabs__btn--active');
        });
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn--active');

        tabsContent.forEach(function (el) {
            el.classList.remove('tabs__content--active');
        });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
    };
});


$(function () {

    $('.team__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [{
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});