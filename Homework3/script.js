// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('Все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', function (e) {
    console.log('страница загрузилась');
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const body = document.querySelector('body');
body.addEventListener('click', function (e) {
    const tag = e.target.tagName.toLowerCase()
    if (e.target.className === 'super_element') {
        console.log(`Класс "super_element" присутствует в элементе ${tag}`);
    } else {
        console.log(`Класса "super_element" нет в элементе ${tag}`);
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textarea = document.querySelector('textarea');

textarea.addEventListener('mouseover', function (e) {
    console.log('Вы навели на textarea');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ul = document.querySelector('ul');

ul.addEventListener('click', function (e) {
    if(e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Ответ:
// Происходит так называемое "всплытие". Сначала обработчик события срабатывает на дочернем элементе, потом на элементе-родителе при условии что обработчик есть на каждом из элементов. Первым "всплывает" самый глубоко вложенный элемент.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const ul1 = document.querySelector('ul');

for (let i = 1; i < ul1.children.length; i = i + 2) {
    ul1.children[i].style.background = 'greenyellow';
    ul1.children[i].children[0].style.cssText = 'color: white; background: green;'
}