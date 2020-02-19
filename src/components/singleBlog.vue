<!-- template -->
<template>
    <div class="row">
      <div class="container" id="single-blog" v-if="blog">
      <!-- blog section -->
      <div class="col-md-8">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author }}</p>
        <p>Category</p>
        <ul>
          <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
        <div id="comment-box">
          <h2>Comment On The Post</h2>
          <!-- success message -->
          <div v-if="submitted">
            <h3>Dear {{ comments.poster }}! Thanks for commentting on our blog ...regards</h3>
          </div>
          <form>
            <input type="text" v-model="comments.poster" placeholder="Your name">
            <textarea v-model="comments.comment"></textarea>
            <button v-on:click.prevent="postComment">Post Comment</button>
          </form>
        </div>

      </div>
      <!-- comment section -->
      <div class="col-md-4">
        <div id="pre-comments">
          <h2>Users Comment On The Post</h2>
          <ul>
            <li v-for="comment in blog.Comments">
              <h3>{{ comment.poster }} says:</h3>
              <p>{{ comment.comment }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import moment from 'moment';

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: null,
      submitted: false,
      comments: {
        timestamp: Date.now(),
      },
      preComments: []
    }
  },
  created() {
    this.$http.get('https://blog-95d74.firebaseio.com/posts/' + this.id + '.json').then(function(data) {
       return data.json()
      // this.blog = data.body;
  }).then(function(data) {
      console.log(data);
      this.blog = data;
      this.fetchComments();
    })
  },
  methods: {
    postComment: function() {
      this.$http.post('https://blog-95d74.firebaseio.com/posts/' + this.id + '.json', this.comments).then(function(data) {
        // this.submitted = true
      }).then(function(data) {
        console.log(data);
        this.submitted = true;
      })
    },
    // fectch comments function that ll called in promise
    fetchComments: function() {
      this.$http.get('https://blog-95d74.firebaseio.com/posts/' + this.id + '.json').then(function(data) {
        return data.json();
      }).then(data => {
        // data.docs.forEach(doc => {
        //   console.log(doc);
        // })
      })
    }
  }
}
</script>

<!-- css -->
<style scoped>
#single-blog {
  /* max-width:960px; */
  margin: 0 auto;
}
#comment-box textarea {
  margin-top: 10px;
  display: block;
  width: 32%;
  max-width: 50%
}
#pre-comments h2 {
  font-size: 2em;
  border-bottom: 1px solid;
}
</style>
