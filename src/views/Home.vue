<template>
  <div>
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>轱辘UI</h1>
  </div>
  </div>
</template>
<style lang="scss" scoped>
  .topnar{border: 1px solid red;}
  
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>