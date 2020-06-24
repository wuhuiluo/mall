<template>
    <router-view/>
</template>
<script>
import storage from './storage/index'
export default {
  data() {
    return {
      age: 30
    }
  },

  mounted() {
     this.$axios.get('/mock/user/user.json').then(res => {
       console.log(res)
     })
  }
}
</script>
<style>
@import './assets/scss/reset.scss';
</style>
