<template>
<h1>
    Dialog示例
</h1>
<Demo :component='Dialog1Demo'/>
<Demo :component='Dialog2Demo'/>
<span>下一节：<router-link to="/doc/tabs" class="button-link">tabs组件</router-link></span>
</template>
<script lang="ts">
import Dialog1Demo from './Dialog1Demo.vue'
import Dialog2Demo from './Dialog2Demo.vue'
import Demo from '../components/Demo.vue'
export default{
    components:{
    Demo
},
    setup(){ 
         return {Dialog1Demo,Dialog2Demo
    }
}
}
</script>
<style lang="scss" scoped>
.button-link{ 
  color: #0969da;
}</style>