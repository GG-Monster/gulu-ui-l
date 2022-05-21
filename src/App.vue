<template>
导航栏<router-link to="/">to Monster</router-link>
<router-link to="/xxx">to Frank</router-link>
<hr>
<router-view></router-view>
</template>

<script>
import Monster from './components/Monster.vue'
import Frank from './components/Frank.vue'

export default {
  name: 'App',
  components: {
    Monster,Frank
  }
}
</script>
