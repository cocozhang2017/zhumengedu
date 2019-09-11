<template>
  <div class="navbar">
    <img src="../assets/img/top.png">
    <div :class="searchBarFixed == true ? 'isFixed' :''" class="searchBar" id="searchBar">
      <div class="top">
        <div class="t_left">
          <span>求途集团</span>
          <p>QIUTUGROUP.COM</p>
        </div>
      </div>
      <div class="top_right">
        <span class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
       首页
       </span>
        <span class="guide_item" :class="{on: '/news'===$route.path}" @click="goTo('/news')">
       新闻动态
       </span>
        <span class="guide_item" :class="{on: '/parnter'===$route.path}" @click="goTo('/parnter')">
       合作伙伴
       </span>
        <span class="guide_item" :class="{on: '/contact'===$route.path}" @click="goTo('/contact')">
       联系我们
       </span>
      </div>
    </div>
    <div class="top_middle">
      <p>
        <img src="../assets/img/guanyu.png" alt="">
      </p>

      <img class="about1" src="../assets/img/about.png" alt="">
    </div>
    <BackTop/>
  </div>
</template>

<script>
  import BackTop from './BackTop'
  export default {
    name: 'Navbar',
    components: {BackTop},
    data () {
      return {
        searchBarFixed: true,
        defaultActiveIndex: "/"
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        goTo (path) {
          this.$router.replace(path)
          // this.action=path
        },
      handleSelect(index){
        this.defaultActiveIndex = index;
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        let offsetTop = document.querySelector('#searchBar').offsetTop
        scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
      }
    }
  }
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 640px;
    position: relative;
  }
  .navbar > img {
    height: 640px;
    width: 100%;
    display: block;
  }

  .top {
    position: absolute;
    top: 10px;
    left: 21%;
  }

  .top_right {
    position: absolute;
    top: 10px;
    left: 51%;
  }
  .top_right>span {
    display:inline-block;
    height: 40px;
    line-height: 40px;
  }
  .top_right>span+span {
    margin-left:50px;
  }
  .t_left > span {
    font-weight: 700;
    font-size: 14px;
    text-align: left;
    display: block;
  }

  .t_left > p {
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    margin-top: -2px;
  }

  .top_middle {
    position: absolute;
    top: 420px;
    left: 44%;
  }
  .top_middle>.about1 {
    margin-left:-36%;
  }
  .on {
    border-bottom:3px solid orangered;
    text-align: center;
    cursor: pointer;
  }
</style>
