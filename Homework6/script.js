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
console.log(data);

const products = document.querySelector('.product-box');

data.forEach(element => {
    products.insertAdjacentHTML('beforeend', `
    <div class="product-box__product">
            <img class="product-box__product__img" src="${element.img}" alt="product4">
            <div class="product-box__product__content">
                <h2 class="product-box__product__content__name">${element.name}</h2>
                <p class="product-box__product__content__text">${element.description}</p>
                <p class="product-box__product__content__price">$${element.price}</p>
            </div>

            <div class="product-box__product__hov">
                <a class="product-box__product__hov__link" href="#">
                    <div class="product-box__product__hov__link__block">
                        <img src="img/hoverCart.svg" alt="hoverCart">
                        <p class="product-box__product__hov__link__block__text">Add to Cart</p>
                    </div>
                </a>
            </div>
    </div>
    `);
});