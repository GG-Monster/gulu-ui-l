<template>
<div>
    dialog
</div>
<h1>示例1</h1>
<Button @click="toggle">toggle</Button>
<Dialog v-model:visible="visible" 
        :closeOnClickOverlay="true"
        :ok="f1" :cancel="f2"
        
        >
        <div>h1</div>
        <div>h2</div>
        </Dialog>
<div></div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default{
    components:{ 
        Dialog,Button,
    },
    setup(){ 
        const visible=ref(false)
        const toggle=()=>{
            visible.value=!visible.value
            
        }
        const f1=()=>{ 
            return false
            
        }
        const f2=()=>{ 

        }
         return {visible,toggle,f1,f2}
    }
}
</script>