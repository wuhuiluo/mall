<template>
  <div class="order-header w">
    <div class="header-logo">
      <img src="/imgs/logo-mi.png" alt />
    </div>
    <div class="title">
      <h2>
        {{ title }}
        <slot name="tip"></slot>
      </h2>
    </div>
    <div class="username">
      <a href="javascript:;">{{ username }}</a>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  props: {
    title: String
  },

  computed: {
    ...mapState(["username"])
  }
};
</script>


<style lang="scss">
.order-header {
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-logo {
    img {
      width: 55px;
      height: 55px;
    }
  }
  .title {
    margin-left: -400px;
    height: 55px;
    line-height: 55px;
    span {
      font-size: 14px;
      font-weight: 400;
      color: #999;
      margin-left: 20px;
    }
    h2 {
      font-size: 28px;
      color: #333;
    }
  }
  .username {
    a {
      font-size: 20px;
      color: #666 !important;
    }
  }
}
</style>
