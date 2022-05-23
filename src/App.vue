<template>
<router-view></router-view>
</template>

<script>
import Monster from './components/Home.vue'
import Frank from './components/Frank.vue'

export default {
  name: 'App',
  components: {
    Monster,Frank
  }
}
</script>
