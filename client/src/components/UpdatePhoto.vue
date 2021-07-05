<template>
  <div>
    <Navbar />
    <div class="container mt-3">
      <form>
        <label for="title" >Title :</label><br />
        <div >
          <input
            type="text"
            class="form-control col-6"
            required
            v-model="photo.title"
          /><br />
        </div>

        <label for="image" >Image URL :</label><br />
        <div >
          <textarea
            class="form-control col-6"
            rows="2"
            type="text"
            required
            v-model="photo.url"
          /><br />
        </div>

        <label for="image">Image thumbnail URL</label><br />
        <div >
          <textarea
            class="form-control col-6"
            rows="2"
            type="text"
            required
            v-model="photo.thumbnailUrl"
          /><br />
        </div>

        <label for="albumId">Album</label><br />
        <div >
          <select v-model="photo.albumId" class="form-control col-6" >
            <option v-for="album in albums" :value="album.id">{{album.id}}</option>
          </select>
          <br />
        </div>

        <hr />
        <button
          type="button"
          class="btn btn-primary btn-block form-control col-6"
          @click.prevent="updatePhoto(photo.id)"
        >
          Save changes
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Update",
  components: {
    Navbar,
  },
  computed: {
    photo() {
      return this.$store.state.photo;
    },
    albums() {
        return this.$store.state.albums
    }
  },
  methods: {
    getAlbum() {
      this.$store.dispatch('getAlbum');
    },
    updatePhoto(id) {
      this.$store.dispatch("updatePhoto", {
        id: id,
        router: this.$router,
      });
    },
  },
  mounted() {
    this.getAlbum();
  },
};
</script>

<style>
</style>