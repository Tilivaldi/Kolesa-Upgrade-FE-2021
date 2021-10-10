import '../scss/style.scss';

const clothes = [

    {
        id:      0,
        img:     './src/assets/images/test-image1.jpg',
        title:   'Футболка "Претендуешь? Соответствуй"',
        price:   239,
        isNew:   true,
        hint:    'Размеры S',
        details: 'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      1,
        img:     './src/assets/images/product-image.png',
        title:   'Футболка "Эволюционируй или сдохни"',
        price:   220,
        isNew:   false,
        hint:    'Размеры S/M/L',
        details: 'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      2,
        img:     './src/assets/images/test-image2.jpg',
        title:   'Кофта "Планы на день"',
        price:   777,
        isNew:   false,
        hint:    'Размеры M/L/XL',
        details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      3,
        img:     './src/assets/images/test-image3.jpg',
        title:   'Шорты "Какая то надпись"',
        price:   555,
        isNew:   true,
        hint:    'Размеры L/XL/XXL',
        details: 'Брендированные штаны от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      4,
        img:     './src/assets/images/test-image11.jpg',
        title:   'Классные штаны',
        price:   800,
        isNew:   false,
        hint:    'Размеры L/XL/XXL',
        details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      5,
        img:     './src/assets/images/test-image12.jpg',
        title:   'Кепка "Главное не перегревайся"',
        price:   200,
        isNew:   false,
        hint:    'Цвета черный/серый',
        details: 'Брендированная кепка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      6,
        img:     './src/assets/images/test-image13.jpg',
        title:   'Поло с надписью "Поло"',
        price:   250,
        isNew:   false,
        hint:    'Размеры L/XL/XXL',
        details: 'Брендированное поло от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      7,
        img:     './src/assets/images/test-image14.jpg',
        title:   'Шарф болельщика',
        price:   1000,
        isNew:   true,
        hint:    ' ',
        details: 'Брендированный шарф от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

];

const accessories = [
    {
        id:      8,
        img:     './src/assets/images/test-image5.jpg',
        title:   'Рюкзак "Специально для твоего ноута"',
        price:   500,
        isNew:   true,
        hint:    'Цвет: черный/серый',
        details: 'Брендированный рюкзак от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      9,
        img:     './src/assets/images/test-image4.jpg',
        title:   'Бутылка "Устал? Освяжись"',
        price:   50,
        isNew:   false,
        hint:    '0.5/0.7/0.9',
        details: 'Брендированная бутылка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      10,
        img:     './src/assets/images/test-image6.jpg',
        title:   'Плакат "Соскучился по офису?"',
        price:   10,
        isNew:   false,
        hint:    '',
        details: 'Брендированный плакат от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      11,
        img:     './src/assets/images/test-image7.jpg',
        title:   'Книга дизайнерских фич"',
        price:   300,
        isNew:   true,
        hint:    '333 страницы',
        details: 'Брендированная книга от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      12,
        img:     './src/assets/images/test-image21.jpg',
        title:   'Очки',
        price:   50,
        isNew:   true,
        hint:    'Цвета стекол черный/серебристый',
        details: 'Брендированные очки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      13,
        img:     './src/assets/images/test-image22.jpg',
        title:   'Кольцо ВК',
        price:   125,
        isNew:   true,
        hint:    'Цвета золото/черный',
        details: 'Брендированное кольцо от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      14,
        img:     './src/assets/images/test-image23.jpg',
        title:   'Ручка',
        price:   5,
        isNew:   true,
        hint:    '',
        details: 'Брендированная ручка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
    },

    {
        id:      15,
        img:     './src/assets/images/test-image24.jpg',
        title:   'Дырокол',
        price:   7,
        isNew:   true,
        hint:    ' ',
        details: 'Брендированный дырокол от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        helpTxt: 'Написать дяде Рику для уточнения.',
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

const makeModalWindow = (img, title, price, details, helpTxt, id) => `
<!--Модальное окно-->
<div id="myModal${id}" class="modal ">

    <!-- Модальное содержание -->
    <div class="modal-content js__modal-content">
        <div class="image-container">
            <div class="main-image">
                <img src="${img}" width="330" height="330"
                    alt="${title}">
            </div>

            <div class="gallery-images">
                <img src="./src/assets/images/image-boy.png" width="50" height="50"
                    alt="Вид спереди" class="gallery-thumb-image">

                <img src="${img}" width="50" height="50"
                    alt="Вид спереди" class="gallery-thumb-image gallery-thumb-image--active">

                <img src="./src/assets/images/image-girl.png" width="50" height="50"
                    alt="Вид спереди" class="gallery-thumb-image ">
                <img src="./src/assets/images/image-girl.png" width="50" height="50"
                    alt="Вид спереди" class="gallery-thumb-image ">


            </div>
        </div>

        <div class="product-description">
            <h4 class="inner-title">${title}</h4>
            <div class="amount-container">
                <div class="price-container">
                    <h3 class="price-product">${price}</h3>
                    <button class="button merch-button request" type="submit" id="myBtn">
                        Попросить 50 баллов
                    </button>
                </div>
                <div class="amount-user">
                    <p class="amount-title">Твой баланс:</p>
                    <span class="amount-check">50 баллов</span>
                </div>
            </div>

            <div class="colors">
                <p class="color-description">Цвета:</p>
                <div class="radio-buttons">
                    <div class="form-radio-btn merch-options">
                        <input id="radio-1" type="radio" name="color" value="1"
                            class="colors-button blue" checked>
                        <label for="radio-1" class="blue">Синий</label>
                    </div>

                    <div class="form-radio-btn merch-options">
                        <input id="radio-2" type="radio" name="color" value="2"
                            class="colors-button milk">
                        <label for="radio-2" class="milk">Бежевый</label>
                    </div>

                    <div class="form-radio-btn merch-options">
                        <input id="radio-3" type="radio" name="color" value="3"
                            class="colors-button gray">
                        <label for="radio-3" class="gray">Серый</label>
                    </div>
                </div>
            </div>

            <div class="size">
                <p class="size-description">Размер:</p>
                <div class="radio-buttons">
                    <div class="form-radio-btn merch-options">
                        <input id="size-radio-1" type="radio" name="size" value="S"
                            class="size">
                        <label for="size-radio-1" class="size">S</label>
                    </div>

                    <div class="form-radio-btn merch-options">
                        <input id="size-radio-2" type="radio" name="size" value="M" checked
                            class="size">
                        <label for="size-radio-2" class="size">M</label>
                    </div>

                    <div class="form-radio-btn merch-options">
                        <input id="size-radio-3" type="radio" name="size" value="L"
                            class="size">
                        <label for="size-radio-3" class="size">L</label>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="content-title">
                    Детали:
                </div>
                <div class="content-description">
                ${details}
                </div>

                <div class="content-title">
                    Как выбрать размер:
                </div>
                <div class="content-description">
                ${helpTxt}
                </div>
            </div>
        </div>
        <button  class="merch-close" data-key="${id}"></button>
    </div>

</div>
<!--Модальное окно-->`;

function makeWindowsClothesFunction() {
    clothes.forEach((card) => {
        const {
            img, title, price, details, helpTxt, id,
        } = card;
        const cardHtml = makeModalWindow(img, title, price, details, helpTxt, id);

        innerCardList.innerHTML += cardHtml;
    });
}

function makeWindowsAccessoriesFunction() {
    accessories.forEach((card) => {
        const {
            img, title, price, details, helpTxt, id,
        } = card;
        const cardHtml = makeModalWindow(img, title, price, details, helpTxt, id);

        innerCardList.innerHTML += cardHtml;
    });
}
makeWindowsAccessoriesFunction();
makeWindowsClothesFunction();

const closeButton = document.querySelectorAll('.merch-close');

const buttonModalOpen = document.querySelectorAll('.js__open-modal-button');

function openModal() {
    buttonModalOpen.forEach((button) => {
        button.addEventListener('click', (event) => {
            const inputKey = event.target.dataset.key;

            const modal = document.getElementById(`myModal${inputKey}`);

            modal.style.display = 'block';
        });
    });
}

function closeModal() {
    closeButton.forEach((button) => {
        button.addEventListener('click', (event) => {
            const inputKey = event.target.dataset.key;
            const modal = document.getElementById(`myModal${inputKey}`);

            modal.style.display = 'none';
        });
    });
}

openModal();
closeModal();
