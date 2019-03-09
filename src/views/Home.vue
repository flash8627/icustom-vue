<template>
  <div class="home">
    <app-header></app-header>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'home',
  components: {
    "HelloWorld":HelloWorld,"app-header":AppHeader,"app-footer":AppFooter
  }
}
</script>
