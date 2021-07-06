<template>
  <div class="home">
    <Navbar />

  <div class="container">
    <form id="sort-bar" class="mt-2 mb-2 mr-2 ml-2">
      <input
        type="text"
        v-model="searchValue"
        placeholder="Input Photo title"
        id="search-input"
        class="form-control col"
      />
    </form>
    <div class="row">
      <div
        class="card mt-2 mr-2 ml-2 mb-2"
        style="width: 300px"
        v-for="photo in filteredListPhotos"
        :key="photo.id"
      > 
        <div class="card-image rounded mx-auto d-block">
          <img
            :src="photo.thumbnailUrl"
            alt="card image"
            style="width: 150px; position: center"
          />
        </div>
        <div class="card-body">
          <h3>{{ photo.title }}</h3>
          <p>{{ photo.Album.title }}</p>
        </div>
        <button class="btn btn-info" @click.prevent="detail(photo.id)">
          Detail
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar
  },
  data() {
    return {
      searchValue: "",
      listPhotos: [],
    };
  },
  methods: {
    getPhotos() {
      this.$store.dispatch("getPhotos");
    },
    detail(id) {
      this.$store.dispatch("getPhotoById", {
        id: id,
        router: this.$router,
      });
    },
  },

  mounted() {
    this.getPhotos();
  },
  computed: {
    photos() {
      this.listPhotos = this.$store.state.photos;
      return this.$store.state.photos;
    },
    filteredListPhotos() {
      return this.$store.getters.filteredAlbums(this.searchValue)
    }
  },
};
</script>

