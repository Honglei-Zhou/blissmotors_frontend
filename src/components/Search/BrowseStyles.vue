<template>
  <!--
    <div class="sv-container">
        <div class="sv-content">
 -->
  <div class="row">
      <div class="title" @click="show = ! show">
        Browse By Style
      </div>
      <transition name="style">
      <TypeList
        v-show = "show"
      ></TypeList>
      </transition>
  </div>
</template>

<script>

import TypeList from '@/components/Item/TypeList'

export default {
  name: 'SearchVehicle',
  components: {
    TypeList
  },
  data () {
    return {
      show: true
    }
  }

}
</script>

<style scoped>
@import "../../common/css/base.css";

.title {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
}
.style-enter-active, .style-leave-active {
    transition: all 1s ease;
    opacity: 1;
}
.style-enter, .style-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
