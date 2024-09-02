<template>
  <div class="row">
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
  name: 'Logout',
  created () {
    this.logout()
    this.$router.push('/')
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login', 'logout'])
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";

.carousel-wrapper {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
}
.login-choice-wrapper{
  width: 650px;
  height: 360px;
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.login-account{
  width: 40%;
}
.button{
  width: 240px;
  height: 42px;
  background-color: #2d8cf0;
}
.login-facebook{
  width: 40%;
}
.login-form {
  width: 400px;
  height: 360px;
  background-color: #ffffff;
  margin: 20px;
  padding: 10px;
  text-align: center;
  border: 1px solid #464444;
}
.login-form h2 {
  margin-top: 15px;
}
.login-form div {
  margin-top: 15px;
}
</style>
