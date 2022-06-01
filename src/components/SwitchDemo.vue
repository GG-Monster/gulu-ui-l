<template>
<div>
  <h1>Switch 组件示例 </h1>
  <Demo :component="Switch1Demo"/>
  <Demo :component="Switch2Demo"/>
    

</div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Switch from "../lib/Switch.vue";
import Button from '../lib/Button.vue'
import Switch1Demo from '../components/Switch1Demo.vue'
import Switch2Demo from '../components/Switch2Demo.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import Demo from './Demo.vue';
const Prism=(window as any).Prism
export default{
    setup(){
        const bool=ref(false)
        return {bool,Switch1Demo,Switch2Demo,Prism}
    },
    components: { Switch, Button, Switch1Demo, Switch2Demo, Demo }
}

</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>