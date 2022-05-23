<template>
<div>
    <TopNav />
    <div class="content">
        <aside v-if="menuVisible">
            <h2>组建列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/Switch">switch组件</router-link></li>
                <li>
                    <router-link to="/doc/Button">button组件</router-link></li>
                <li>
                    <router-link to="/doc/Dialog">dialog组件</router-link></li>
                <li>
                    <router-link to="/doc/Tabs">tabs组件</router-link></li>
            </ol>
        </aside>
        <main>主内容</main>
    </div>
</div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
import TopNav from '../components/TopNav.vue'

export default{
    components:{TopNav,},
    setup(){
        const menuVisible=inject<Ref<boolean>>('menuVisible')
        console.log('doc 获取的menuVisible为'+menuVisible.value)
        return {menuVisible}
    }
}
</script>
<style lang="scss" scoped>
aside{
    background: lightblue;
    width: 150px;
    padding: 16px;
    padding-top: 70px;
    position: fixed;
    top: 0;
    left: 0;
    > h2{
        margin-bottom: 4px;
    }
    > ol{
        >li{
            padding: 4px 0;
        }
    }

}

</style>