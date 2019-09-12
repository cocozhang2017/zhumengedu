<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <BackTop/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackTop from './components/BackTop'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    BackTop
  }
}
</script>

<style>
#app {
}
    html,body{
        padding: 0;
        margin: 0;
    }
</style>
