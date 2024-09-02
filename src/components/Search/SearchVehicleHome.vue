<template>
  <div class="row">

      <div class="leftcolumn">
    </div>

    <div class="maincolumn">

      <div class="content-wrapper">

       <BrowseStyles></BrowseStyles>
      </div>
    </div>

    <div class="rightcolumn">
    </div>

     <div class="leftcolumn">
    </div>

    <div class="maincolumn">

      <div class="content-wrapper">

       <BrowseMakes></BrowseMakes>
      </div>
    </div>

    <div class="rightcolumn">
    </div>

  </div>
</template>

<script>
import BrowseStyles from '@/components/Search/BrowseStyles'
import BrowseMakes from '@/components/Search/BrowseMakes'

export default {
  name: 'SearchVehicleHome',
  components: {
    BrowseStyles,
    BrowseMakes
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";
.content-wrapper{
  width: 100%;
  margin: 20px;
}
</style>
