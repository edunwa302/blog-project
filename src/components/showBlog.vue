<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <input type="text" v-model="search" placeholder="Search Blog">
    <h1>All Blogs Articles</h1>
    <div v-for="blog in filteredBlogs" v-bind:key="" class="show-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow >{{ blog.title | to-Uppercase }}</h2></router-link>
      <article>{{ blog.content | snippet }}</article>
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
   // this returns a promise
    this.$http.get('https://blog-95d74.firebaseio.com/posts.json').then(function(data) {
      return data.json();
      // getting needed data or elelment need from body data
    }).then(function(data){
      var blogsArray = []
      for(let key in data) {
        // id is the unique number of each blog
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    })
 },
 mixins: [searchMixin],
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
