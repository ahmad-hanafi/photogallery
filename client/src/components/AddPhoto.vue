<template>
  <div>
    <Navbar />
    <div class="container mt-3">
      <form>
        <label for="title">Title :</label><br />
        <div>
          <input
            type="text"
            class="form-control col-6"
            required
            v-model="title"
          /><br />
        </div>

        <label for="image">Image URL :</label><br />
        <div>
          <textarea
            class="form-control col-6"
            rows="2"
            type="text"
            required
            v-model="url"
          /><br />
        </div>

        <label for="image">Image thumbnail URL</label><br />
        <div>
          <textarea
            class="form-control col-6"
            rows="2"
            type="text"
            required
            v-model="thumbnailUrl"
          /><br />
        </div>

        <label for="albumId">Album</label><br />
        <div>
          <select v-model="albumId" class="form-control col-6">
            <option v-for="album in listAlbums" :key="album.id">
              {{ album.id }}
            </option>
          </select>
          <br />
        </div>

        <hr />
        <button
          type="button"
          class="btn btn-primary btn-block form-control col-6"
          @click.prevent="SavePhoto()"
        >
          Add Photo
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AddPhoto",
  components: {
    Navbar,
  },
  data() {
    return {
      title: "",
      url: "",
      thumbnailUrl: "",
      albumId: "",
    //   arrOfAlbum: []
    };
  },
  computed: {
    listAlbums() {
    //    this.arrOfAlbum = this.$store.state.albums
      return this.$store.state.albums;
    },
  },
  methods: {
    getAlbums() {
      this.$store.dispatch("getAlbum");
    },
    SavePhoto() {
      this.$store.dispatch('addPhoto', {
        title: this.title,
        url: this.url,
        thumbnailUrl: this.thumbnailUrl,
        albumId: this.albumId,
        router: this.$router,
      });
    }
  },
  created() {
      this.getAlbums();
  },
//   mounted() {
    // this.listAlbums()
//   },
};
</script>

<style>
</style>