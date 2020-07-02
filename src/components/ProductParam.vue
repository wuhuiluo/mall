<template>
  <div class="nav-bar" :class="{'isFixed' : isFixed}">
    <div class="container w">
      <div class="pro-title">{{ title }}</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isFixed: false
    };
  },

  props: {
    title: {
      type: String
    }
  },

  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },

  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 162 ? true : false;
    }
  },

  destroyed() {
      window.removeEventListener("scroll", this.initHeight,false);
  }
};
</script>


<style lang="scss">
@import "../assets/scss/mixin.scss";
.nav-bar {
  height: 63px;
  line-height: 63px;
  border-top: 1px solid #e5e5e5;
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
  &.isFixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
    .pro-param {
      font-size: 14px;
      color: #666;
      a {
        color: #333;
      }
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>
