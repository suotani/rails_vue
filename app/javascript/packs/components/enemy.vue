<template>
  <div>
    <label>HPで絞込み</label>
    <input type="text" v-model.number="minHp">
    <p v-cloak>{{enemies.length}}体中{{fillterd.length}}体</p>
    <table id="table">
      <tbody>
        <tr>
          <th>NAME</th>
          <th v-on:click="sortBy('hp')">HP</th>
          <th v-on:click="sortBy('magic_point')">MP</th>
        </tr>
        <tr is="enemy-item" v-for="(enemy, index) in fillterd" v-bind:enemy="enemy" v-on:click.native="showDetail(enemy)" v-cloak :key="index"></tr>
      </tbody>
    </table>
    <p v-if="loading" v-cloak>Loading...</p>
    <h2>Detail <span v-on:click="show=false" v-if="show">✖</span></h2>
    <div v-cloak>
      <p v-if="updated">更新しました</p>
      <error v-bind:errors="errors"></error>
      <transition>
        <div v-if="show">
          <p>name: <input type="text" v-model="enemyInfo.name" ></p>
          <p>hp: <input type="text" v-model.number="enemyInfo.hp"></p>
          <p>mp: <input type="text" v-model.number="enemyInfo.magic_point"></p>
          <p>power: <input type="text" v-model.number="enemyInfo.power"></p>
          <p>magic: <input type="text" v-model.number="enemyInfo.magic_power"></p>
          <p>skill: <input type="text" v-model.number="enemyInfo.skill_power"></p>
          <router-link :to="{name: 'enemy_info', params: {id: enemyInfo.id}}" tag="button">詳細</router-link>
          <button type="button" v-on:click="updateEnemy(enemyInfo.id)">更新</button>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import Error from './error.vue'
import EnemyItem from './enemy/enemy_item.vue'

export default{
  data() {
    return {
      enemies: [],
      enemyInfo: {},
      show: false,
      loading: true,
      minHp: 0,
      updated: false,
      errors: [],
    }
  },
  components: {
      EnemyItem,
      Error
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
          this.errors = []
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
            if(res.data.result){
                this.updated = true
                this.$set(this.enemies, index, Object.assign({}, this.enemyInfo))
            }else{
                this.errors = res.data.errors
            }
          });
      }
  }
  
}
</script>


<style scoped>
[v-cloak] {
    display: none;
}

.v-enter-active, .v-leave-active{
    transition: opacity 0.5s;
}
.v-enter, .v-leave-to{
    opacity: 0;
}

h2 span{
    color: red;
}
</style>