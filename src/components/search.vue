<template>
    <div class="search">
        <button type="submit" class="search-button">
            <img src="@/assets/images/search-icon.png" alt="Иконка поиска" />
        </button>
        <input
            type="text"
            class="search search__search-term"
            placeholder="Поиск"
            :value="searchValue"
            @input="$emit('setSearch', $event)"
        />
    </div>
</template>

<script>
export default {
    name: 'search',
    props: {
        searchValue: String,
    },
    data() {
        return {
            search: '',
        };
    },
};
</script>
