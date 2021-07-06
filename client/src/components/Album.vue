<template>
  <div class="container">
    <div class="row">
      <div class="card mt-2 mr-2 ml-2 mb-2" style="width: 300px;"  v-for="album in albums" :key="album.id">
        <div class="card-body">
          <h3>{{ album.title }}</h3>
        </div>
        <button class="btn btn-info" @click.prevent="detail(album.id)">Detail</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    getAlbum() {
      this.$store.dispatch('getAlbum');
    },
    detail(id) {
      this.$store.dispatch('getAlbumById', {
        id: id,
        router: this.$router
      })
    }
  },
  mounted() {
    this.getAlbum();
  },
  computed: {
    albums() {
      return this.$store.state.albums;
    },
  },
};
</script>

<style>
</style>