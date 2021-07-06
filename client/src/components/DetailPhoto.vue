<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <img :src="photo.url" alt="photo" />
        </div>
        <div class="col-4">
          <label for="title"></label>Title<br />
          <p class="lead">{{ photo.title }}</p>
          <label for="album">Album</label><br />
          <p class="lead">{{ photo.Album.title }}</p>
          <br />
          <button
            v-if="admin"
            class="btn btn-info ml-2"
            @click.prevent="editPhoto(photo.id)"
          >
            Edit
          </button>
          <button
            v-if="admin"
            class="btn btn-danger ml-2"
            @click.prevent="deletePhoto(photo.id)"
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
  name: "DetailPhoto",
  components: {
    Navbar,
  },
  data() {
    return {
      admin: false
    };
  },
  methods: {
    editPhoto(id) {
      this.$router.push(`/photos/${id}/edit`);
    },
    deletePhoto(id) {
      this.$store.dispatch("deletePhoto", {
        id: id,
        router: this.$router,
      });
    },
    checkAdmin () {
         let data = localStorage.getItem('roles')
        if (data === 'Admin') {
            this.admin = true
        }
    }
  },
  mounted() {
      this.checkAdmin()
  },
  computed: {
    photo() {
      return this.$store.state.photo;
    },
  },
};
</script>

<style>
</style>