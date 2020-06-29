<template>
  <div class="index">
    <div class="container w">
      <div class="h-swiper">
        <ul class="nav-menu">
          <li
            @mouseleave="tabPaneVisible = false"
            @mouseover="selectItem(index)"
            class="menu-item"
            v-for="(item,index) in allCateList"
            :key="index"
          >
            <a href="javascript:;">
              {{item.cateName}}
              <i class="el-icon-arrow-right"></i>
            </a>
          </li>
        </ul>
        <div
          @mouseenter="tabPaneVisible = true"
          @mouseleave="tabPaneVisible = false"
          v-show="tabPaneVisible"
          class="table-pane"
        >
          <div class="tab-pane-items" v-for="(item,index) in curCateList" :key="index">
            <a href>
              <img :src="item.img" alt />
              {{item.name}}
            </a>
          </div>
        </div>
        <!-- 轮播图 -->
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in bannerList" :key="index">
            <a href="javascritp:;">
              <img :src="item.img" alt />
            </a>
          </swiper-slide>
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 前进后退按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a href="javascript:;" v-for="(item,index) in adsList" :key="index">
          <img :src="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="javascript:;">
          <img src="/imgs/banner-1.png" />
        </a>
      </div>
      <div class="h-container">
        <div v-for="(item,index) in productList" :key="index" class="content">
          <!-- 标题 -->
          <h2>{{item.cateType}}</h2>
          <!-- 内容区域 -->
          <div class="p-wrapper">
            <!-- 左侧 -->
            <div class="h-banner">
              <div v-for="(items,index) in item.advert" :key="index">
                <a href="javascript:;">
                  <img :src="items">
                </a>
              </div>
            </div>
            <div class="list-box">

            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar />
  </div>
</template>


<script>
import {
  getCateList,
  getBanners,
  getHomeProductList
} from "../network/request.js";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ServiceBar from "../components/ServiceBar";
export default {
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2000, // 自动播放
          stopOnLastSlide: false,
          disableOnInteraction: false // 触摸滑动后是否继续轮播
        },
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      allCateList: [],
      curCateList: [],
      bannerList: [],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      productList: [],
      tabPaneVisible: false
    };
  },

  created() {
    this._getCateList();
    this._getBanners();
    this._getHomeProductList();
  },

  methods: {
    async _getCateList() {
      const data = await getCateList();
      data.forEach(cate => {
        cate.children.forEach(product => {
          product.id = cate.cateId;
        });
      });
      this.allCateList = data;
      this.curCateList = data[0].children;
      // console.log(this.curCateList);
    },

    async _getBanners() {
      const data = await getBanners();
      this.bannerList = data;
    },

    async _getHomeProductList() {
      const data = await getHomeProductList()
      this.productList = data
      console.log(this.productList)
    },

    selectItem(index) {
      this.curCateList = this.allCateList[index].children;
      this.tabPaneVisible = true;
    }
  },

  components: {
    ServiceBar,
    Swiper,
    SwiperSlide
  }
};
</script>


<style lang="scss">
@import "../assets/scss/mixin.scss";
.index {
  .container {
    position: relative;
    .banner {
      margin-bottom: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .ads-box {
      margin-top: 14px;
      margin-bottom: 31px;
      @include flex();
      a {
        width: 296px;
        height: 167px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .nav-menu {
      box-sizing: border-box;
      position: absolute;
      width: 234px;
      height: 460px;
      z-index: 99;
      padding: 20px 0;
      background-color: rgba(105, 101, 101, 0.6);
      .menu-item {
        height: 42px;
        line-height: 42px;
        &:hover {
          background-color: #ff6700;
        }
        a {
          font-size: 14px;
          color: #fff;
          padding-left: 30px;
          position: relative;
          display: block;
          i {
            position: absolute;
            right: 23px;
            top: 12.5px;
          }
        }
      }
    }
    .table-pane {
      display: flex;
      flex-wrap: wrap;
      border: 1px solid #e0e0e0;
      border-left: 0;
      height: 458px;
      position: absolute;
      z-index: 999;
      left: 234px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
      background-color: #fff;
      writing-mode: vertical-lr;
      .tab-pane-items {
        writing-mode: horizontal-tb;
        width: 248px;
        height: 76px;
        a {
          display: flex;
          align-items: center;
          height: 40px;
          font-size: 14px;
          padding: 18px 20px;
          color: #333;
          transition: color 0.2s;
          &:hover {
            color: #ff6700;
          }
          img {
            margin-right: 15px;
          }
        }
      }
    }
    .swiper-container {
      height: 460px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev {
        left: 254px;
      }
    }
  }
}
</style>
