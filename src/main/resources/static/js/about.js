window.addEventListener("load", function () {
    function generateCard(name, imgSrc) {
        const swiperWrapper = document.getElementById("about-swiper-wrapper");
        const article = document.createElement("article");
        article.classList.add("card__article", "swiper-slide");
        article.innerHTML = `
        <article class="card__article swiper-slide">
            <div class="card__image">
                <img src="${imgSrc}" alt="image" class="card__img">
                <div class="card__shadow"></div>
            </div>
            <div class="card__data">
                <h3 class="card__name">${name}</h3>
                <a href="#" class="card__button">View More</a>
            </div>
        </article>
    `;
        swiperWrapper.appendChild(article);
    }

    generateCard("Шилов Павел", "../img/our_team/Pasha_title.png");
    generateCard("Хананяев Энрики", "../img/our_team/Enriki_title.png");
    generateCard("Якобчук Кирилл", "../img/our_team/Kirill_title.png");
    generateCard("Шкабара Николай", "../img/our_team/Nikolay_title.png");
    generateCard("Вилков Никита", "../img/our_team/Nikita_title.png");
});