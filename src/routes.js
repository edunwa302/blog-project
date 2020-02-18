// importing some components
import showBlog from './components/showBlog.vue'
import addBlog from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'


export default [
  {path:'/show', component:showBlog},
  {path:'/add', component:addBlog},
  // loading router with parameter id
  {path:'/blog/:id', component:singleBlog}

]
