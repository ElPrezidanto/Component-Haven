function generateCard(name, imgSrc, description, price) {

    const swiperWrapper = document.getElementById("swiper-wrapper");
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
                <p class="card__description">${description}</p>
                <div class="price"><p>${price}</p></div>
                <a href="html/card_PS.html" class="card__button" >View More</a>
                <a class="card__button" onclick="addToCartFromCatalogue(this)"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </article>
    `;
    swiperWrapper.appendChild(article);
}

function generateTestimonial(name, username, imgSrc, rating, comment) {
    const testimonialsContainer = document.querySelector('.testimonials-box-container');

    const testimonialBox = document.createElement('div');
    testimonialBox.classList.add('testimonial-box');

    testimonialBox.innerHTML = `
        <div class="box-top">
            <div class="profile">
                <div class="profile-img">
                    <img src="${imgSrc}" alt="${name}">
                </div>
                <div class="name-user">
                    <strong>${name}</strong>
                    <span>@${username}</span>
                </div>
            </div>
            <div class="reviews">
                ${generateStars(rating)}
            </div>
        </div>
        <div class="client-comment">
            <p>${comment}</p>
        </div>
    `;

    testimonialsContainer.appendChild(testimonialBox);
}

function generateStars(rating) {
    const stars = Array.from({length: 5}, (_, index) => {
        const starType = index < rating ? 'fas' : 'far';
        return `<i class="${starType} fa-star"></i>`;
    });

    return stars.join('');
}

window.addEventListener("load", function () {
    generateCard("Intel Core i7", "../img/components/intel7.png", "Мощный процессор Intel Core i7 предоставляет выдающуюся производительность, обеспечивая плавный запуск системы.", "20 990₽");
    generateCard("ASUS ROG STRIX X670E-E", "../img/components/MB.png", "Надежная материнская плата Asus Rog Strix обеспечивает стабильную эффективную работу вашей системы.", "23 990₽");
    generateCard("RTX 3090", "../img/components/GC.png", "RTX 3090 от NVidia предоставляет выдающуюся графику и поддерживает плавный запуск современных игр с высоким разрешением.", "95 990₽");
    generateCard("Be Quiet Power 12", "../img/components/BQ.png", "Надежный блок питания Be Quiet обеспечивает стабильное и эффективное энергопитание для всех комплектующих вашего компьютера.", "21 990₽");
    generateCard("DeepCool AG400", "../img/components/DC.png", "DeepCool AG400 эффективно снижает температуру комплектующих, обеспечивая оптимальные условия для их работы и долговечности.", "3 390₽");
});

window.addEventListener("load", function () {
    generateTestimonial("Багир Наджафов", "Chaihona_nomer_1", "../img/reviews/Bagir.jpg", 5, "Отличный выбор комплектующих! Сервис на высоте. Купил здесь комплектующие для своего нового компьютера. Очень доволен выбором и качеством товаров. Доставка была быстрой, обслуживание на высшем уровне");
    generateTestimonial("Николай Шкабара", "tiltmaster", "../img/reviews/Nikolay.jpg", 5, "Профессиональные консультации и оперативная поддержка! Обратился с вопросами по выбору комплектующих для гейминг-пк. Покупка прошла гладко, доставка в срок. Спасибо за профессионализм");
    generateTestimonial("Евгений Бекалдиев", "Sejapoe", "../img/reviews/Evgen.jpg", 5, "Надежный магазин с качественными товарами! Заказывал у вас блок питания и видеокарту. Товары оказались высокого качества, цены адекватные. Радует большой выбор и оперативное обслуживание");
    generateTestimonial("Александра Толстых", "lilDushnil", "../img/reviews/Alexandra.jpg", 5, "Отличное обслуживание и быстрая доставка. Мой опыт покупки в вашем магазине был приятным. Заказ пришел вовремя, все комплектующие были в отличном состоянии. Обязательно вернусь за дополнительными товарами!");
    generateTestimonial("Даниил Коршунов", "CommByaka", "../img/reviews/Daniil.jpg", 4, "Впечатляющий ассортимент и отличное обслуживание. Выбрал Component Haven для покупки комплектующих для своего рабочего компьютера. Рекомендую! Единственное - это больше акций и скидок для постоянных клиентов.");
    generateTestimonial("Шерли Хананяева", "sheraKhn", "../img/reviews/shera.jpg", 5, "Лучший магазин для геймеров! Если вы геймер, то Component Haven - ваш лучший выбор. Купила здесь видеокарту и процессор для игрового ПК. Высокое качество, быстрая доставка и отличное обслуживание. 10/10!");

});