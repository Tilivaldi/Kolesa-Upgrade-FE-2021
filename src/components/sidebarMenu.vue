<template>
    <aside class="sidebar">
        <nav>
            <ul class="sidebar__menu">
                <a href="#" v-for="(item, id) in menu" :key="id">
                    <li >{{ item.name }}</li>
                </a>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'sidebarMenu',
    data() {
        return {
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
        };
    },
};

</script>
