<template>
  <div class="home">
    <Navbar />

    <Home />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Home from '@/components/Home.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Home
  }
}
</script>
