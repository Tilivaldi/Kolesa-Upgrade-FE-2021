import '../scss/style.scss';

const clothes = [
    {
        id:      0,
        img:     './src/assets/images/product-image.png',
        title:   'Футболка "Эволюционируй или сдохни"',
        price:   220,
        isNew:   false,
        hint:    'Размеры S/M/L',
        details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:    1,
        img:   './src/assets/images/test-image1.jpg',
        title: 'Футболка "Претендуешь? Соответствуй"',
        price: 239,
        isNew: true,
        hint:  'Размеры S',
    },

    {
        id:    2,
        img:   './src/assets/images/test-image2.jpg',
        title: 'Кофта "Планы на день"',
        price: 777,
        isNew: false,
        hint:  'Размеры M/L/XL',
    },

    {
        id:    3,
        img:   './src/assets/images/test-image3.jpg',
        title: 'Шорты "Какая то надпись"',
        price: 555,
        isNew: true,
        hint:  'Размеры L/XL/XXL',
    },

    {
        id:    4,
        img:   './src/assets/images/test-image11.jpg',
        title: 'Классные штаны',
        price: 800,
        isNew: false,
        hint:  'Размеры L/XL/XXL',
    },

    {
        id:    5,
        img:   './src/assets/images/test-image12.jpg',
        title: 'Кепка "Главное не перегревайся"',
        price: 200,
        isNew: false,
        hint:  'Цвета черный/серый',
    },

    {
        id:    6,
        img:   './src/assets/images/test-image13.jpg',
        title: 'Поло с надписью "Поло"',
        price: 250,
        isNew: false,
        hint:  'Размеры L/XL/XXL',
    },

    {
        id:    7,
        img:   './src/assets/images/test-image14.jpg',
        title: 'Шарф болельщика',
        price: 1000,
        isNew: true,
        hint:  ' ',
    },

];

const accessories = [
    {
        id:    8,
        img:   './src/assets/images/test-image5.jpg',
        title: 'Рюкзак "Специально для твоего ноута"',
        price: 500,
        isNew: true,
        hint:  'Цвет: черный/серый',
    },

    {
        id:    9,
        img:   './src/assets/images/test-image4.jpg',
        title: 'Бутылка "Устал? Освяжись"',
        price: 50,
        isNew: false,
        hint:  '0.5/0.7/0.9',
    },

    {
        id:    10,
        img:   './src/assets/images/test-image6.jpg',
        title: 'Плакат "Соскучился по офису?"',
        price: 10,
        isNew: false,
        hint:  'Размеры M/L/XL',
    },

    {
        id:    11,
        img:   './src/assets/images/test-image7.jpg',
        title: 'Книга дизайнерских фич"',
        price: 300,
        isNew: true,
        hint:  '333 страницы',
    },

    {
        id:    12,
        img:   './src/assets/images/test-image21.jpg',
        title: 'Очки',
        price: 50,
        isNew: true,
        hint:  'Цвета стекол черный/серебристый',
    },

    {
        id:    13,
        img:   './src/assets/images/test-image22.jpg',
        title: 'Кольцо ВК',
        price: 125,
        isNew: true,
        hint:  'Цвета золото/черный',
    },

    {
        id:    14,
        img:   './src/assets/images/test-image23.jpg',
        title: 'Ручка',
        price: 5,
        isNew: true,
        hint:  '',
    },

    {
        id:    15,
        img:   './src/assets/images/test-image24.jpg',
        title: 'Дырокол',
        price: 7,
        isNew: true,
        hint:  ' ',
    },

];

const makeProductCard = (img, title, price, isNew, hint, id) => `<div class="card">
    <div class="merch merch__image">
    <img src="${img}" width="330" height="330"
    alt="${title}">
    ${isNew ? '<span class="merch merch__badge">new</span>' : ''}

    </div>
    <div class="merch merch__description">
    <div class="merch merch__price">
    ${price} баллов
    </div>
    <h3 class="merch merch__title">
    ${title}
    </h3>
    <div class="merch merch__hint">
    ${hint}&nbsp;
    </div>
    <button class="button merch merch__button js__open-modal-button" data-key="${id}" type="submit"
    id="modal-button${id}" value="${title}" >
    Заказать
    </button>
    </div>
    </div>`;

const innerCardList = document.querySelector('.js__card-list');

function makeClothesFunction() {
    clothes.forEach((card) => {
        const {
            img, title, price, isNew, hint, id,
        } = card;
        const cardHtml = makeProductCard(img, title, price, isNew, hint, id);

        if (card.isNew === true) {
            innerCardList.insertAdjacentHTML('afterbegin', cardHtml);
        } else {
            innerCardList.innerHTML += cardHtml;
        }
    });
}

function makeAccessoriesFunction() {
    accessories.forEach((card) => {
        const {
            img, title, price, isNew, hint, id,
        } = card;
        const cardHtml = makeProductCard(img, title, price, isNew, hint, id);

        if (card.isNew === true) {
            innerCardList.insertAdjacentHTML('afterbegin', cardHtml);
        } else {
            innerCardList.innerHTML += cardHtml;
        }
    });
}

const inputCardType = document.querySelectorAll('.js__category-input');

function createCardIf() {
    inputCardType.forEach((input) => {
        input.addEventListener('click', (event) => {
            const inputKey = event.target.dataset.key;

            if (inputKey === 'all') {
                innerCardList.innerHTML = '';
                makeClothesFunction();
                makeAccessoriesFunction();
            } else if (inputKey === 'clothes') {
                innerCardList.innerHTML = '';
                makeClothesFunction();
            } else if (inputKey === 'accessories') {
                innerCardList.innerHTML = '';
                makeAccessoriesFunction();
            }
        });
    });
}

if (createCardIf() === undefined) {
    makeClothesFunction();
    makeAccessoriesFunction();
} else {
    createCardIf();
}

const closeButton = document.querySelectorAll('.merch-close');

const buttonModalOpen = document.querySelectorAll('.js__open-modal-button');

function openModal() {
    buttonModalOpen.forEach((button) => {
        button.addEventListener('click', (event) => {
            const inputKey = event.target.dataset.key;

            console.log(inputKey);
            const modal = document.getElementById('myModal');

            modal.style.display = 'block';
        });
    });
}

function closeModal() {
    closeButton.forEach((button) => {
        button.addEventListener('click', (event) => {
            const inputKey = event.target.dataset.key;

            console.log(inputKey);
            const modal = document.getElementById('myModal');

            modal.style.display = 'none';
        });
    });
}

openModal();
closeModal();
