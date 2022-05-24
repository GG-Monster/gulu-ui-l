<template>
<div>Button 事例</div>
<h1>示例1</h1>
<div>
<Button >你好</Button>
<Button theme="button"
        >你好</Button>
<Button theme="link"
        >你好</Button>
<Button theme="text"
        >你好</Button>
</div>
<h1>示例2</h1>
<div>
    <Button size="small">小小小</Button>
    <Button>正常</Button>
    <Button size="big">大大大</Button>
    

</div>
<div>

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