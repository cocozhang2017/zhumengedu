<template>
  <div id="app">
      <template v-if="client=='p'">
          <Navbar/>
          <router-view/>
          <BackTop/>
          <Footer/>
      </template>
      <template v-else>
          <NavBarMb/>
          <router-view/>
          <FooterMb/>
      </template>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import NavBarMb from './components/mobile/NavBarMb'
import Footer from './components/Footer'
import FooterMb from './components/mobile/FooterMb'
import BackTop from './components/BackTop'


export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
        BackTop,
        NavBarMb,
        FooterMb
    },
    data: ()=>({
        client: '',
    }),
    created(){
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.client = 'm'
        }else{
            this.client = 'p'
        }
    },
}
</script>

<style>
    @import "../static/css/mobile.css";
#app {
}
    html,body{
        padding: 0;
        margin: 0;
    }
</style>
