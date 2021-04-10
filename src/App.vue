<template>
  <div id="app">
    <Header/>
    <div id="content" class="content">
      <router-view></router-view>
    </div>

<!--    <Footer/>-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header.vue'
import * as http from "@/api/member";

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      token: ""
    };
  },
  methods: {

  },
  beforeCreate() {
    // eslint-disable-next-line no-unused-vars
    http.getToken();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
