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

  components: {
    ProductParam,
    Swiper,
    SwiperSlide
  }
};
</script>


<style lang="scss">
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
  }
}
</style>
