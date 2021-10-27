<template>
     <footer>
            <div class="left-widget">
                <span class="left-widget__copyright">© Kolesa Group</span>
                <ul class="left-widget__social-icons">
                    <li>
                        <a href="#"
                            ><img
                                src="@/assets/images/instagram.png"
                                alt="Иконка instagram"
                                width="18"
                                height="18"
                        /></a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="@/assets/images/youtube.png"
                                alt="Иконка youtube"
                                width="18"
                                height="13"
                        /></a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="@/assets/images/vk.png"
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
</template>

<script>
export default {
    name: 'footerComponent',

};
</script>
