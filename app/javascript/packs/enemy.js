import Vue from 'vue'
import axios from 'axios';
window.app = new Vue({
  el: "#app",
  data: {
    enemies: [],
    enemyInfo: {},
    show: false,
    loading: true,
    minHp: 0
  },
  created: function(){
      axios.get('/enemies/list')
      .then(res => {
          this.enemies = res.data
          this.loading = false
      });
  },
  computed: {
      fillterd: function(){
          return this.enemies.filter(function(el){
              return el.hp >= this.minHp
          }, this)
      }
  },
  methods: {
      showDetail: function(enemy){
          this.enemyInfo = Object.assign({}, enemy);
          this.show = true
      },
      
      sortBy: function(key){
          var list = this.enemies
          this.enemies = list.sort(function(a,b){ return (a[key] > b[key]) ? -1 : 1})
      },
      
      updateEnemy: function(id){
          var index = this.enemies.findIndex(function(el){return el.id == id})
          Vue.set(this.enemies, index, Object.assign({}, this.enemyInfo))
      }
  }
  
})