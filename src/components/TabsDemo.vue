<template>
<h1>Tabs示例</h1>
<Demo :component="Tab1Demo" />
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Tab1Demo from './Tab1Demo.vue'


export default{
    components:{Demo },
    setup() {
      return { 
        Tab1Demo,
      }
  }
}
</script>