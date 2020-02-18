new Vue({
  el: '#first-vue',
  data: {
    isActive: true,
    name: 'Edu',
    job: 'a programmer',
    title: 'Mr',
    website: 'http://www.hectarebyhectare.com.ng',
    websiteTag: '<a href="http://www.hectarebyhectare.com.ng">new link</a>'
  },
  // still an onject
  methods: {
    greet: function(item) {
      return 'Good morning, ' + item + ' ' + this.title;
    },
    close: function() {
      this.isActive = false;
    }
  }
});

// 2nd vue instance
var app = new Vue({
  el: '#second-vue',
  data: {
    age: 26,
    x: 0,
    y: 0,
    name: '',
    Age: '',
    a: 0,
    b: 0,
    available: false,
    nearby: false

  },

  // methods: {
  //   Add: function(inc) {
  //     return this.age++;
  //   },
  //   Sub: function(dec) {
  //     return this.age--;
  //   },
  // }
  methods: {
    Add: function(inc) {
      return this.age+= inc;
    },
    Sub: function(dec) {
      return this.age-= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert('Hey! you hit me!')
    },
    // addToA: function() {
    //   return this.a + this.age;
    // },
    // addToB: function() {
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA: function() {
    console.log('addToA');
      return this.a + this.age;
    },
    addToB: function() {
      return this.b + this.age;
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})

var app2 = new Vue({
  el: '#form',
  data: {
    selected: '',
    status: '',
    isActive: false,
    error: null,
    available: false,
    bider: true,
    free: true,
    classObj: {
      isAct: true,
      hasEr: false
    }
  },
  methods: {
    getMenber: function() {
      if(this.selected === 'A'|| this.selected === 'B') {
        this.isActive = true;
        // this.status = '#myModal';
      }else{
        this.isActive = false;
        this.status = '';
      }
    }
  },

  computed: {

    }
})

var app3 = new Vue({
  el: '#form2',
  data: {
    selected: '',
    error: false,
    success: false,
    status: ''
  },
})
// app3.status= 'successful';

var tempapp = new Vue({
  el: '#tempApp',
  data: {
    message: '',
  },
  mounted() {
    app3.status= 'successful'
  },
  template: '<p>{{ message }}</p>'
})

tempapp.message = 'Hello kedu';


// vue punch game
var app4 = new Vue({
  el: '#vue-game',
  data: {
    health: 100,
    ended: false,
    status: ''
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if(this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
    },
    restartHway: function() {
      this.health = 50;
    }
  },
  computed: {

  }
})

var app5 = new Vue({
  el: '#class-work',
  data: {
    valid: true,
    inValid: false,
    classObj: {
      isAct: true,
      hasEr: false
    },
  },
  computed: {
    classObject: function() {
      return {
        active: this.valid && !this.inValid,
        'text-danger': this.inValid && this.inValid.type === 'fatal'
      }
    }
  }
})



var app2 = new Vue({
  el: '#form',
  data: {
    selected: '',
    status: '',
    isActive: false,
  },
  methods: {
    getMenber: function() {
      if(this.selected === 'A'|| this.selected === 'B') {
        this.isActive = true;
        // this.status = '#myModal';
      }else{
        this.isActive = false;
        this.status = '';
      }
    }
  },
})
