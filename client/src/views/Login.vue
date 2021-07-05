<template>
  <div>
    <Navbar />
    <FormLogin />
  </div>
</template>

<script>
import FormLogin from "@/components/Login"
import Navbar from "@/components/Navbar"

export default {
    name: "Login",
    components: {
        FormLogin,
        Navbar
    }
}
</script>

<style>

</style>
