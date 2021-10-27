<template>
    <div class="user-basket">
        <a href="#">
            <img
                src="@/assets/images/user-default.png"
                alt="Фото пользователя"
                width="44"
                height="44"
                class="user-photo"
            />
            <span class="user-info">
                <span class="user-name">Мортиджан</span>
                <span class="user-balance">{{score}} баллов</span>
            </span>
        </a>
    </div>
</template>

<script>

export default {
    name: 'userBasket',

    props: {
        isOpen: Boolean,
        data: Object,
    },
    data() {
        return {
            score: 5000,
        };
    },
    watch: {
        score(newValue, oldValue) {
            console.log('newValue ', newValue);
            console.log('oldValue ', oldValue);
            this.showCost();
        },
    },
    methods: {
        setScore(price) {
            this.score -= price;
            console.log(price);
            console.log(this.score);
        },

        showCost() {
            alert(this.score);
        },

    },
};
</script>
