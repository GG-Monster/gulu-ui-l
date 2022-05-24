<template>
<div>Button 事例</div>
<h1>示例1</h1>
<div>
<Button @click="onClick" 
        @focus="onClick"
        @mousemove="onClick"
        >你好</Button>
<Button @click="onClick" 
        @focus="onClick"
        @mousemove="onClick"
        >你好</Button>
<Button @click="onClick" 
        @focus="onClick"
        @mousemove="onClick"
        >你好</Button>
<Button @click="onClick" 
        @focus="onClick"
        @mousemove="onClick"
        >你好</Button>

</div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default{
    components:{Button,},
    setup(){
const onClick=()=>{
    console.log('hi')
}
return {onClick,}
    }
}
</script>