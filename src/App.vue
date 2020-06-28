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
  }
}
</script>
<style>
@import './assets/scss/reset.scss';
</style>
