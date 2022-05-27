<template>
  <div class="topNav-Banner">
    <TopNav />
    <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的ui框架</h2>
        <p class="actions">
            <a href="https://github.com/">github</a>
            <router-link to="/doc/default">开始</router-link>
        </p>
  </div>
  
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default{
    components:{TopNav,}
}
</script>
<style lang="scss" scoped>
.topNav-Banner{ 
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: yellow;
      display: inline-block;
      border-radius: 4px;
      padding: 10px 16px;
      height:40px;
      line-height: 20px;
      &:hover{ 
        text-decoration: none;
        background-color: greenyellow;
      }
    }
  }
}
</style>