<template>
    <div id="app">
        <div class="main">
            <header class="header" ref="header">
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
                    <search
                    :search-value="search"
                    @setSearch="setSearch"></search>
                </div>
                <div class="user-basket">
                    <a href="#">
                        <img
                            :src="users.avatarUrl"
                            alt="Фото пользователя"
                            width="44"
                            height="44"
                            class="user-photo"
                        />
                        <span class="user-info">
                            <span class="user-name">{{users.name}}</span>
                            <span class="user-balance">{{users.score}} баллов</span>
                        </span>
                    </a>
                </div>
            </header>

            <section class="page">
                <sidebarMenu></sidebarMenu>
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
                    <informButtons></informButtons>

                    <div class="merch-type">
                        <div class="radio-buttons" >
                            <div

                                class="form-radio-btn merch-options"
                                v-for="(item, id) in filter"
                                :key="id"
                            >
                                <input type="radio" class="merch-type-options"
                                    v-bind:value="item.name" v-model="selectedFilter" :data-key="item.dataKey"/>
                                <label :for="'merch-type'+(item.id)" class="merch-type-options js__category-input"
                                >{{item.name}}</label>
                            </div>
                            <span v-if="selectedFilter!==null">Выбрано: {{selectedFilter.name}} - {{item.id}}</span>
                        </div>
                    </div>
                    <div class="card-list card-list--margin">
                        <div
                            class="card"
                            v-for="(item, id) in getCurrentCategory"
                            :key="id"
                        >
                            <div class="merch merch__image">
                                <img
                                    :src="item.mainImage"
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
                                </h3>
                                <div class="merch merch__hint">

                                   {{
                                       item.sizes && item.sizes.length ? `Размеры ${String(item.sizes)}` : '&nbsp;'
                                   }}
                                </div>
                                <button
                                    class="button merch merch__button js__open-modal-button"
                                    type="submit"
                                    id="myBtn"
                                    value=""
                                    @click="openCard(item)"
                                >
                                    Заказать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <modal :is-open="isShowModal"
            :data="modalData"
            @close="closeModal"
            @order="setScore"></modal>
        </div>
       <footerComponent></footerComponent>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import footerComponent from '@/components/footerComponent.vue';
/* import userBasket from '@/components/userBasket.vue'; */
import informButtons from '@/components/informButtons.vue';
import sidebarMenu from '@/components/sidebarMenu.vue';
import Search from '@/components/Search.vue';
import axios from '@/axios';

export default {
    name: 'App',
    components: {
        Modal,
        footerComponent,
        /* userBasket, */
        informButtons,
        sidebarMenu,
        Search,
    },
    data() {
        return {
            search: '',
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
                    name: 'Все товаы',
                    dataKey: 'All',
                },
                {
                    id: 1,
                    name: 'Одежда',
                    dataKey: 'clothes',
                },
                {
                    id: 2,
                    name: 'Аксессуары',
                    dataKey: 'accessories',
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
            users: [
                {
                    id: 0,
                    avatarUrl: './images/test-image1.jpg',
                    name: 'Morti',
                    score: 500,
                },
            ],
        };
    },
    watch: {
        score(newValue, oldValue) {
            console.log('newValue ', newValue);
            console.log('oldValue ', oldValue);
            this.showCost();
        },
    },
    mounted() {
        axios.get('templates/-_RLsEGjof6i/data')
            .then((response) => {
                console.log(response.data);
                this.clothes = response.data;
            });
        axios.get('templates/q3OPxRyEcPvP/data')
            .then((response) => {
                console.log(response.data);
                this.accessories = response.data;
            });
        axios.get('templates/7ZW3y5GAuIge/data')
            .then((response) => {
                console.log(response.data);
                this.users = response.data;
            });
    },
    computed: {
        getCurrentCategory() {
            let allCard = [];
            if (this.currentTab === 'clothes') return this.clothes;
            if (this.currentTab === 'accessories') return this.accessories;
            allCard = this.clothes.concat(this.accessories);
            allCard.sort((a, b) => b.isNew - a.isNew);
            return allCard;
        },
    },
    methods: {
        openCard(data) {
            this.openModal();
            this.modalData = data;
        },
        openModal() {
            this.isShowModal = true;
        },

        closeModal() {
            this.isShowModal = false;
        },

        totalMoney() {

        },

        setSearch(e) {
            this.search = e.target.value;
        },

        setScore(price) {
            if (this.users.score > price) {
                this.users.score -= price;
                console.log(price);
                console.log(this.users.score);
            } else {
                alert('Недостаточно суммы');
            }
        },

        showCost() {
            alert(this.score);
        },
    },
};
</script>
