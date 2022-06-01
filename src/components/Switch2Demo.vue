<demo>支持disabled</demo>
<template>
    <Switch v-model:value="bool" disabled/>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default{ 
    setup(){
        const bool=ref(true)
        return {bool}
    },
    components: { Switch }
}
</script>