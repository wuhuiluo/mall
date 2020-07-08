<template>
  <div class="cart">
    <order-header :title="'我的购物车'">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container w">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
              <span class="checkbox">
                <i class="el-icon-check"></i>
              </span>全选
            </li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul v-for="(item,index) in CartProducts" :key="index" class="cart-item-list">
            <li class="cart-item">
              <div class="item-check">
                <span class="checkbox"></span>
              </div>
              <div class="item-name">
                <img v-lazy="`${item.img}?thumb=1&w=320&h=320`" alt />
                <span>{{ item.name }}</span>
              </div>
              <div class="item-price">{{ item.price }}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;">-</a>
                  <span>{{ item.quantity }}</span>
                  <a href="javascript:;">+</a>
                </div>
              </div>
              <div class="item-total">{{ item.amount }}</div>
              <div class="item-del">
                <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getCartList } from "../network/request";
import OrderHeader from "../components/OrderHeader";
export default {
  data() {
    return {
      CartProducts: []
    };
  },

  mounted() {
    this._getCartList();
  },

  methods: {
    render(data) {
      let { amount, CartProducts, selectedCartCnt } = data;
      this.CartProducts = CartProducts;
    },

    async _getCartList() {
      const data = await getCartList({});
      console.log(data);
      this.render(data);
    }
  },

  components: {
    OrderHeader
  }
};
</script>


<style lang="scss">
.cart {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 114px;
    .cart-box {
      background-color: #fff;
      font-size: 14px;
      color: #999;
      text-align: center;
      .checkbox {
        display: inline-block;
        width: 22px;
        height: 22px;
        font-size: 16px;
        border: 1px solid #e5e5e5;
        vertical-align: middle;
        margin-right: 17px;
      }
      .cart-item-head {
        display: flex;
        height: 79px;
        align-items: center;
        .col-1 {
          flex: 1;
        }
        .col-2 {
          flex: 2;
        }
        .col-3 {
          flex: 3;
        }
      }
      .cart-item-list {
        display: flex;
        align-items: center;
        height: 125px;
        border-top: 1px solid #e5e5e5;
        font-size: 16px;
        .item-check {
          flex: 1;
        }
        .item-name {
          flex: 3;
          font-size: 18px;
          color: #333;
          display: flex;
        }
      }
    }
  }
}
</style>
