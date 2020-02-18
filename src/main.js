import Vue from 'vue'
import App from './App.vue'
// importing view resource for json http call
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
// importing from routes
import Routes from './routes'


// let vue know that we re to use routere in a application
Vue.use(VueResource);
Vue.use(VueRouter);

// creating a new instance of vue Router
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// filters
Vue.filter('to-Uppercase', function (value) {
  return value.toUpperCase();
});

Vue.filter('snippet', function (value) {
  return value.slice(0,100) + '...';
});

// Adding a global custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if(binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    }else if(binding.value === 'narrow') {
      el.style.maxWidth = '569px';
    }
    // with argument
    if(binding.arg === 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});
// default
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
