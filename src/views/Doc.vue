<template>
<div class="layout">
    <TopNav class="nav" toggleMenuButtonVisible/>
    <div class="content">
        <aside v-if="menuVisible">
            <h2>文档</h2>
            <ol>
              <li>
                <router-link to="/doc/intro">介绍</router-link>
              </li>
              <li>
                <router-link to="/doc/install">安装</router-link>
              </li>
              <li>
                <router-link to="/doc/get-Started">开始使用</router-link>
              </li>
            </ol>
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    //display: none;
    @media (max-width: 500px) {
      padding-left: 0;
      //display: inline-block;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside{
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, 
  rgba(253,187,45,1) 100%);;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 10;

    > h2{
        margin-bottom: 4px;
        padding: 0 16px;
    }
    > ol{
        >li{
            a{ 
              display: block;
             padding: 4px 16px;
            }
            .router-link-active{ 
              background: white;
            }
        }
    }
main{
    overflow: auto;
}

}

</style>