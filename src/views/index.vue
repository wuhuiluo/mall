<template>
    <div class="index">
        <service-bar />
    </div>
</template>


<script>
import { getCateList } from '../network/request.js'
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import ServiceBar from '../components/ServiceBar'
export default {
    data() {
        return {
            allCateList: []
        }
    },
    
    created() {
        this._getCateList()
    },

    methods: {
        async _getCateList() {
           const data = await getCateList() 
           console.log(data)

        }
    },

    components: {
        ServiceBar,
    }
}
</script>


<style>
    
</style>
