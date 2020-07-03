<template>
    <div class="detail">
      <product-param :title="productInfo.name"></product-param>
      <div class="wrapper w">
          <div class="container">
              <div class="swiper">
                  
              </div>
          </div>
      </div>
    </div>
</template>


<script>
import ProductParam from '../components/ProductParam'
import { getProductDetail } from '../network/request'
export default {
    data() {
        return {
            productInfo: {},
        }
    },

    mounted() {
        this._getProductDetail()
    },

    methods: {
        async _getProductDetail() {
            const id = this.$route.params.id
            const data = await getProductDetail(id)
            this.productInfo = data
            console.log(this.productInfo)
        }
    },

    components: {
        ProductParam
    }
}
</script>


<style>
    
</style>
