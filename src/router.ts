import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'


import { h } from 'vue'
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: "", redirect: '/doc/intro' },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'get-started', component: h(Markdown, { path: '../markdown/get-started.md', key: '1' }) },
                { path: 'intro', component: h(Markdown, { path: '../markdown/intro.md', key: '2' }) },
                { path: 'install', component: h(Markdown, { path: '../markdown/install.md', key: '3' }) }


            ]
        },
    ]
});
