<template>
<div>
  <h1>Switch 组件示例 </h1>
  <Demo :component="Switch1Demo"/>
  <Demo :component="Switch2Demo"/>
  <span>下一节：<router-link to="/doc/button" class="button-link">button组件</router-link></span>
</div>
</template>
<script lang="ts">
import Switch1Demo from '../components/Switch1Demo.vue'
import Switch2Demo from '../components/Switch2Demo.vue'
import Demo from './Demo.vue';
export default{
    setup(){
        return {Switch1Demo,Switch2Demo}
    },
    components: {Demo }
}

</script>
<style lang="scss" scoped>
.button-link{ 
  color: #0969da;
}
</style>