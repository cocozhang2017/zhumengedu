<template>
  <div id="app">
      <Navbar v-if="client=='p'" />
      <NavBarMb v-else />
      <router-view/>
      <BackTop v-if="client=='p'" />
      <Footer v-if="client=='p'" />
      <FooterMb v-else />
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
    background-color: #F5FFFA;
     }
    html,body{
        padding: 0;
        margin: 0;
    }
</style>
