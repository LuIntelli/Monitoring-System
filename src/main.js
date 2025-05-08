import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import router from "@/router";
import App from "./App.vue";
import naive from "naive-ui";

const application = createApp(App);
application.use(naive);
application.use(router);
application.mount("#app");
