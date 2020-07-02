<template>
  <router-view />
</template>
<script>
import { getUserInfo } from '../src/network/request'
import storage from "./storage/index";
import { mapActions } from "vuex";
export default {
  mounted() {
    if (this.$cookies.get("userId")) {
      this._getUserInfo();
    }
  },

  methods: {
    ...mapActions(['saveUserName']),
    
    async _getUserInfo() {
      const res = await getUserInfo()
      if(res) {
        this.saveUserName(res.username)
      }else {
        this.$cookies.remove('userId')
      }
    }
  }
};
</script>
<style>
@import "./assets/scss/reset.scss";
</style>
