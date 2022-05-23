<template>

    <div class="topNav">
      <div class="logo" @click="toggleMenu">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
        </ul>

    </div>

</template>
<script lang="ts">
import { inject,Ref} from 'vue'
export default{
    setup(){
        const menuVisible=inject<Ref<boolean>>('menuVisible')
        console.log('topnav 获取的menuVisible为'+menuVisible.value)
        const toggleMenu=()=>{
            menuVisible.value=!menuVisible.value;
        }
        return {menuVisible,toggleMenu}
  }

}
</script>
<style lang="scss" scoped>
.topNav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>