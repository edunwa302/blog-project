<template>
  <div>
    <!-- <div id="header-img">
      <img alt="Vue logo" src="./assets/logo.png">
    </div> -->
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog> -->
    <!-- <list-blog></list-blog> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlog from './components/listBlog.vue'
// importing router page links
import header from './components/header.vue'

// export object
export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlog,
    'app-header': header

  },
methods: {

 }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
#header-img {
  width: 20%;
  margin: 0 auto;
}
#header-img img {
  max-width: 20%;
}
</style>
