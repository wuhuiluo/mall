<template>
  <div class="header">
    <div class="nav-top">
      <div class="topbar w">
        <!-- 左侧导航 -->
        <ul class="nav-left">
          <li v-for="(item,index) in navLeft" :key="index">
            <a href="javascript:;">
              {{item}}
              <span class="line">|</span>
            </a>
          </li>
        </ul>
        <!-- 右侧 -->

        <ul class="nav-right">
          <li>
            <a href="javascript:;">
              登陆
              <span class="line">|</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              登陆
              <span class="line">|</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              登陆
              <span class="line">|</span>
            </a>
          </li>
          <li class="shop-cart">
            <a href="javascript:;">
              <i class="el-icon-shopping-cart-full"></i>
              <span>购物车</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-header">
      <div class="container w">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <ul class="nav">
            <li class="show-goods" v-for="(item,index) in serviceList" :key="index">
              <a @mouseover="selectProduct" href="#">{{item}}</a>
            </li>
            <li class="other-goods">
              <a href="javascript:;">服务</a>
            </li>
            <li class="other-goods">
              <a href="javascript:;">社区</a>
            </li>

            <!-- 隐藏的服务商品列表 -->
            <div class="goods-info">
              <ul class="product-list w">
                <li v-for="(item,index) in curProductList" :key="index" class="product">
                  <a href="#">
                    <div class="pro-img">
                      <img :src="item.img" />
                      <h4 class="pro-name">{{item.name}}</h4>
                      <h4 class="pro-price">{{item.price}}</h4>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <el-input v-model="input" class="input-with-select" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>


<script>
import { getNavItem } from "../network/request.js";
export default {
  data() {
    return {
      navLeft: [
        "小米商城",
        "MIUI",
        "loT",
        "云服务",
        "金融",
        "有品",
        "小爱开放平台",
        "企业团购",
        "资质证照",
        "协议规则",
        "下载app",
        "Select Location"
      ],
      serviceList: [
        "小米手机",
        "Redmi 红米",
        "电视",
        "笔记本",
        "家电",
        "路由器",
        "智能硬件"
      ],
      input: "",
      allProductList: [],
      curProductList: []
    };
  },

  created() {
    this._getProductList();
  },

  methods: {
    // 获取商品列表
    async _getProductList() {
      const data = await getNavItem();
      // console.log(data);
      data.forEach(item => {
        item.children.forEach(product => {
          product.img += "?thumb=1&w=160&h=110&f=webp&q=90";
        });
      });
      this.allProductList = data;
      this.curProductList = data[0].children;
    },

    selectProduct(e) {
      this.allProductList.forEach(item => {
        if(e.target.innerText.trim() === item.cateName) {
          this.curProductList = item.children
          return false
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/reset.scss";
@import "../assets/scss/mixin.scss";
.nav-top {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #333;
  .topbar {
    @include flex();
    a {
      font-size: 12px;
      color: #b0b0b0;
      display: block;
      &:hover {
        color: #fff;
      }
    }
    .nav-left,
    .nav-right {
      display: flex;
      .line {
        font-size: 12px;
        color: #424242;
        margin: 0 8px;
      }
    }
    .nav-right {
      .shop-cart {
        color: red;
        a {
          width: 120px;
          background-color: #434343;
          text-align: center;
          i {
            font-size: 14px;
            margin-right: 6px;
          }
        }
        &:hover a {
          background-color: #ff6700;
          color: #fff;
        }
      }
    }
  }
}

.nav-header {
  .container {
    height: 100px;
    @include flex();
    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: #f60;
      overflow: hidden;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &:before {
          content: " ";
          transition: margin 0.2s;
          @include bgImg(55px, 55px, "../../public/imgs/mi-logo.png");
        }
        &:after {
          content: " ";
          @include bgImg(55px, 55px, "../../public/imgs/mi-home.png");
        }
        &:hover:before {
          margin-left: -55px;
          transition: margin 0.2s;
        }
      }
    }
    .header-menu {
      .nav {
        display: flex;
        .show-goods,
        .other-goods {
          a {
            display: inline-block;
            line-height: 100px;
            font-size: 16px;
            color: #333;
            margin-right: 20px;
            &:hover {
              color: #ff6600;
            }
          }
        }
        .goods-info {
          height: 0;
          overflow: hidden;
          width: 100%;
          position: absolute;
          top: 140px;
          left: 0;
          box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          .product-list {
            display: flex;
            .product {
              width: 16.6%;
              height: 220px;
              position: relative;
              @include flex();
              &:after {
                content: " ";
                display: inline-block;
                position: absolute;
                right: 0;
                top: 28px;
                border-right: 1px solid;
                height: 100px;
              }
              &:last-child:after {
                display: none;
              }
              a {
                display: inline-block;
                width: 100%;
                height: 220px;
                .pro-img {
                  height: 139px;
                  width: 100%;
                  text-align: center;
                  margin-top: 28px;
                }
                h4 {
                  font-size: 12px;
                  line-height: 20px;
                }
                .pro-name {
                  margin-top: 15px;
                }
                .pro-price {
                  color: $colorA;
                }
              }
            }
          }
        }
        .show-goods:hover ~ .goods-info,
        .goods-info:hover {
          height: 220px;
          background-color: #fff;
          border-top: 1px solid rgb(224, 224, 224);
        }
      }
    }
    .el-input {
      width: 300px !important;
    }
    .el-button {
      width: 60px;
      height: 39px;
      font-size: 16px;
      border: 0 !important;
      background-color: #fff !important;
      &:hover {
        background-color: #ff6600 !important;
        color: #fff;
      }
    }
  }
}
</style>
