function generateCard(name, imgSrc, description, price, id) {
    const swiperWrapper = document.getElementById(id);
    const article = document.createElement("article");
    article.classList.add("card_catalog_article");
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
                <button class="card__button" onclick="redirect()">View More</button>
                <button class="card__button" onclick="addToCartFromCatalogue(this)"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </article>
    `;
    swiperWrapper.appendChild(article);
}
function redirect() {
    window.location.href = `html/card_PS.html`;
}
window.addEventListener("load", function () {
    generateCard("Intel Core i3", "../img/components/intel3.png", "Процессоры Intel Core i3 предоставляют отличную производительность .", "9 990₽","cpu");
    generateCard("Intel Core i5", "../img/components/intel5.png", "Intel Core i5: Отличное соотношение цены и производительности.", "12 990₽","cpu");
    generateCard("Intel Core i7", "../img/components/intel7.png", "Intel Core i7: Профессиональная мощь в каждом вычислении.", "20 990₽","cpu");
    generateCard("AMD Ryzen 5", "../img/components/ryzen5.png", "AMD Ryzen 5: Многозадачность для современных задач.", "10 990₽","cpu");
    generateCard("AMD Ryzen 7", "../img/components/ryzen7.png", "AMD Ryzen 7: Мощность для игр и креатива по хорошей цене.", "12 290₽","cpu");
    generateCard("AMD Ryzen 9", "../img/components/ryzen9.png", "AMD Ryzen 9: Потрясающая производительность для любых задач.", "23 000₽","cpu");
    generateCard("ASUS ROG STRIX X670E-E", "../img/components/MB.png", "Максимальная мощь и передовые технологии для ультимативного игрового опыта.", "23 990₽","MB");
    generateCard("ASUS ROG STRIX Z690-A", "../img/components/MB1.png", "Превосходная производительность с дизайном ROG, созданная для геймеров и креаторов.", "27 990₽","MB");
    generateCard("ASUS ROG STRIX Z690-A", "../img/components/MB2.png", " Впечатляющий баланс мощи и стиля для энтузиастов, профессионалов и игроманов с опытом.", "33 990₽","MB");
    generateCard("ASUS ROG STRIX Z690", "../img/components/MB3.png", "Производительность для требовательных задач, современных приложений и новых игр.", "44 990₽","MB");
    generateCard("MSI Z790 GAMING PRO", "../img/components/MB4.png", "Выдающаяся игровая эффективность с передовыми технологиями и стильным дизайном.", "24 290₽","MB");
    generateCard("ASRock Z790 Pro", "../img/components/MB5.png", "Надежная основа для вашей системы с высокой производительностью и расширенными возможностями.", "35 000₽","MB");
    generateCard("Be Quiet Power 12", "../img/components/BQ.png", "Тихая и эффективная подача питания для стабильной работы вашей системы.", "21 990₽","PS",);
    generateCard("Gigabyte GP-AP1200PM", "../img/components/PS1.png", "Надежная мощность с высокой эффективностью для энергоэффективных сборок.", "14 990₽","PS");
    generateCard("Cooler Master M2000", "../img/components/PS2.png", " Продвинутое охлаждение с эффективным управлением температурой.", "15 990₽","PS");
    generateCard("Chieftec Polaris 3.0", "../img/components/PS3.png", " Современный дизайн и выдающаяся производительность в каждой детали.", "13 990₽","PS");
    generateCard("MSI MPG A1000G PCIE5", "../img/components/PS4.png", "Мощность и надежность от ведущего производителя компьютерных комплектующих.", "16 290₽","PS");
    generateCard("Cooler Master XG750", "../img/components/PS5.png", "Продуманное охлаждение и надежная мощность для высокопроизводительных систем.", "14 590₽","PS");
    generateCard("DeepCool AK620 DARK", "../img/components/cooler1.png", "Превосходное охлаждение с тихим вентилятором для высокой производительности в любых задачах.", "6 990₽","cooler");
    generateCard("ID-COOLING SE-207-XT", "../img/components/cooler2.png", "Эффективное охлаждение с яркой подсветкой, обеспечивающее стабильность работы.", "4 780₽","cooler");
    generateCard("Be Quiet Pure Rock 2", "../img/components/cooler3.png", "Тихий и мощный воздушный кулер для надёжного эффективного охлаждения процессора.", "3 190₽","cooler");
    generateCard("DeepCool AG400", "../img/components/DC.png", "Эффективное снижение температуры компонентов для оптимальной производительности.", "3 390₽","cooler");
    generateCard("ID-COOLING SE-214-XT", "../img/components/cooler4.png", "Продвинутое охлаждение для улучшенной теплопередачи и стабильной работы вашей системы.", "1 690₽","cooler");
    generateCard("Jonsbo CR-3000", "../img/components/cooler5.png", "Стильный и эффективный воздушный кулер, обеспечивающий надежное охлаждение.", "4 000₽","cooler");
});
