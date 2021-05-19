<template>
  <div id="app">
    <Header/>
    <div id="content" class="content">
      <router-view></router-view>
    </div>

<!--    <Footer/>-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header.vue'
import Footer from "@/components/layout/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      token: "",
      refreshToken : "",
    };
  },
  methods: {

  },
  beforeCreate() {
    // eslint-disable-next-line no-unused-vars
    // http.getToken();
    // http.getMyProfile();
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
