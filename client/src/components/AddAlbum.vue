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

        <hr />
        <button
          type="button"
          class="btn btn-primary btn-block form-control col-6"
          @click.prevent="addAlbum()"
        >
          Add Album
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AddAlbum",
  components: {
    Navbar,
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addAlbum() {
      this.$store.dispatch("addAlbum", {
        title: this.title,
        router: this.$router,
      });
    },
  }
};
</script>

<style>
</style>