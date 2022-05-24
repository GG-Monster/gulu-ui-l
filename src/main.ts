import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import './index.scss'
import "./lib/gulu.scss";
const app = createApp(App);
app.use(router);
app.mount('#app')
