<template>
    <div id="app">
        <div class="main">
            <header class="header">
                <div class="logo">
                    <a href="#">
                        <img
                            src="./assets/images/logo.svg"
                            alt="Логотип колеса"
                            width="215"
                            height="35"
                        />
                    </a>
                </div>
                <div class="header-search">
                    <div class="search">
                        <button type="submit" class="search-button">
                            <img
                                src="./assets/images/search-icon.png"
                                alt="Иконка поиска"
                            />
                        </button>
                        <input
                            type="text"
                            class="search search__search-term"
                            placeholder="Поиск"
                        />
                    </div>
                </div>
                <div class="user-basket">
                    <a href="#">
                        <img
                            src="./assets/images/user-default.png"
                            alt="Фото пользователя"
                            width="44"
                            height="44"
                            class="user-photo"
                        />
                        <span class="user-info">
                            <span class="user-name">Мортиджан</span>
                            <span class="user-balance">300 баллов</span>
                        </span>
                    </a>
                </div>
            </header>

            <section class="page">
                <aside class="sidebar">
                    <nav>
                        <ul class="sidebar__menu">
                            <a href="#"  v-for="(item, id) in menu"
                                :key="id">
                                <li v-bind:class="classObject">{{item.name}}</li>
                            </a>

                        </ul>
                    </nav>
                </aside>
                <div class="workspace">
                    <div class="banner">
                        <a href="#">
                            <img
                                src="./assets/images/banner.png"
                                alt="Продающий баннер"
                                width="1038"
                                height="336"
                                class="banner-image"
                            />
                        </a>
                    </div>
                    <div class="information-buttons">
                        <button
                            class="button button__info-button button__merch-plus"
                            type="submit"
                        >
                            Получить баллы
                        </button>
                        <button
                            class="button button__info-button button__merch-question"
                            type="submit"
                        >
                            Как получить баллы
                        </button>
                        <button
                            class="button button__info-button button__merch-gift"
                            type="submit"
                        >
                            Подарить баллы
                        </button>
                    </div>

                    <div class="merch-type">
                        <div class="radio-buttons">
                            <div
                                class="form-radio-btn merch-options"
                                v-for="(item, id) in filter"
                                :key="id"
                                v-bind:class="classObject"
                            >
                                <button
                                    class="button button__filter"
                                    type="submit"
                                    value=""
                                >
                                    {{ item.name }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-list card-list--margin">
                        <div
                            class="card"
                            v-for="(item, id) in clothes"
                            :key="id"
                        >
                            <div class="merch merch__image">
                                <img
                                    :src="item.img"
                                    width="330"
                                    height="330"
                                    alt=""
                                />
                                <span
                                    class="merch merch__badge"
                                    v-if="item.isNew"
                                    >new</span
                                >
                            </div>
                            <div class="merch merch__description">
                                <div class="merch merch__price">
                                    {{ item.price }} баллов
                                </div>
                                <h3 class="merch merch__title">
                                    {{ item.title }}
                                    {{computedTitle}}
                                </h3>
                                <div class="merch merch__hint">
                                    {{ item.hint }}
                                </div>
                                <button
                                    class="button merch merch__button js__open-modal-button"
                                    type="submit"
                                    id="myBtn"
                                    value=""
                                    @click="openModal"
                                >
                                    Заказать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!--Модальное окно-->
            <div id="myModal" class="modal" v-if="isShowModal">
                <!-- Модальное содержание -->
                <div class="modal-content">
                    <div class="image-container">
                        <div class="active-image">
                            <img
                                src="../src/assets/images/product-image.png"
                                width="330"
                                height="330"
                                alt="Вид спереди"
                            />
                        </div>

                        <div class="gallery-images">
                            <img
                                src="../src/assets/images/image-boy.png"
                                width="50"
                                height="50"
                                alt="Вид спереди"
                                class="gallery-thumb-image"
                            />

                            <img
                                src="../src/assets/images/product-image.png"
                                width="50"
                                height="50"
                                alt="Вид спереди"
                                class="gallery-thumb-image active"
                            />

                            <img
                                src="../src/assets/images/image-girl.png"
                                width="50"
                                height="50"
                                alt="Вид спереди"
                                class="gallery-thumb-image "
                            />
                            <img
                                src="../src/assets/images/image-girl.png"
                                width="50"
                                height="50"
                                alt="Вид спереди"
                                class="gallery-thumb-image "
                            />
                            <img
                                src="../src/assets/images/image-girl.png"
                                width="50"
                                height="50"
                                alt="Вид спереди"
                                class="gallery-thumb-image "
                            />
                            <img
                                src="../src/assets/images/image-girl.png"
                                width="50"
                                height="50"
                                alt="Вид спереди"
                                class="gallery-thumb-image "
                            />
                        </div>
                    </div>

                    <div class="product-description">
                        <h4 class="inner-title">
                            Футболка "Эволюционируй или сдохни"
                        </h4>
                        <div class="amount-container">
                            <div class="price-container">
                                <h3 class="price-product">100 баллов</h3>
                                <button
                                    class="merch-button request"
                                    type="submit"
                                    id="myBtn"
                                >
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
                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="radio-1"
                                        type="radio"
                                        name="color"
                                        value="1"
                                        class="colors-button blue"
                                        checked
                                    />
                                    <label for="radio-1" class="blue"
                                        >Синий</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="radio-2"
                                        type="radio"
                                        name="color"
                                        value="2"
                                        class="colors-button milk"
                                    />
                                    <label for="radio-2" class="milk"
                                        >Бежевый</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="radio-3"
                                        type="radio"
                                        name="color"
                                        value="3"
                                        class="colors-button gray"
                                    />
                                    <label for="radio-3" class="gray"
                                        >Серый</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="radio-4"
                                        type="radio"
                                        name="color"
                                        value="4"
                                        class="colors-button gray"
                                    />
                                    <label for="radio-4" class="gray"
                                        >Серый</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="radio-5"
                                        type="radio"
                                        name="color"
                                        value="5"
                                        class="colors-button gray"
                                    />
                                    <label for="radio-5" class="gray"
                                        >Серый</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="radio-6"
                                        type="radio"
                                        name="color"
                                        value="6"
                                        class="colors-button gray"
                                    />
                                    <label for="radio-6" class="gray"
                                        >Серый</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="radio-7"
                                        type="radio"
                                        name="color"
                                        value="7"
                                        class="colors-button gray"
                                    />
                                    <label for="radio-7" class="gray"
                                        >Серый</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="radio-8"
                                        type="radio"
                                        name="color"
                                        value="8"
                                        class="colors-button gray"
                                    />
                                    <label for="radio-8" class="gray"
                                        >Серый</label
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="size">
                            <p class="size-description">Размер:</p>
                            <div class="radio-buttons">
                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="size-radio-1"
                                        type="radio"
                                        name="size"
                                        value="S"
                                        class="size"
                                    />
                                    <label for="size-radio-1" class="size"
                                        >S</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="size-radio-2"
                                        type="radio"
                                        name="size"
                                        value="M"
                                        checked
                                        class="size"
                                    />
                                    <label for="size-radio-2" class="size"
                                        >M</label
                                    >
                                </div>

                                <div class="form_radio_btn merch-options">
                                    <input
                                        id="size-radio-3"
                                        type="radio"
                                        name="size"
                                        value="L"
                                        class="size"
                                    />
                                    <label for="size-radio-3" class="size"
                                        >L</label
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="content">
                            <div class="content-title">
                                Детали:
                            </div>
                            <div class="content-description">
                                Брендированная толстовка от Qazaq Republic.
                                Материал: Хлопок 80%, Вискоза 20%
                            </div>

                            <div class="content-title">
                                Как выбрать размер:
                            </div>
                            <div class="content-description">
                                Написать дяде Рику для уточнения.
                            </div>
                        </div>
                    </div>
                    <img
                        src="/src/assets/images/close.png"
                        alt="Кнопка закрыть"
                        class="merch-close"
                    />
                </div>
            </div>
            <!--Модальное окно-->
        </div>
        <footer>
            <div class="left-widget">
                <span class="left-widget__copyright">© Kolesa Group</span>
                <ul class="left-widget__social-icons">
                    <li>
                        <a href="#"
                            ><img
                                src="./assets/images/instagram.png"
                                alt="Иконка instagram"
                                width="18"
                                height="18"
                        /></a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="./assets/images/youtube.png"
                                alt="Иконка youtube"
                                width="18"
                                height="13"
                        /></a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="./assets/images/vk.png"
                                alt="Иконка VK"
                                width="18"
                                height="11"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <div class="right-widget">
                <span class="right-widget__footer-text">
                    <p>Есть идеи что улучшить?</p>
                    <p>Не знаешь, с кем решить проблему?</p>
                </span>

                <button class="button button--footer" type="submit">
                    Написать
                </button>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isActive: true,
            hasError: false,
            count: 0,
            isShowModal: false,
            menu: [
                {
                    id: 0,
                    name: 'Оргсхема',
                },

                {
                    id: 1,
                    name: 'Kolesa Team',
                },

                {
                    id: 2,
                    name: 'Картинка компании',
                },

                {
                    id: 3,
                    name: 'Новости',
                },

                {
                    id: 4,
                    name: 'Education',
                },

                {
                    id: 5,
                    name: 'Guidlines',
                },

                {
                    id: 6,
                    name: 'Библиотека',
                },

                {
                    id: 7,
                    name: 'FAQ',
                },

            ],
            filter: [
                {
                    id: 0,
                    name: 'Все товары',
                },
                {
                    id: 1,
                    name: 'Одежда',
                },
                {
                    id: 2,
                    name: 'Аксессуары',
                },
            ],

            selectedFilter: null,
            clothes: [
                {
                    id: 0,
                    img: './images/test-image1.jpg',
                    title: 'Футболка Претендуешь? Соответствуй',
                    price: 239,
                    isNew: true,
                    hint: 'Размеры S',
                    details:
                        'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 1,
                    img: './images/product-image.png',
                    title: 'Футболка Эволюционируй или сдохни',
                    price: 220,
                    isNew: false,
                    hint: 'Размеры S/M/L',
                    details:
                        'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 2,
                    img: './images/test-image2.jpg',
                    title: 'Кофта Планы на день',
                    price: 777,
                    isNew: false,
                    hint: 'Размеры M/L/XL',
                    details:
                        'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 3,
                    img: './images/test-image3.jpg',
                    title: 'Шорты Какая то надпись',
                    price: 555,
                    isNew: true,
                    hint: 'Размеры L/XL/XXL',
                    details:
                        'Брендированные штаны от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 4,
                    img: './images/test-image11.jpg',
                    title: 'Классные штаны',
                    price: 800,
                    isNew: false,
                    hint: 'Размеры L/XL/XXL',
                    details:
                        'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 5,
                    img: './images/test-image12.jpg',
                    title: 'Кепка Главное не перегревайся',
                    price: 200,
                    isNew: false,
                    hint: 'Цвета черный/серый',
                    details:
                        'Брендированная кепка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 6,
                    img: './images/test-image13.jpg',
                    title: 'Поло с надписью Поло',
                    price: 250,
                    isNew: false,
                    hint: 'Размеры L/XL/XXL',
                    details:
                        'Брендированное поло от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 7,
                    img: './images/test-image14.jpg',
                    title: 'Шарф болельщика',
                    price: 1000,
                    isNew: true,
                    hint: '',
                    details:
                        'Брендированный шарф от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },
            ],
            accessories: [
                {
                    id: 8,
                    img: './images/test-image4.jpg',
                    title: 'Рюкзак Специально для твоего ноута',
                    price: 500,
                    isNew: true,
                    hint: 'Цвет: черный/серый',
                    details:
                        'Брендированный рюкзак от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 9,
                    img: './images/test-image5.jpg',
                    title: 'Бутылка Устал? Освяжись',
                    price: 50,
                    isNew: false,
                    hint: '0.5/0.7/0.9',
                    details:
                        'Брендированная бутылка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 10,
                    img: './images/test-image6.jpg',
                    title: 'Плакат Соскучился по офису?',
                    price: 10,
                    isNew: false,
                    hint: '',
                    details:
                        'Брендированный плакат от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 11,
                    img: './images/test-image7.jpg',
                    title: 'Книга дизайнерских фич',
                    price: 300,
                    isNew: true,
                    hint: '333 страницы',
                    details:
                        'Брендированная книга от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 12,
                    img: './images/test-image21.jpg',
                    title: 'Очки',
                    price: 50,
                    isNew: true,
                    hint: 'Цвета стекол черный/серебристый',
                    details:
                        'Брендированные очки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 13,
                    img: './images/test-image22.jpg',
                    title: 'Кольцо ВК',
                    price: 125,
                    isNew: true,
                    hint: 'Цвета золото/черный',
                    details:
                        'Брендированное кольцо от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 14,
                    img: './images/test-image23.jpg',
                    title: 'Ручка',
                    price: 5,
                    isNew: true,
                    hint: '',
                    details:
                        'Брендированная ручка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },

                {
                    id: 15,
                    img: './images/test-image24.jpg',
                    title: 'Дырокол',
                    price: 7,
                    isNew: true,
                    hint: ' ',
                    details:
                        'Брендированный дырокол от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    helpTxt: 'Написать дяде Рику для уточнения.',
                },
            ],
        };
    },
    computed: {
        computedTitle() {
            return this.clothes.title;
        },

    },
    methods: {
        openModal() {
            this.isShowModal = true;
        },

        closeModal() {
            this.isShowModal = false;
        },

        mergeArray() {
            const allCards = this.clothes.pop(this.accessories);
            return allCards;
        },

        classObject() {
            return {
                active: this.isActive && !this.error,
                '': this.error && this.error.type === 'fatal',
            };
        },
    },
};
</script>
