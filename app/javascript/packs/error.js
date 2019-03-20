import Vue from 'vue'

Vue.component('my-error',{
    name: 'my-error',
    template: '<div v-if="errors.length != 0"><p v-for="error in errors" class="error">{{error}}</p></div>',
    props: ['errors']
})