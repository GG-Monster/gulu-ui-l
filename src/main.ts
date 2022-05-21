import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Monster from './components/Monster.vue'
import Frank from './components/Frank.vue'
const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Monster },
        { path: '/xxx', component: Frank },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app')
