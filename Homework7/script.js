const url = "./data.json";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Ошибка - ${error}`);
    }
}

const data = await fetchData(url);

const products = document.querySelector('.product-box');

data.forEach(element => {
    products.insertAdjacentHTML('beforeend', `
    <div class="product-box__product">
            <img class="product-box__product__img" src="${element.img}" alt="product">
            <div class="product-box__product__content">
                <h2 class="product-box__product__content__name">${element.name}</h2>
                <p class="product-box__product__content__text">${element.description}</p>
                <p class="product-box__product__content__price">${element.price}</p>
            </div>

            <div class="product-box__product__hov">
                <button class="product-box__product__hov__block">
                    <img class="buttonImg" src="img/hoverCart.svg" alt="hoverCart">
                    Add to Cart
                </button>
            </div>
    </div>
    `);
});

let cartItems = document.querySelector('.cartItems');
let buttons = [];
let deleteButtons = [];
buttons = document.querySelectorAll('.product-box__product__hov__block');
let count = 0;
let logic = 0;

buttons.forEach(element => {
    element.addEventListener('click', function (e) {

        const img = element.parentNode.parentNode.children[0].getAttribute('src');
        const name = element.parentNode.parentNode.children[1].children[0].textContent;
        const description = element.parentNode.parentNode.children[1].children[1].textContent;
        const price = element.parentNode.parentNode.children[1].children[2].textContent;
        let color = '';
        let size = '';

        data.forEach(element => {
            if (img === element.img && name === element.name && description === element.description && price === element.price) {
                color = element.color;
                size = element.size;
            }
        });

        if (count === 0) {
            cartItems.insertAdjacentHTML('beforeend', `
                <div class="cartItems__name">
                    <p class="cartItems__name__p">Cart Items</p>
                </div>
            `)
            count = 1;
        }

        cartItems.insertAdjacentHTML('beforeend', `
    
        <div class="cartItems__card">

            <img class="cartItems__card__img" src="${img}" alt="">

            <div class="cartItems__card__description">

                <div class="cartItems__card__description__name">
                    <h2 class="cartItems__card__description__name__heading">${name}</h2>
                    <button class="cartItems__card__description__name__delete"><img class="cartItems__card__description__name__delete__img" src="img/delete.svg" alt="delete"></button>
                </div>

                <div class="cartItems__card__description__par">
                    <p class="cartItems__card__description__par__p">Price: <span class="cartItems__card__description__par__p__color">${price}</span></p>
                    <p class="cartItems__card__description__par__p">Color: <span class="cartItems__card__description__par__p__color1">${color}</span></p>
                    <p class="cartItems__card__description__par__p">Size: <span class="cartItems__card__description__par__p__color1">${size}</span></p>

                    <div class="cartItems__card__description__par__block">
                        <p class="cartItems__card__description__par__block__p">Quantity:</p>
                        <input type="number" class="cartItems__card__description__par__block__input" value="1">
                    </div>
                </div>
            </div >
        </div >
        `)
        deleteButtons = document.querySelectorAll('.cartItems__card__description__name__delete');
        logic = 0;
    });
});

cartItems.addEventListener('mouseenter', function (e) {
    const nameCart = document.querySelector('.cartItems__name');

    if (logic === 0) {
        deleteButtons.forEach(element => {
            element.addEventListener('click', function (e) {
                element.parentNode.parentNode.parentNode.remove();
                if (cartItems.childElementCount === 1) {
                    nameCart.remove();
                    count = 0;
                }
            });
        });
        logic = 1;
    }

});
