<template>

<div class="topNav-Banner">
    <TopNav />
    <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的ui框架</h2>
        <p class="actions">
            <a href="https://github.com/GG-Monster">github</a>
            <router-link to="/doc/intro">开始</router-link>
        </p>
  </div>
  </div>
    <div class="features">
      <ul>
        <li>
          <svg>
    <use xlink:href="#icon-vue"></use>
    </svg>
    <h3>基于 Vue 3</h3>
    <p>使用了 Vue 3 Composition API</p>
    </li>
        <li>
          <svg>
    <use xlink:href="#icon-ts"></use>
    </svg>
    <h3>基于 TypeScript </h3>
    <p>源代码采用 TypeScript 书写（非严格检查）</p>
    </li>
        <li>
          <svg>
    <use xlink:href="#icon-scss"></use>
    </svg>
    <h3>基于Scss</h3>
    <p>Scss:强大的css预处理语言,其完全兼容css3,并且继承了Sass的强大功能.</p>
    </li>
          
    
    

      </ul>
  </div>
  <div class="footer"></div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default{
    components:{TopNav,}
}
</script>
<style lang="scss" scoped>
.topNav-Banner{ 
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, 
  rgba(253,187,45,1) 100%);
  // height: 600px;
  border-bottom-left-radius: 400px 100px;
  border-bottom-right-radius: 400px 100px;

}
.banner {
height: 400px;
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: lightgreen;
  > .actions{
    padding: 60px;
    padding-bottom: 0;
    a {
      margin:0 18px;
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
.features{ 
  // width: 400px;
  // height:600px;
  // border: 1px solid red;
  // position: absolute;
  // left: 50%;
  // border: 1px solid red;
  margin: 40px auto;
  // padding: 0 16px;
  // margin-left: 10px;
  // width: 400px;
  @media (min-width: 800px) {
    width: 800px;
      >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
     >ul {
      >li {
        width: 33.3333%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      // width: 400px;
      margin: 16px 0;
      // margin-left: 20px;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
.footer{ 

  height: 500px;
  background: linear-gradient(0deg, rgba(253,187,45,1) 0%,
  rgba(34,193,195,1) 100%
  );
  border-top-left-radius: 400px 100px;
  border-top-right-radius: 400px 100px;
}
</style>