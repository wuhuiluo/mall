<template>
  <div class="login">
    <div class="header">
      <a href="/">
        <img src="/imgs/login-logo.png" />
      </a>
    </div>
    <div class="container">
      <div class="login-box">
        <div class="title">登陆页面</div>
        <input placeholder="账号" type="text" v-model="account" />
        <input placeholder="密码" type="password" v-model="password" />
        <div class="denglu">
          <el-button round type="primary">登陆</el-button>
        </div>
      </div>
    </div>
    <div class="footer">
        <h1>吴辉洛的小米商城</h1>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  }
};
</script>


<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  .footer {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .header {
    height: 116px;
    a {
      width: 230px;
      height: 116px;
      display: block;
      margin-left: 100px;
      margin-top: 20px;
      img {
        width: 230px;
        height: 116px;
      }
    }
  }
  .container {
    height: 576px;
    background: url("/imgs/login-bg.jpg") no-repeat 50%;
  }
  .login-box {
    padding-top: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 400px;
    position: absolute;
    right: 50px;
    bottom: 100px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    font-family: sans-serif;
    .title {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #444;
      font-weight: 700;
    }
    input {
      border: 0;
      background: none;
      display: inline-block;
      margin: 20px auto;
      text-align: center;
      border: 2px solid #3498db;
      padding: 14px 10px;
      width: 200px;
      outline: none;
      border-radius: 24px;
      transition: 0.25s;
    }
    input:focus {
      width: 280px;
    }
  }
}
</style>