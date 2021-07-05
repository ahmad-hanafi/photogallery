<template>
    <div>
    <Navbar />

    <FormSignup />
    </div>
</template>

<script>
import FormSignup from '@/components/Register'
import Navbar from '@/components/Navbar.vue'
export default {
    name: "Register",
    components: {
        FormSignup,
        Navbar
    }
}
</script>

<style>

</style>