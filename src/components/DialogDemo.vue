<template>
<h1>
    Dialog示例
</h1>
<Demo :component='Dialog1Demo'/>
<Demo :component='Dialog2Demo'/>
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