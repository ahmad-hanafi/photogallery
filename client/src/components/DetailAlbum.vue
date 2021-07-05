<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col" v-for="photo in album.Photos" :key="photo.id">
          <div class="card" style="width: 200px">
            <div class="card-image rounded">
              <img
                :src="photo.thumbnailUrl"
                alt="card image"
                style="width: 150px; position: center"
              />
            </div>
            <div class="card-body">
              <h3>{{ photo.title }}</h3>
            </div>
            <button class="btn btn-info" @click.prevent="detailPhoto(photo.id)">
              Detail
            </button>
          </div>
        </div>
        <div class="col-3">
          <label for="title"></label>Title<br />
          <p class="lead">{{ album.title }}</p>
          <br />
          <button
            v-if="admin"
            class="btn btn-info ml-2"
            @click.prevent="editAlbum(album.id)"
          >
            Edit
          </button>
          <button
            v-if="admin"
            class="btn btn-danger ml-2"
            @click.prevent="deleteAlbum(album.id)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "DetailAlbum",
  components: {
    Navbar,
  },
  data() {
    return {
      admin: false,
    };
  },
  methods: {
    detailPhoto(id) {
      this.$store.dispatch("getPhotoById", {
        id: id,
        router: this.$router,
      });
    },
    editAlbum(id) {
      this.$router.push(`/albums/${id}/edit`);
    },
    deleteAlbum(id) {
      this.$store.dispatch("deleteAlbum", {
        id: id,
        router: this.$router,
      });
    },
    checkAdmin() {
      let data = localStorage.getItem("roles");
      if (data === "Admin") {
        this.admin = true;
      }
    },
  },
  mounted() {
    this.checkAdmin();
  },
  computed: {
    album() {
      return this.$store.state.album;
    },
  },
};
</script>

<style>
</style>