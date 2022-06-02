<demo>
常规使用
</demo>
<template>
<Button @click="toggle">打开对话框</Button>
<Dialog v-model:visible="visible" 
        :closeOnClickOverlay="true"
        :ok="f1" :cancel="f2"
        
        >
        <template v-slot:title>
            <strong>这里是标题</strong>
        </template>
        <template v-slot:content>
            <strong>这里是h1</strong>
            <div>h2</div>
        </template>
        </Dialog>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref} from 'vue'
import {openDialog} from '../lib/openDialog'
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