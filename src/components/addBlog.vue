<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <keep-alive>
      <input type="text" v-model="blog.title" required/>
    </keep-alive>
      <label>Blog Content</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkbox">
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label >Ninjas</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
        <label>Cheese</label>
      </diV>
      <p>Blog Author:</P>
        <select v-model="blog.author">
          <option v-for="author in authors" v-bind:key="author"> {{ author }}</option>
        </select>
        <button v-on:click.prevent="postBlog">Post Blog</button>
    </form>
    <!-- success message -->
    <div v-if="submitted">
      <h3>Dear User! Thanks for submitting your blog ...regards</h3>
    </div>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categoreis</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
      </ul>
      <p>Bog Author: {{ blog.author}}</p>
    </div>
  </div>
</template>

<script>
// imports
export default {
  components: {
  },
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        comments: [],
        author: '',
        // poster: '',
        // comment: ''
      },
      authors: ['The Net Ninja', 'The Agular Avengers', 'The Vue Vindi'],
      // comments: [],
      submitted: false
    }
  },
  methods: {
    postBlog: function() {
      this.$http.post('https://blog-95d74.firebaseio.com/posts.json', this.blog).then(function(data) {
        console.log(data);
        this.submitted = true
      })
    }
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width:500px;
}
label {
  display: block;
  margin:20px 0 10px;
}
input[type="text"], textarea {
  display: block;
  width:100%;
  padding:8px;
}
#checkbox input, #checkbox label {
  display: inline-block;
  margin-right: 10px;
}
#preview {
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px dotted #ccc;
}
</style>
