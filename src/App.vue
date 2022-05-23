<template>
<router-view></router-view>
</template>
<script lang="ts">
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

export default {
  name: 'App',
  components: {
    Home,
    Doc,

}
}
</script>
