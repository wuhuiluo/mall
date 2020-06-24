<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登陆</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header"></div>
  </div>
</template>


<script>
export default {
  name: "nav-header"
};
</script>


<style lang="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    color: #b0b0b0;
    background-color: #333333;
    
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1226px;
      margin: 0 auto;

      a {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
      }

      .my-cart {
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color: #fff;
      }
    }
  }
}
</style>
