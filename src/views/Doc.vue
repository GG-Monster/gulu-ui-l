<template>
<div>
    <TopNav />
    <div class="content">
        <aside v-if="menuVisible">
            <h2>组建列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">switch组件</router-link></li>
                <li>
                    <router-link to="/doc/button">button组件</router-link></li>
                <li>
                    <router-link to="/doc/dialog">dialog组件</router-link></li>
                <li>
                    <router-link to="/doc/tabs">tabs组件</router-link></li>
            </ol>
        </aside>
        <main>
            <router-view></router-view>
            
            </main>
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
        
        return {menuVisible}
    }
}
</script>
<style lang="scss" scoped>
aside{
    background: lightblue;
    width: 150px;
    padding: 16px;
    
    > h2{
        margin-bottom: 4px;
    }
    > ol{
        >li{
            padding: 4px 0;
        }
    }
    @media (max-width: 500px) {
        padding-top: 70px;
        position: fixed;
        top: 0;
        left: 0;
    }

}

</style>