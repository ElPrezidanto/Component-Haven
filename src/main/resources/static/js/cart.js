function priceToNumber(price) {
    const numberString = price.replace(/\D/g, '');
    return parseInt(numberString, 10);
}

function addToCartFromCatalogue(button) {
    let jsonItems = localStorage.getItem("cart");
    console.log(`addToCartFromCatalogue() cart: ${jsonItems}`);
    let items = (jsonItems) ? JSON.parse(jsonItems) : [];

    let compCard = button.parentNode.parentNode;
    console.log(compCard)
    let compName = compCard.querySelector('.card__data').querySelector('.card__name').innerHTML;
    let compPrice = priceToNumber(compCard.querySelector('.card__data').querySelector('.price').querySelector('p').innerHTML);
    let compImage = compCard.querySelector('.card__image').querySelector('img').getAttribute("src");
    /*let cardImage = compCard.querySelector('.card__img');
    let compImage = cardImage.getAttribute('src');*/

    let item = {
        name: compName,
        price: compPrice,
        image: compImage,
        amount: 1
    }

    let itemAlreadyInCart = false;

    for (let i of items) {
        if (i.name === item.name) {
            i.amount += 1;
            itemAlreadyInCart = true;
            break;
        }
    }

    if (!itemAlreadyInCart) {
        items.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(items));
    console.log(`Added to cart: ${compName} ${compPrice}`);
    console.log(items);


    var notification = document.getElementById('notification');
    if (notification.style.display === 'none' || notification.style.display === '') {
        notification.style.display = 'block';
        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000);
    }
}


/*function addToCartFromHome(button) {
    let jsonItems = localStorage.getItem("cart");
    console.log(`addToCartFromCatalogue() cart: ${jsonItems}`);
    let items = (jsonItems) ? JSON.parse(jsonItems) : [];

    let compCard = button.parentNode.parentNode;
    console.log(compCard)
    let compName = compCard.querySelector('.card__data').querySelector('.card__name').innerHTML;
    let compPrice = priceToNumber(compCard.querySelector('.card__data').querySelector('.price').querySelector('p').innerHTML);
    let compImage = compCard.querySelector('.card__image').querySelector('img').getAttribute("src");
    /!*let cardImage = compCard.querySelector('.card__img');
    let compImage = cardImage.getAttribute('src');*!/

    let item = {
        name: compName,
        price: compPrice,
        image: compImage,
        amount: 1
    }

    let itemAlreadyInCart = false;

    for (let i of items) {
        if (i.name === item.name) {
            i.amount += 1;
            itemAlreadyInCart = true;
            break;
        }
    }

    if (!itemAlreadyInCart) {
        items.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(items));
    console.log(`Added to cart: ${compName} ${compPrice}`);
    console.log(items);


    var notification = document.getElementById('notification');
    if (notification.style.display === 'none' || notification.style.display === '') {
        notification.style.display = 'block';
        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000);
    }
}*/

function addToCart(button) {
    let jsonItems = localStorage.getItem("cart");
    console.log(`addToCart() cart: ${jsonItems}`);
    let items = (jsonItems) ? JSON.parse(jsonItems) : [];

    let compContainer = button.parentNode.parentNode.parentNode.parentNode;
    console.log(compContainer)
    let compName = compContainer.querySelector('.comp_name').innerHTML;
    let compPrice = priceToNumber(compContainer.querySelector('.price').innerHTML);
    let compImage = compContainer.querySelector('img').getAttribute("src");

    let item = {
        name: compName,
        price: compPrice,
        image: compImage,
        amount: 1
    }

    let itemAlreadyInCart = false;

    for (let i of items) {
        if (i.name === item.name) {
            i.amount += 1;
            itemAlreadyInCart = true;
            break;
        }
    }

    if (!itemAlreadyInCart) {
        items.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(items));
    console.log(`Added to cart: ${compName} ${compPrice}`);
    console.log(items);

    var notification = document.getElementById('notification');
    if (notification.style.display === 'none' || notification.style.display === '') {
        notification.style.display = 'block';
        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000); // Уведомление исчезает спустя 3 секунды
    }
}

function drawCart() {
    let jsonItems = localStorage.getItem("cart");
    console.log(`addToCart() cart: ${jsonItems}`);
    let items = (jsonItems) ? JSON.parse(jsonItems) : [];

    if (items.length === 0) {
        document.querySelector('main').innerHTML = `<p class="nothing-in-cart">В корзине ничего нет</p>`;
        return;
    }

    console.log("inserting");
    document.querySelector('.main-cart').innerHTML = `
    <h2>Корзина</h2>
    <div class="cart">
        <div class="cart-items-wrapper">
        </div>
        <div class="checkout">
            <p>Итого:</p>
            <p class="total-amount"></p>
            <form action="">
                <label for="address">Адрес </label>
                <input type="text" id="address" required>
                <label for="tel">Телефон</label>
                <input type="tel" id="tel" required>
                <p>Тип оплаты</p>
                <div class="payment-radio-wrap">
                    <div class="payment-radio">
                        <label for="card">Карта</label>
                        <input type="radio" name="payment" id="card" value="card" checked>
                    </div>
                    <div class="payment-radio">
                        <label for="cash">Наличные</label>
                        <input type="radio" name="payment" id="cash" value="cash">
                    </div>
                    
                </div>
                <input type="submit" value="Оформить" class="purchase-button">
            </form>
        </div>
    </div>`;

    let cartItemsEl = document.querySelector('.cart-items-wrapper');
    let totalAmount = 0;

    for (let item of items) {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML =
            `<div class="cart-img">
                <img src="${item.image}" alt="">
            </div>
            <div class="cart-item-info">
                <p class="comp-name">${item.name}</p>
                <p class="comp-price">${item.price}₽ x ${item.amount}</p>
                <p class="total-price">${item.price * item.amount}₽</p>
                <div class="quantity-buttons">
                    <button class="quantity-button" onclick="updateCartItemAmount(this, -1)">-</button>
                    <button class="quantity-button" onclick="updateCartItemAmount(this, 1)">+</button>
                </div>
            </div>
            <div class="remove-cart-item">
                <button class="fa-solid fa-trash" onclick="removeItemFromCart(this)"></button>
            </div>`;

        cartItemsEl.append(cartItem);

        totalAmount += item.price * item.amount;
    }

    document.querySelector('.total-amount').innerHTML = totalAmount + '₽'
}

function updateCartItemAmount(button, change) {
    let jsonItems = localStorage.getItem("cart");
    console.log(`updateCartItemAmount() cart: ${jsonItems}`);
    let items = (jsonItems) ? JSON.parse(jsonItems) : [];

    let itemContainer = button.parentNode.parentNode;
    let compName = itemContainer.querySelector('.comp-name').innerHTML;

    for (let i = 0; i < items.length; i++) {
        if (items[i].name === compName) {
            items[i].amount += change;

            if (items[i].amount <= 0) {
                items.splice(i, 1);
            }

            break;
        }
    }

    localStorage.setItem("cart", JSON.stringify(items));
    drawCart();
}

function removeItemFromCart(button) {
    let jsonItems = localStorage.getItem("cart");
    console.log(`addToCart() cart: ${jsonItems}`);
    let items = (jsonItems) ? JSON.parse(jsonItems) : [];
    console.log(items);

    let itemContainer = button.parentNode.parentNode.querySelector('.cart-item-info');
    let compName = itemContainer.querySelector('.comp-name').innerHTML;

    for (let i = 0; i < items.length; i++) {
        if (items[i].name === compName) {
            items.splice(i, 1);
        }
    }

    itemContainer.parentNode.remove();
    localStorage.setItem("cart", JSON.stringify(items));

    drawCart();
}