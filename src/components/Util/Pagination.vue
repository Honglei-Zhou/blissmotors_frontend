<template>
    <div class="page-container">
                <div class="page-select">
            <i-select v-model="rowNum" @change="reloadPage" class="select" :placeholder="numPerPage" size="large">
                <i-option v-for="(num, index) in rowNum" :key="index" :value="num.value">{{num.label}}</i-option>
            </i-select>
        </div>

        <div class="page-list">
            <ul>
                <li v-show="previousPage" class="page-num" @click="showPreviousPage"></li>
                <li v-for="(num, index) in pageBtns" :key="index" class="page-num" :class="{'highlight': num===curPage}"
                    @click="goToPage(num)">
                    <a >{{num}}</a>
                </li>
                <li v-show="nextPage" class="page-num" @click="showNextPage"></li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      gotoPage: '',
      firstPage: true,
      previousPage: true,
      nextPage: true,
      lastPage: true,
      pageBtns: [1, 2, 3, 4, 5, 6],
      numPerPage: 10,
      curPage: 1,
      rowNum: [
        {
          value: 10,
          label: 10
        },
        {
          value: 20,
          label: 20
        },
        {
          value: 50,
          label: 50
        }
      ]
    }
  }
}
</script>

<style>

.page-container{
    width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    height: 34px;
    line-height: 34px;
    margin-bottom: 40px;
}
.page-list {
    display: inline-block;
    padding: 3px;
    border-radius: 4px;
    font-size: 24px;
}
.page-word {
    list-style: none;
    overflow: hidden;

}
.page-num {
    float: left;
    list-style: none;
    width: 34px;
    background-color: #f3f5f7;
}

.highlight{
    font-weight: 700;
    color: red;
}
.page-select {
    display: inline-block;
    vertical-align: top;
    padding: 0px;
    border-radius: 4px;
    font-size: 24px;
}
.select {
    width: 120px;
    margin: 0px;
    height: 34px;
    line-height: 34px;
    font-size: 24px;
    text-align: center;
}

</style>
