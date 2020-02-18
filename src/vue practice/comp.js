// building a component that can be passed to any vue instance
Vue.component('greeting', {
  template:'<P>Hey man! i am {{ name }} my new component template. <button @click="changeName">changedata</button></p>',
  // data can be passed into a comp but as a function
  data: function() {
    return {
      name: '',
    }
  },
  methods: {
    changeName: function() {
      this.name= "gef";
    }
  }
});

// custom directives
Vue.directive('randcolor', {
  bind(el,binding,vnode) {
    // el is the elelment binding to
    // binding is the vlaue
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})
// filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

// another filter
Vue.filter('snippet', function(value){
  return value.slice(9,15) + '...';
});
// custom directives
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if(binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    }else if(binding.value == "narrow") {
      el.style.maxWidth = "650px";
    }
    if(binding.arg === 'column'){
      el.style.background = '#ddd';
    }
  }
})

Vue.directive('focus', {
  inserted: function (el) {
    // When the bound element is inserted into the DOM...
    el.focus()
  }
})

// blog-post comp
Vue.component('blog-post', {
  props: ['title', 'id', 'content', 'author', 'comment'],
  // template: '<h4>{{ id }}: {{ title }}</h4>'
  template: `
    <div class="blog-post">
      <h3>{{ id }}: {{ title }}</h3>
      <p>Blog-content: {{ content}}</p>
      <p>Author: {{ author}}</p>
      <p>Comments: <span>{{comment}}</span></p>
      <button v-on:click="$emit('enlarge-text')">Enlarge blog</button>
    </div>`
})
// custom input
Vue.component('custom-input', {
  props: ['value'],
  // template
  template: `
    <input
      v-bind:value="value"
      v-on:inpit="$emit('input', $event.target.value)"
    >`
})
// slots
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
     <strong>Error</strong>
     <slot></slot>
    </div>
  `
})

// vue instances
var comp = new Vue({
  el: '#comp',
  data: {
    foods: ['beans', 'bread', 'coke', 'egg'],
  }
})

var comp1 = new Vue({
  el: '#v-comp1',
  data: {
    postFontSize: 1,
    searchText: '',
    posts: [
      {
        id: 1,
        title: 'My journey with Vue',
        content: 'The music of muzaga in the land',
        author: 'Mike igwe',
        comment: 'wow great article'
      },
      {
        id: 2,
        title: 'Learninf code three yrs',
        content: 'A country deep in love for the citizenry',
        author: 'Ekene ene',
        comment: 'nice peace'
      },
      {
        id: 3,
        title: 'Vue make coding peaceful',
        content: 'Peace of minfd can only come from god almighty',
        author: 'Macc',
        comment: 'Nice try'
      }
    ]
  }
})

var custdirect = new Vue({
  el: '#custid',
})
