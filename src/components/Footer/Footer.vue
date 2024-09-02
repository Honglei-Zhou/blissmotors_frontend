<template>
  <div class="row" style="background-color: #17233d;">
    <div class="leftcolumn" style="background-color: #17233d;">
    </div>
    <div class="maincolumn">
    <footer class="footer">
      <div class="service-intro">
        <div class="servece-type">
          <div class="servece-type-info" v-for="(guide, index) in guides" :key="index">
            <ul v-if="index>0 && index <3">
              <li>
              {{guide.title}}
              </li>
              <li v-for="(item, index) in guide.items" :key="index"><router-link :to="item.value"><a>{{item.key}}</a></router-link></li>
            </ul>
          <ul v-else-if="index===0">
              <!-- <li><router-link to="/"><a>Bliss Motors</a></router-link></li> -->
              <li ><router-link to="/"><a><img style="width: 137px;" src="/static/img/logo/bliss-motors-logo_blue-white.png"></a></router-link></li>
            </ul>
            <ul v-else>
              <!-- <li><router-link to="/"><a>Bliss Motors</a></router-link></li> -->
              <li >
                {{guide.title}}
              </li>
              <li>
                <router-link :to="guide.items[0].value"><a>{{guide.items[0].key}}</a></router-link>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/blissmotors"><Icon type="logo-twitter" size=20></Icon></a>
            <a target="_blank" href="https://www.facebook.com/blissleaseusa/"><Icon type="logo-facebook" size=20></Icon></a>
              </li>
            </ul>
          </div>
        </div>

          <div class="discloure">
            <ul>
              <li>
                <span><strong>Inventory Disclosure: </strong></span>
              </li>
              <li><span></span></li>
              <li>All new cars arranged for sale are subject to price and availability from the selling franchised new car dealer.</li>
            </ul>
          </div>

        <div class="copyright">
          <p>Copyright © 2019 by Bliss Motors LLC
            <!-- <a target="_blank" href="https://www.blissmotors.com"><Icon type="logo-linkedin" size=30></Icon></a>
            <a target="_blank" href="https://twitter.com/blissmotors"><Icon type="logo-twitter" size=30></Icon></a>
            <a target="_blank" href="https://www.facebook.com/blissleaseusa/"><Icon type="logo-facebook" size=30></Icon></a>
            <a target="_blank" href="https://www.blissmotors.com"><Icon type="logo-instagram" size=30></Icon></a>
            <a target="_blank" href="https://www.blissmotors.com"><Icon type="logo-snapchat" size=30></Icon></a> -->
          </p>
        </div>

      </div>
    </footer>
    </div>
    <div class="rightcolumn" style="background-color: #17233d;">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      linkItemClass: 'link-item',
      // guideArr: [
      //   ['Bliss Motors'],
      //   ['About Bliss Motors', 'Contact Us', 'Careers', 'Media Center', 'Advertise', 'Terms & Conditions'],
      //   ['Our Products', 'Previously negotiated deals', 'Name your own price'],
      //   ['Contact with Us', 'SMS: (312)500-8535', 'Email: CustomerCare@BlissMotors.com']
      // ],
      guides: [
        {title: 'Bliss Motors',
          items: [
            {key: 'Bliss Motors', value: '/'}
          ]
        },
        {title: 'About Bliss Motors',
          items: [
            {key: 'Why Bliss Motors', value: '/why-blissmotors'},
            {key: 'Careers', value: '/career'},
            {key: 'Terms & Conditions', value: '/terms-of-service'}]
        },
        {
          title: 'Our Products',
          items: [
            {key: 'Deal of Week', value: '/deal-of-week'},
            {key: 'Research', value: '/research'},
            {key: 'How It Works', value: '/how-it-works'}
          ]
        },
        {
          title: 'Connect',
          items: [
            {key: 'Contact Us', value: '/contact-us'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";
  /*****************************Footer Start*****************************/
  .footer {
    width: 100%;
    margin: 0px auto;
    padding: 40px 20px 0px 20px;
    /* height:300px; */
    text-align:center;
    background-color: #17233d;
  }
  .service-intro {
    width: 100%;
    /*border-top: 1px solid #b2dfdb;*/
  }
  .servece-type {
    /* height: 200px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .servece-type-info {
    color: #f4f5f7;
  }
  .servece-type-info ul {
    list-style: none;
  }
  .servece-type-info li {
    font-size: 14px;
    cursor: pointer;
    line-height: 26px;
    /* color: white; */
    /* color: rgba(0,0,0, 0.8); */
  }
  .servece-type-info li:first-child {
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
    color: #2b85e4;
    /* color: rgba(0,0,0, 0.8); */
  }
  .servece-type-info a {
    color: white;
  }

  /* .first-a {
    color: #2b85e4;
  }
  .other-a{
    color: white;
  } */
    .servece-type-info a img {
    color: white;
  }

  .servece-type-info a:hover {
    color: #2b85e4;
  }
  .discloure {
    width: 100%;
    height: 30px;
    margin-top: 20px;
    padding-top: 2px;
    /* color: rgba(0,0,0, 0.8); */
    text-align: center;
    border-top: 1px solid white;
  }
  .discloure ul {
    list-style: none;
  }
  .discloure li {
    display: inline-block;
    padding: 5px 0px;
  }
  .copyright {
    width: 100%;
    margin-bottom: 20px;
    /* color: rgba(0,0,0, 0.8); */
    line-height: 30px;
    text-align: center;
  }
  .copyright a{
    /* color: rgba(0,0,0, 0.8); */
    font-size: 20px;
    color: #e8eaec;
  }
  .copyright a:hover{
    /* color: rgba(0,0,0, 0.8); */
    font-size: 20px;
    color: #2d8cf0;
  }
  /*****************************Footer End*****************************/
</style>
