<template>
  <div id="app">
    <header-comp></header-comp>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>

// @ is an alias to /src
import HeaderComp from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp
  }
}
</script>