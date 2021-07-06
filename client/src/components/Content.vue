<template>
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
</template>

<script>
export default {
  name: "Content",
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
      return this.listPhotos = this.$store.state.photos;
    },
    filteredListPhotos() {
      if(this.searchValue != "") {
        return this.listPhotos.filter((item) => {
          return this.searchValue.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
        })
      } else {
        return this.listPhotos
      }
    }
    // filteredListPhotos() {
    //   let tempPhotos = this.listPhotos;
    //   if (this.searchValue != "" && this.searchValue) {
    //     tempPhotos = tempPhotos.filter((item) => {
    //       return item.title
    //       .toUpperCase()
    //         .includes(this.searchValue.toUpperCase())
    //     });
    //   }
    //   return tempPhotos;
    // },
  },
};
</script>

<style>
</style>