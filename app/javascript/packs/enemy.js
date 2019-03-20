import Vue from 'vue'
import axios from 'axios';
window.app = new Vue({
  el: "#app",
  data: {
    enemies: [],
    enemyInfo: {},
    show: false,
    loading: true,
    minHp: 0,
    updated: false
  },
  created: function(){
      axios.get('/enemies/list')
      .then(res => {
          this.enemies = res.data
          this.loading = false
      });
  },
  computed: {
      fillterd(){
          return this.enemies.filter(function(el){
              return el.hp >= this.minHp
          }, this)
      }
  },
  methods: {
      showDetail: function(enemy){
          this.enemyInfo = Object.assign({}, enemy);
          this.show = true
          this.updated = false
      },
      
      sortBy: function(key){
          var list = this.enemies
          this.enemies = list.sort(function(a,b){ return (a[key] > b[key]) ? -1 : 1})
      },
      
      updateEnemy: function(id){
          var index = this.enemies.findIndex(function(el){return el.id == id})
          axios.patch('enemies/' + id,{
              enemy: Object.assign({}, this.enemyInfo)
          }).then(res => {
            console.log(res.data)
            if(res.data.result){
                this.updated = true 
            }else{
                
            }
          });
          this.$set(this.enemies, index, Object.assign({}, this.enemyInfo))
      }
  }
  
})