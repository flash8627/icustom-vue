<template>
  <div class="app-header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/shopping">Shopping</router-link> |
      <router-link to="/system-manager">system manager</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'app-header',
  components: {
    //HelloWorld
  }
}
</script>
<style>

</style>
