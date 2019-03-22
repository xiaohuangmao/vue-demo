<template>
  <div class="hello">
    <h1>{{ isShow }}</h1>
    <div :class="{ active:isShow}">
      {{ changeVal }}
    </div>
    <button @click="changeShow">点我切换</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    changeShow(){
      this.$store.commit('toggle')
      this.$store.dispatch('getNewNum',20)
    }
  },
  computed:{
    isShow(){
      return this.$store.getters.isShow
    },
    changeVal(){
      return this.$store.getters.getChangeNum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
