<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="Search Blog">
    <div v-for="blog in filteredBlogs" v-bind:key="" class="show-blog">
      <h2 v-rainbow >{{ blog.title | to-Uppercase }}</h2>
    </div>
  </div>
</template>

<!-- js -->
<script>
import searchMixin from '../mixins/searchMixin'
export default {
    data() {
      return {
        blogs:[],
        search:''
      }
    },
 methods: {
 },
 created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
      console.log(data);
      // getting needed data or elelment need from body data
      this.blogs = data.body.slice(0,10);
    })
 },
 mixins:[searchMixin],
 computed: {
   // filteredBlogs: function() {
   //   return this.blogs.filter((blog) => {
   //     return blog.title.match(this.search);
   //   })
   // }
 },
 // local rigistration
 // filters: {
 //   toUppercase(value) {
 //     return value.toUpperCase();
 //   }
 // },

}
// js
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
#show-blogs {
  max-width: 700px;
  margin: 0 auto;
}
.show-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
input {
  width: 30%;
  padding: 10px;
}
</style>
