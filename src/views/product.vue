<template>
  <div class="product">
    <product-param :title="product.name">
      <template v-slot:buy>
        <el-button size="mini">立即购买</el-button>
      </template>
    </product-param>
    <div class="content w">
      <div class="item-bg">
        <h2>小米8</h2>
        <h3>小米8 战斗天使</h3>
        <div class="detail">
          <a href>全球首款双频 GP</a>
          <a href id>骁龙845</a>
          <a href id>AI 变焦双摄</a>
          <a href id>红外人脸识别</a>
        </div>
        <div class="price">
          <span>
            ￥
            <em>2599</em>
          </span>
        </div>
      </div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="/imgs/product/gallery-2.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-3.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-4.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-5.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-6.jpg" />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <div class="video-bg" @click="showSlide = true"></div>
        <div class="video-box">
          <div class="overlay" v-show="showSlide"></div>
          <div class="video" :class="{'slide': showSlide}">
            <i class="el-icon-close" @click="control"></i>
            <video
              id="video"
              src="https://vdept.bdstatic.com/6c6165665943353548677a64546b3456/31694a4b6e455556/323dbc111f2935f577c349ebf21975587308ca4fb06fef4a95fbc2e110155bdf7563cb9cf135ca6fe358291595673fef.mp4?auth_key=1593849301-0-0-de33007c0ad750f7be1f2726d3485389"
              muted
              autoplay
              controls="controls"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ProductParam from "../components/ProductParam";
export default {
  data() {
    return {
      showSlide: false,
      product: {
        name: "小米8"
      },
      swiperOption: {
        autoplay: {
          delay: 2000, // 自动播放
          stopOnLastSlide: false,
          disableOnInteraction: false // 触摸滑动后是否继续轮播
        },
        slidesPerView: 3,
        spaceBetween: 25,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  
  methods: {
     control() {
        this.showSlide = false
        let myVideo = document.getElementById('video');
        myVideo.pause()
     }
  },

  components: {
    ProductParam,
    Swiper,
    SwiperSlide
  }
};
</script>


<style lang="scss">
@import "../assets/scss/mixin.scss";

.swiper-container {
  height: 228px;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-button {
  background: #ff6700;
  border-color: #3b3430;
  color: #fff;
  margin-left: 10px;
}
.product {
  .content {
    .item-bg {
      height: 718px;
      background: url("/imgs/product/product-bg-1.png") no-repeat center;
      text-align: center;
      h2 {
        font-size: 80px;
        padding-top: 80px;
      }
      h3 {
        font-size: 24px;
        letter-spacing: 10px;
      }
      .detail {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: #333333;
          margin: 0 15px;
        }
      }
      .price {
        font-size: 30px;
        color: #333333;
        em {
          font-style: normal;
          font-size: 38px;
        }
      }
    }
    .item-swiper {
      margin: 36px auto 52px;
      img {
        width: 100%;
      }
      .desc {
        font-size: 18px;
        color: #333333;
        text-align: center;
        margin-top: 15px;
      }
    }
    .item-video {
      height: 540px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #fff;
      .video-bg {
        background: url("/imgs/product/gallery-1.png") no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }
      .video-box {
        .overlay {
          @include position();
          background-color: #333;
          opacity: 0.4;
          z-index: 10;
        }
        .video {
          width: 1000px;
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 999;
          height: 536px;
          opacity: 0;
          transition: all .6s;
          &.slide {
            top: 50%;
            opacity: 1;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover; // 覆盖原生组件样式
            outline: none;
          }
          i {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 45px;
            cursor: pointer;
            border-radius: 50%;
            z-index: 12;
            &:hover {
              background-color: red;
            }
          }
        }
      }
    }
  }
}
</style>
