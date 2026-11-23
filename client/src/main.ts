import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import clientRouter from "./router/index.ts";

const app = createApp(App);
app.use(clientRouter);
app.mount("#app");
