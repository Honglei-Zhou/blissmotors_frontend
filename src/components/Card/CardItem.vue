<template>
  <div>
    <b-card no-body
            style="max-width: 20rem;"
            img-src="https://placekitten.com/380/200"
            img-alt="Image"
            img-top>
      <h4 slot="header">Hello World</h4>
      <b-card-body>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
      <b-card-body>
        <a href="#"
           class="card-link">Card link</a>
        <a href="#"
           class="card-link">Another link</a>
      </b-card-body>
      <b-card-footer>This is a footer</b-card-footer>
    </b-card>
  </div>

</template>

<script>
export default {
  name: 'CardItem'
}
</script>

<style scoped>

</style>
