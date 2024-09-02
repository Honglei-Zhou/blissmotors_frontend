<template>
<div class="row">

  <div class="leftcolumn">
    </div>
    <div class="maincolumn">

      <div class="carousel-wrapper">
        <carousel
        >
          <carousel-item
            v-for="(item, index) in sliderInfo"
            :key="index"
          >

            <img
              :src="item.img"
              style="width: 100%; object-fit: scale-down"
            />

          </carousel-item>
        </carousel>
      </div>
    </div>
    <div class="rightcolumn">
    </div>

    <!-- <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="page-head-wrapper">
      <div class="page-head">
        <div class="page-head-intro">
          Frequently Asked Questions
        </div>
        <div class="page-head-detail">
          <div>At Bliss Motors, we are specialized to help our customers to secure the best car leasing deals on the market without any hassle.</div>
          <div style="padding-top: 50px;"><i-button type="primary" @click="$router.push('/research')">Start Search</i-button></div>

          </div>
      </div>
    </div>
    </div>
    <div class="rightcolumn">
    </div> -->

    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="collapse-container">
        <div class="collapse-header">
          Frequently Asked Questions
        </div>
        <div class="collapse-wrapper" v-if="collapseData.items.length">
          <collapse v-model="collapseData" simple>
            <panel v-for="(item, index) in collapseData.items" :key="index" :name="item.panelName">
              {{item.panelHeader}}
              <p slot="content" style="font-size: 15px">{{item.panelContent}}</p>
            </panel>
          </collapse>
        </div>

      </div>
     </div>
    <div class="rightcolumn">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data () {
    return {
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blisslease.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      },
      collapseData: {
        items: [
          {
            panelName: '1',
            panelHeader: 'What is Bliss Motors',
            panelContent: 'At Bliss Motors, we are specialized to help our customers to secure the best car leasing deals on the market without any hassle. Over 3 years\' experience, we\'ve forged strong, lasting relationships with the dealers, manufacturers and vehicle finance companies, enabling us to secure the best discount terms. We focus on building long-term customer relationships, ensuring that repeat customers and recommendations form a substantial part of our business.\n' +
                  '\n' +
                  'We make sure your car shopping experience is exceptional and the deal you get is the best! Let us find your next lease, you will never want to return to the old way of car shopping!'
          },
          {
            panelName: '2',
            panelHeader: 'Why choose leasing?',
            panelContent: 'Car leasing is a cost-effective and hassle-free way to drive a brand-new vehicle while benefiting from fixed monthly payments, manufacturer warranties, road tax and free delivery. We supply all makes and models of new vehicles from local dealers in the area so there’s no need to deal with the hassle of shipping. You don\'t even have to collect your vehicle as delivery is free of charge. There is even the option to add maintenance, which covers your cost of servicing and replacement tires.'
          },
          {
            panelName: '3',
            panelHeader: 'Who can lease a car?',
            panelContent: 'One of the great things about leasing a car, whether it\'s a personal or business contract, is that almost anyone can do it. If you hold a US Driving License, you can enquire on any car leasing contract. It is, however, worth remembering that you will need to be put through external credit approval with one of our affiliated finance companies to make sure you will be able to fund your monthly payments. Rest assured this is a quick and easy process.'
          },
          {
            panelName: '4',
            panelHeader: 'Is leasing right for me?',
            panelContent: 'If you would like an affordable way to drive a new vehicle every 2 or 3 years, avoiding MOTs and unforeseen bills, car leasing may well be the best option for you. This means you benefit from the latest models, technology, safety features and fuel-efficient engines, with no residual risk and no hassle of having to dispose of your old vehicle. Simply hand the car back at the end of the contract and take out a new one. Be sure Bliss Motors can help you get great deals and overall ow cost of owning a car!'
          },
          {
            panelName: '5',
            panelHeader: 'I can’t see the exact model I want to lease, what do I do?',
            panelContent: 'If you would like an affordable way to drive a new vehicle every 2 or 3 years, avoiding MOTs and unforeseen bills, car leasing may well be the best option for you. This means you benefit from the latest models, technology, safety features and fuel-efficient engines, with no residual risk and no hassle of having to dispose of your old vehicle. Simply hand the car back at the end of the contract and take out a new one. Be sure Bliss Motors can help you get great deals and overall ow cost of owning a car!'
          },
          {
            panelName: '6',
            panelHeader: 'Is leasing right for me?',
            panelContent: 'We are able to offer highly competitive quotations on all makes and models. Please call 224-616-8158 or email us at Bmsales@blissmotors.com and descript your exact requirements, we will reach you out as soon as possible.\n' +
                  '\n' +
                  'What’s more, we are developing an app to keep our website as up to date as possible, so you should be able to find what you are looking for in the near further via our app.'
          },
          {
            panelName: '7',
            panelHeader: 'Are the cars you supply brand new cars?',
            panelContent: 'Yes, all the vehicles we supply are brand new.'
          },
          {
            panelName: '8',
            panelHeader: 'Do you charge any documentation or administration fees?',
            panelContent: 'Yes, we charge $500 commission per car as a broker. In addition, drive off fees including first month fee, the leasing, and regular monthly payments thereafter.'
          },
          {
            panelName: '9',
            panelHeader: 'How long do vehicle leases last?',
            panelContent: 'Typically, leases cover 36 month contracts. However, we can tailor make a lease to help achieve your desired budget and circumstances.'
          },
          {
            panelName: '10',
            panelHeader: 'What’s the minimum and maximum mileage per annum that you offer?',
            panelContent: 'We can offer as low as 7500 miles per year and up to 10,000 miles per annum.'
          },
          {
            panelName: '11',
            panelHeader: 'Can I choose the color and specification?',
            panelContent: 'Of course, as long as it’s available from the manufacturers and dealers, you can have it!'
          },
          {
            panelName: '12',
            panelHeader: 'Can I add options onto my chosen car?',
            panelContent: 'Yes. Any factory fitted options can be added to your order at a cost. We will be happy to provide a tailored quote to include your chosen options and specification.'
          },
          {
            panelName: '13',
            panelHeader: 'What exactly does Maintenance cover?',
            panelContent: 'As a general rule maintenance covers all of your servicing costs, maintenance costs and replacement tyres (in some cases this even includes punctures). If your chosen contract is longer than 36 months in duration, the maintenance agreement would also cover your MOT costs to make sure that the vehicle is safe and road legal for you.'
          },
          {
            panelName: '14',
            panelHeader: 'What happens at the end of a Contract Hire or Personal Contract Hire contract?',
            panelContent: 'You simply hand the vehicle back to the leasing company.'
          },
          {
            panelName: '15',
            panelHeader: 'Am I liable for any costs when I hand the vehicle back?',
            panelContent: 'As long as you have stuck to the contract mileage and the vehicle is in “fair wear and tear” condition you should not incur any additional charges. If you have gone over your allowed mileage you will be charged an excess mileage charge per mile. This charge will be clearly stated and the beginning of the contract so it shouldn’t come as a surprise.'
          }
        ]
      }

    }
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

.page-head-wrapper{
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  background-image: url('../../../static/img/index/car/page_head_1.png');
  background-color: #808695;
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-size: cover;
}
.page-head{
 width: 100%;
}
.page-head-title{
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 23px;
  /* color: #17233d; */
}
.page-head-intro {
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 30px;
  font-weight: 600;
}

.page-head-detail{
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;
  height: 150px;
  font-size: 16px;
  font-style: normal;
  line-height: 20pt;
  color: #17233d;
}

  .collapse-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
  .collapse-header {
    margin-left: 80px;
    margin-top: 50px;
    width: 980px;
    font-size: 30px;
  }
  .collapse-wrapper {
    margin-left: 80px;
    padding: 50px;
    position: center;
    width: 980px;
    font-size: 18px;
    text-align: left;
    line-height: 36px;
  }

</style>
