import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@fortawesome/fontawesome-free/js/all";
import "./assets/app.css";
import vClickOutside from "click-outside-vue3";
// const app = createApp(App);
// app.use(store);
// app.use(router);
// app.mount("#app");
createApp(App).use(store).use(router).use(vClickOutside).mount("#app");
