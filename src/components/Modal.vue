<template>
    <!--Модальное окно-->
    <div  class="modal" v-if="isOpen">
        <!-- Модальное содержание -->
        <div class="modal-content">
            <div class="image-container">
                <div class="active-image">
                    <img
                        :src="data.mainImage"
                        width="330"
                        height="330"
                        alt="Вид спереди"
                    />
                </div>

                <div class="gallery-images">
                    <img
                     v-for="(item, id) in data.images"
                                :key="id"
                        :src="data.images[id]"
                        width="50"
                        height="50"
                        alt="Вид спереди"
                        class="gallery-thumb-image"
                    />
                </div>
            </div>

            <div class="product-description">
                <h4 class="inner-title">
                   {{data.title}}
                </h4>
                <div class="amount-container">
                    <div class="price-container">
                        <h3 class="price-product">{{data.price}}</h3>
                        <button
                            class="merch-button buy"
                            type="submit"
                            @click="order"
                        >
                            Заказать
                        </button>
                    </div>
                    <div class="amount-user">
                        <p class="amount-title">Твой баланс:</p>
                        <span class="amount-check">{{data.score}} баллов</span>
                    </div>
                </div>

                <div class="colors">
                    <p class="color-description">Цвета:</p>
                    <div class="radio-buttons" >
                        <div class="form-radio-btn merch-options" v-for="(item, id) in data.colors"
                                :key="id">

                            <input
                                :id="'radio-1'+item.label"
                                type="radio"
                                name="color"
                                value="1"
                                class="colors-button"
                                checked
                            />
                            <label for="radio-1" class="blue">{{item.label}}</label>
                        </div>

                    </div>
                </div>

                <div class="size">
                    <p class="size-description">Размер:</p>
                    <div class="radio-buttons">
                        <div class="form-radio-btn merch-options" v-for="(item, id) in data.sizes"
                                :key="id">
                            <input
                                id="size-radio-1"
                                type="radio"
                                name="size"
                                value="S"
                                class="size"
                            />
                            <label for="size-radio-1" class="size">{{item}}</label>
                        </div>

                    </div>
                </div>

                <div class="content">
                    <div class="content-title">
                        Детали:
                    </div>
                    <div class="content-description">
                        {{data.description}}
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
                src="@/assets/images/close.png"
                alt="Кнопка закрыть"
                class="merch-close"
                @click="closeModal"
            />
        </div>
    </div>
    <!--Модальное окно-->
</template>

<script>
export default {
    name: 'Modal',
    props: {
        isOpen: Boolean,
        data: Object,
        users: Object,
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        order() {
            this.$emit('order', this.data.price);
        },
    },
};
</script>
