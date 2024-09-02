<template>
  <div>
    <div
      class="showsec"
      v-if="item.left"
    >
      <div class="showsec-item">
        <div class="showsec-item-img">
          <img :src="item.image" />
        </div>
      </div>

      <div class="showsec-item">
        <div class="showsec-item-title">
          {{item.title}}
        </div>
        <div class="showsec-item-info">
          {{item.info}}
        </div>
        <div class="showsec-item-intro">
          {{item.intro}}
        </div>
      </div>
    </div>

    <div
      class="showsec"
      v-else
    >

      <div class="showsec-item">
        <div class="showsec-item-title">
          {{item.title}}
        </div>
        <div class="showsec-item-info">
          {{item.info}}
        </div>
        <div class="showsec-item-intro">
          {{item.intro}}
        </div>
      </div>

      <div class="showsec-item">
        <div class="showsec-item-img">
          <img :src="item.image" />
        </div>
      </div>
    </div>

    <div class="titlesec" v-if="item.desc">
        {{item.desc}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShowSection',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";

.showsec {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.showsec-item {
  width: 50%;
  height: 500px;
  text-align: left;
}
.showsec-item-img {
  width: 100%;
  height: 500px;
  margin: 0px auto;
  background-color: #fff;
}
.showsec-item-img img {
  width: 100%;
  height: 500px;
  object-fit: scale-down;
  background-color: #fff;
}
.showsec-item-title {
  width: 100%;
  height: 140px;
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 23px;
  background-color: #fff;
}
.showsec-item-info {
  width: 100%;
  height: 150px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 36px;
  font-weight: bold;
}
.showsec-item-intro {
  width: 100%;
  height: 210px;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 16px;
  font-style: normal;
  line-height: 20pt;
}

.titlesec {
  width: 100%;
  padding: 20px 150px 0px 150px;
  height: 100px;
  font-size: 26px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
