<template>
    <div v-cloak>
        <table>
            <tr>
                <th>Name</th>
                <th>HP</th>
                <th>MP</th>
                <th>Power</th>
                <th>Magic Power</th>
                <th>Skill Power</th>
            </tr>
            <tr v-if="!loading">
                <td>{{enemy.name}}</td>
                <td>{{enemy.hp}}</td>
                <td>{{enemy.magic_point}}</td>
                <td>{{enemy.power}}</td>
                <td>{{enemy.magic_power}}</td>
                <td>{{enemy.skill_power}}</td>
            </tr>
            <tr v-else>
                <td>Loading...</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Error from './error.vue'

export default{
    data(){
        return {
            enemy: {},
            loading: true
        }
    },
    created: function(){
        axios.get('/enemies/' + this.$route.params.id)
        .then(res => {
            console.log(res.data)
            this.enemy = res.data
            this.loading = false
        });
    },
}
</script>


<style scoped>
    th, td{
        padding-right: 20px;
    }
</style>