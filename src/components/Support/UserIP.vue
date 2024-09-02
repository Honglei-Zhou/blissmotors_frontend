<template>
<div>
</div>
</template>

<script>

export default {
  name: 'UserIP',
  components: {
    'remote-js': {
      render (createElement) {
        return createElement('script', {attrs: { type: 'text/javascript', src: this.src }})
      },
      props: {
        src: { type: String, required: true }
      }
    }
  }
}
</script>

<style scoped>

</style>
