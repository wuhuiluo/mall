<template>
  <div class="detail">
    <product-param :title="productInfo.name"></product-param>
    <div class="wrapper w">
      <div class="container">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in goodsInfo.imgs" :key="index">
              <img :src="item" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 前进后退按钮 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>

        <div class="content">
          <h2>{{productInfo.name}}</h2>
          <p class="item-info" v-html="productInfo.desc"></p>
          <div class="delivery">小米自营</div>
          <div class="item-price">
            {{ goodsInfo.price }}元
            <span class="del">{{ goodsInfo.price }}元</span>
          </div>
          <div class="line"></div>
          <div class="item-addr">
            <span class="icon-loc">
              <i class="el-icon-location-outline"></i>
            </span>
            <div class="addr">福建 福建省 晋江市 东石镇</div>
            <div class="stock">有现货</div>
          </div>

          <div class="item-attr-info">
            <div class="item-attr" v-for="(item,index) in productInfo.productAttrList" :key="index">
              <h2>选择{{item.attrName}}</h2>
              <ul class="product-attrs">
                <li
                  :class="{'checked': attrIds.includes(items.propId)}"
                  @click="selectAttr(item.attrName,items.propId)"
                  v-for="(items,index) in item.attrVals"
                  :key="index"
                  class="product-attr"
                >{{items.attrVal}}</li>
              </ul>
            </div>
          </div>

          <div class="item-total">
            <div class="phone-info">
              <span>{{goodsInfo.name}}</span>
              <span>{{goodsInfo.price}}元</span>
            </div>
            <div class="phone-total">总计: {{goodsInfo.price}} 元</div>
          </div>
          <div class="btn-group">
            <a href="javascript:;" @click="addCart" class="btn-huge">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container w">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="/imgs/detail/item-price.jpeg" />
        </div>
      </div>
    </div>
    <service-bar />
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ServiceBar from '../components/ServiceBar'
import ProductParam from "../components/ProductParam";
import { getProductDetail,addCart } from "../network/request";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000, // 自动播放
          stopOnLastSlide: false,
          disableOnInteraction: false // 触摸滑动后是否继续轮播
        },
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
      productInfo: {},
      goodsInfo: {},
      goodsAttrs: [],
      attrIds: []
    };
  },

  mounted() {
    this._getProductDetail();
  },

  methods: {
    async _getProductDetail() {
      const id = this.$route.params.id;
      const data = await getProductDetail(id);
      this.productInfo = data;
      this.goodsInfo = data.goodsList[0];
      console.log(this.productInfo);
      this.goodsAttrs = this.goodsInfo.goodsAttrs;
      this.goodsAttrs.forEach(e => {
        this.attrIds.push(e.attrId);
      });
    },
    

    selectAttr(attrName, propId) {
      // console.log(propId);
      // console.log(this.attrIds);
      // console.log(this.attrIds.includes(propId));
      if (this.illegalClick || this.attrIds.includes(propId)) {
        return false;
      }
      // 构建新商品属性
      let newGoodsAttrs = [];
      this.goodsAttrs.forEach(e => {
        let goodsAttr = {};
        goodsAttr.attrName = e.attrName;
        goodsAttr.attrId = e.attrId;
        if (e.attrName === attrName) {
          goodsAttr.attrId = propId;
        }
        newGoodsAttrs.push(goodsAttr);
      });
      // console.log(this.productInfo);
      // console.log(newGoodsAttrs.length)
      // console.log(newGoodsAttrs)
      let notMatch = true;
      this.productInfo.goodsList.forEach(goods => {
        // 遍历匹配商品属性
        let cnt = 0;
        goods.goodsAttrs.forEach(attr => {
          newGoodsAttrs.forEach(newAttr => {
            if (
              attr.attrName === newAttr.attrName &&
              attr.attrId === newAttr.attrId
            ) {
              cnt = cnt + 1;
            }
          });
        });

        // 匹配成功替换具体商品
        if (cnt === newGoodsAttrs.length) {
          this.goodsInfo = goods;
          this.goodsAttrs = this.goodsInfo.goodsAttrs;
          this.attrIds.splice(0, this.attrIds.length);
          this.goodsAttrs.forEach(e => {
            this.attrIds.push(e.attrId);
          });
          notMatch = false;
          return false;
        }
      });
      if (notMatch) {
        this.illegalClick = true;
        this.$message.warning({
          message: "没货了",
          center: true,
          duration: 800,
          onClose: () => {
            this.illegalClick = false;
          }
        });
      }
    },

    async addCart() {
      const data = await addCart(this.goodsInfo.goodsId)
      this.$router.push('/cart')
    }
  },

  components: {
    ProductParam,
    ServiceBar,
    Swiper,
    SwiperSlide
  }
};
</script>


<style lang="scss">
.swiper-container {
  height: 560px;
  width: 560px;
  margin-top: 5px;
}
.detail {
  .wrapper {
    .container {
      display: flex;
      justify-content: space-between;
      .content {
        width: 584px;
        h2 {
          font-size: 24px;
          font-weight: 400;
          color: #212121;
          padding-top: 30px;
          padding-bottom: 16px;
          height: 26px;
        }
        .item-info {
          font-size: 14px;
          // height: 36px;
          color: #b0b0b0;
        }
        .delivery {
          font-size: 16px;
          color: #ff6700;
          margin-top: 20px;
          margin-bottom: 14px;
          height: 15px;
        }
        .item-price {
          font-size: 20px;
          color: #ff6700;
          height: 19px;
          .del {
            font-size: 16px;
            color: #999999;
            margin-left: 10px;
            text-decoration: line-through;
          }
        }
        .line {
          height: 0;
          margin-top: 25px;
          margin-bottom: 28px;
          border-top: 1px solid #e5e5e5;
        }
        .item-addr {
          position: relative;
          height: 108px;
          background: #fafafa;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          padding-top: 30px;
          padding-left: 64px;
          font-size: 14px;
          line-height: 14px;
          .icon-loc {
            position: absolute;
            top: 0;
            left: 0;
            top: 27px;
            left: 34px;
            font-size: 22px;
          }
          .addr {
            color: #666666;
          }
          .stock {
            margin-top: 15px;
            color: #ff6700;
          }
        }
        .item-attr-info {
          padding-top: 30px;
          .item-attr {
            margin-bottom: 30px;
            h2 {
              padding: 0;
              margin-bottom: 12px;
            }
            .product-attrs {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              .product-attr {
                width: 287px;
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                margin-bottom: 12px;
                color: #333;
                border: 1px solid #e5e5e5;
                box-sizing: border-box;
                text-align: center;
                &.checked {
                  border: 1px solid #ff6600;
                  color: #ff6600;
                }
              }
            }
          }
        }
        .item-total {
          height: 108px;
          background-color: #fafafa;
          padding: 24px 33px 29px 30px;
          box-sizing: border-box;
          font-size: 14px;
          margin: 20px 0 30px 0;
          .phone-info {
            display: flex;
            justify-content: space-between;
          }
          .phone-total {
            font-size: 24px;
            color: #ff6600;
            margin-top: 18px;
          }
        }
        .btn-group {
          padding-bottom: 90px;
          .btn-huge {
            display: block;
            width: 287px;
            height: 54px;
            line-height: 54px;
            font-size: 16px;
            text-align: center;
            background-color: #ff6700;
            color: #fff;
          }
        }
      }
    }
    .swiper {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.price-info {
  height: 340px;
  background: #f3f3f3;
  h2 {
    font-size: 24px;
    color: #333333;
    padding-top: 38px;
    margin-bottom: 30px;
  }
}
</style>
