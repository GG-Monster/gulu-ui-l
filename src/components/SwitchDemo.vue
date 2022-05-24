<template>
    <div>
<Switch v-model:value='y'/>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Switch from "../lib/Switch.vue";
export default{
    setup(){
        const y=ref(true)
        return {y}
    },
    components: { Switch }
}

</script>