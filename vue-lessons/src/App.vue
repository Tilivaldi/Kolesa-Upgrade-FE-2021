<template>
  <div id="app">
    <div class="main">
      <header class="header">
        <div class="logo">
          <a href="#">
            <img src="./assets/images/logo.svg" alt="Логотип колеса" width="215" height="35" />
          </a>
        </div>
        <div class="header-search">
          <div class="search">
            <button type="submit" class="search-button">
              <img src="./assets/images/search-icon.png" alt="Иконка поиска" />
            </button>
            <input type="text" class="search search__search-term" placeholder="Поиск" />
          </div>
        </div>
        <div class="user-basket">
          <a href="#">
            <img src="./assets/images/user-default.png" alt="Фото пользователя" width="44" height="44" class="user-photo" />
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
              <a href="#">
                <li>Оргсхема</li>
              </a>
              <a href="#">
                <li>Kolesa Team</li>
              </a>
              <a href="#">
                <li class="sidebar__menu sidebar__menu--active">Kolesa Shop</li>
              </a>
              <a href="#">
                <li>Картина компании</li>
              </a>
              <a href="#">
                <li>Новости</li>
              </a>
              <a href="#">
                <li>Education</li>
              </a>
              <a href="#">
                <li>Guidelines</li>
              </a>
              <a href="#">
                <li>Библиотека</li>
              </a>
              <a href="#">
                <li>FAQ</li>
              </a>
            </ul>
          </nav>
        </aside>
        <div class="workspace">
          <div class="banner">
            <a href="#">
              <img src="./assets/images/banner.png" alt="Продающий баннер" width="1038" height="336" class="banner-image" />
            </a>
          </div>
          <div class="information-buttons">
            <button class="button button__info-button button__merch-plus" type="submit">
              Получить баллы
            </button>
            <button class="button button__info-button button__merch-question" type="submit">
              Как получить баллы
            </button>
            <button class="button button__info-button button__merch-gift" type="submit">
              Подарить баллы
            </button>
          </div>

          <div class="merch-type">
            <div class="radio-buttons">
              <div class="form-radio-btn merch-options">
                <input data-key="all" id="merch-type-1" type="radio" name="merch-type" value="All" checked class="merch-type-options js__category-input" />
                <label for="merch-type-1" class="merch-type-options"> Все товары</label>
              </div>

              <div class="form-radio-btn merch-options">
                <input data-key="clothes" id="merch-type-2" type="radio" name="merch-type" value="Одежда" class="merch-type-options js__category-input" />
                <label for="merch-type-2" class="merch-type-options">Одежда</label>
              </div>

              <div class="form-radio-btn merch-options">
                <input data-key="accessories" id="merch-type-3" type="radio" name="merch-type" value="Акссесуары" class="merch-type-options js__category-input" />
                <label for="merch-type-3" class="merch-type-options"> Акссесуары</label>
              </div>
            </div>
          </div>
          <div class="card-list card-list--margin" @v-for="(item, id) in accessories" :key="index">
              {{accessories}}
              {{index}}
              {{item.title}}
          </div>
        </div>
      </section>
    </div>
    <footer>
      <div class="left-widget">
        <span class="left-widget__copyright">© Kolesa Group</span>
        <ul class="left-widget__social-icons">
          <li>
            <a href="#"><img src="./assets/images/instagram.png" alt="Иконка instagram" width="18" height="18"/></a>
          </li>
          <li>
            <a href="#"> <img src="./assets/images/youtube.png" alt="Иконка youtube" width="18" height="13"/></a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/images/vk.png" alt="Иконка VK" width="18" height="11" />
            </a>
          </li>
        </ul>
      </div>

      <div class="right-widget">
        <span class="right-widget__footer-text">
          <p>Есть идеи что улучшить?</p>
          <p>Не знаешь, с кем решить проблему?</p>
        </span>

        <button class="button button--footer" type="submit">Написать</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      accessories: [
        {
          img: './src/assets/images/test-image5.jpg',
          title: 'Рюкзак "Специально для твоего ноута"',
          price: 500,
          isNew: true,
          hint: 'Цвет: черный/серый',
          details: 'Брендированный рюкзак от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
          helpTxt: 'Написать дяде Рику для уточнения.',
        },
        {
          img: './src/assets/images/test-image1.jpg',
          title: 'Футболка "Претендуешь? Соответствуй"',
          price: 239,
          isNew: true,
          hint: 'Размеры S',
          details: 'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
          helpTxt: 'Написать дяде Рику для уточнения.',
        },
      ],
    };
  },
};
</script>
