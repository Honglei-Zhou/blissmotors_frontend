<template>
  <div class="collapsecontainer">
      <collapse v-model="collapseData" :simple="collapseData.simple" :accordian="collapseData.accordian">

        <panel v-for="(item, index) in collapseData.items" :key="index" :name="item.panelName">
            {{item.panelHeader}}
            <p slot="content">{{item.panelContent}}</p>
        </panel>
    </collapse>
  </div>
</template>

<script>
export default {
  name: 'BMCollapse',
  data () {
    return {
      collapseData: {
        items: [
          {
            panelName: '',
            panelHeader: 'What is Bliss Motors',
            panelContent: 'At Bliss Motors, we are specialized to help our customers to secure the best car leasing deals on the market without any hassle. Over 3 years\' experience, we\'ve forged strong, lasting relationships with the dealers, manufacturers and vehicle finance companies, enabling us to secure the best discount terms. We focus on building long-term customer relationships, ensuring that repeat customers and recommendations form a substantial part of our business.\n' +
              '\n' +
              'We make sure your car shopping experience is exceptional and the deal you get is the best! Let us find your next lease, you will never want to return to the old way of car shopping!'
          }
        ],
        simple: true,
        accordian: false
      }
    }
  }
}
</script>

<style scoped>
.collapsecontainer {
    width: 100%;
    margin: 0px auto;
    background-color: #000000;
}
</style>
