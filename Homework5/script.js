const data = JSON.parse(dataFile);

const content = document.querySelector('.content');

data.forEach(element => {
    content.insertAdjacentHTML('beforeend', `
        <div class="content__card">
            <img class="content__card__img" src="${element.url}">
            <a href="#" class="content__card__link">${element.name}</a>
            <p>${element.description}</p>
            <p>${element.price}</p>
        </div>
    `);
});