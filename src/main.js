import { createApp } from 'vue'
import router from "./routes";
import store from "./store";

import App from './App.vue'
import './style.css'

const app = createApp(App);
app.use(router);

// ElementPlus完整引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)

app.use(store);
app.mount("#app");