window.addEventListener("load", function () {
    let swiperCardsAbout = new Swiper(".card__content", {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 3,
            },
        },
    });
});

window.addEventListener('load', function () {
    let marker = document.querySelector('#marker');
    let item = document.querySelectorAll('nav a');

    function indicator(e) {
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';
    }

    item.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target);
        });
    });

    // Установите начальное положение для "home" после загрузки страницы
    let link = document.getElementById('selected-link');
    if (link) {
        indicator(link);
    }
});