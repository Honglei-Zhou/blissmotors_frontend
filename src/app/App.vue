<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
      <!-- <div class="fb-customerchat"
        page_id="540284639773983">
      </div> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
/*
  import Home from '@/components/Home'
  import FAQ from '@/components/FAQ/FAQ'
  import WeeklyDeal from '@/components/Deal/WeeklyDeal'
  import PreviousDeal from '@/components/Deal/PreviousDeal'
  import FreeConcierge from '@/components/Form/FreeConcierge'
  import Career from '@/components/Career/Career'
  import SelectVehicle from '@/components/Search/SelectVehicle'
  import MakeList from '@/components/Item/MakeList'
  import ModelList from '@/components/Item/ModelList'
  import TypeList from '@/components/Item/TypeList'
  import TopList from '@/components/Item/TopList'
  import CarList from '@/components/Item/CarList'
  import Login from '@/components/User/Login'
  import SignUp from '@/components/User/SignUp'
  import RegistrationCode from '@/components/User/RegistrationCode'
  import Profile from '@/components/User/Profile'
*/
export default {
  name: 'App',

  components: {
    Header,
    Footer
    /*
      Home,
      FAQ,
      WeeklyDeal,
      PreviousDeal,
      FreeConcierge,
      Career,
      SelectVehicle,
      MakeList,
      ModelList,
      TypeList,
      TopList,
      CarList,
      Login,
      SignUp,
      RegistrationCode,
      Profile
      */
  }

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  /* font-family: "soleil",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */
}
/* .chatbot {
  position: fixed;
  right: 60px;
  bottom: 100px;
}
.chatbot-iframe {
  display: block;
}
.chatbot-button{
  display: block;
  width: 30px;
  right: 60px;
} */

</style>
