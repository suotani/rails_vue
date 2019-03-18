import Vue from 'vue'
import axios from 'axios';
var app = new Vue({
  el: "#app",
  data: {
    enemies: [],
    enemyInfo: {},
    show: false
  },
  created: function(){
      axios.get('/enemies/list')
      .then(res => {
          this.enemies = res.data
      });
  },
  methods: {
      showDetail: function(index){
          this.enemyInfo = this.enemies[index]
          this.show = true
      }
  }
  
})