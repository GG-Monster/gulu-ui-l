<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode" class="new-button-class">
      <svg class="icon-code">
    <use xlink:href="#icon-code"></use>
</svg></Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" 
      v-html="html" />
    </div>
  </div>  
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
import {
  computed,
  ref
} from 'vue';
const Prism = (window as any).Prism

export default{ 
    setup(props){ 
        const html=computed(()=>{return Prism.highlight(props.component.__sourceCode, 
        Prism.languages.html, 'html')})
        const codeVisible = ref(false)
        const toggleCode=()=>codeVisible.value=!codeVisible.value
        return { 
            Prism,
            html,
            codeVisible,
            toggleCode
        }
    },
    components:{Button,},
    props:{
        component:Object,
    }

}

</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  border-radius: 20px;
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
    .new-button-class{ 
      padding: 0;
      width: 30px;
      height: 26px;
      border: none;
    }
    .icon-code{ 

      height: 100%;
      color: red;
    }
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