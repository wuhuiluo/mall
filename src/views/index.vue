<template>
    <div class="index"></div>
</template>


<script>
import { getCateList } from '../network/request.js'
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
    }
}
</script>


<style>
    
</style>
