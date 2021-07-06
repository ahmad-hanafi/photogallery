<template>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Photo Albums</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="mr-2" to="/">Home</router-link> 
      </li>
      <li>
        <router-link class="mr-2" v-if="login" to="/albums">Album</router-link>
      </li>
    </ul>
    <div v-if="admin">
    <router-link class="mr-2 btn btn-success" to="/photos/add">Add Photo</router-link>
    <router-link class="mr-2 btn btn-success" to="/albums/add">Add Album</router-link>
    </div>
    <router-link class="btn btn-success" to="/login" v-if="!login"
          >Login</router-link
        >
    <button class="btn btn-danger" @click.prevent="logout" v-else>
          Logout
        </button>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      login: false,
      admin: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("roles");
      this.$router.push("/login");
    },
    checkLogin () {
        if (localStorage.getItem('access_token')) {
            this.login = true
        }
    },
    checkAdmin () {
        let data = localStorage.getItem('roles')
        if (data === 'Admin') {
            this.admin = true
        }
    }
  },
  mounted() {
    this.checkLogin();
    this.checkAdmin();
  },
};
</script>

<style>
</style>