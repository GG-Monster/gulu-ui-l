<template>
<router-view></router-view>
</template>
<script lang="ts">
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import { ref,provide } from 'vue'

export default {
  name: 'App',
  setup(){
    const menuVisible=ref(true)
    provide('menuVisible',menuVisible)
    return {menuVisible}
  },
  components: {
    Home,
    Doc,

}
}
</script>
 