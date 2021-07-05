<template>
  <div class="home">
    <Navbar />

    <Album />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Album from '@/components/Album.vue'

export default {
  name: 'AlbumPage',
  components: {
    Navbar,
    Album
  }
}
</script>
