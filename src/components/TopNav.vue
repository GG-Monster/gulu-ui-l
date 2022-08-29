<template>

    <div class="topNav">
      <router-link to="/" class="logo" >
        <span title="返回首页">
          <svg class="icon-monster">
    <use xlink:href="#icon-monster"></use>
</svg>
        </span>
        
      </router-link>
      
      <ul class="menu">
        <li>
      <router-link to="/doc/intro">文档</router-link>
        </li>

        </ul>
    <span class="toggleAside" @click="toggleMenu"
    v-if="toggleMenuButtonVisible"
    >
    <svg class="icon-liebiao">
    <use xlink:href="#icon-liebiao"></use>
</svg>
    </span>
    </div>

</template>
<script lang="ts">
import { inject,Ref} from 'vue'
export default{
  props:{ 
    toggleMenuButtonVisible:{ 
      type:Boolean,
      default:false
    }
  },
    setup(){
        const menuVisible=inject<Ref<boolean>>('menuVisible')
        
        const toggleMenu=()=>{
            menuVisible.value=!menuVisible.value;
        }
        return {menuVisible,toggleMenu}
  }

}
</script>
<style lang="scss" scoped>
.topNav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;

    
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 0.5em;
      display: inline-block;
      border-radius: 4px;
      padding: 5px;
      &:hover{ 
      background-color: #76bc93;
    }
    }
    
  }
  > .toggleMenu{

  }
  > .toggleAside {
    //display: inline-block;
    width: 24px;
    height: 24px;
    // background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width:500px) {
      > .menu{
          display: none;
      }
      > .logo{margin: 0 auto}
      > .toggleAside{
          display: inline-block;
      }
  }
}

.icon-monster {
    width: 2.6em;
    height: 2.6em;
    fill: currentColor;
    overflow: hidden;
}
.icon-liebiao {
   margin-top: -5px;
    width: 1.6em;
    height: 1.6em;
    fill: currentColor;
    overflow: hidden;
}
</style>