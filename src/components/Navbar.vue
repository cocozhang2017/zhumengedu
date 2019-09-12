<template>
  <div class="navbar">
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
  </div>
</template>
<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        searchBarFixed: true,
        defaultActiveIndex: '/'
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      goTo (path) {
        this.$router.replace(path)
      },
      handleSelect (index) {
        this.defaultActiveIndex = index
      }
    }
  }
</script>

<style scoped>
  #searchBar {
    width: 100%;
    background-color: transparent;
    height: 54px;
    padding: 0;
    display: flex;
  }

  .isFixed {
    position: fixed;
    background-color: #AEB7C3;
    top: -1px;
    z-index: 999;
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

  .top_right > span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
  }

  .top_right > span + span {
    margin-left: 50px;
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

  .on {
    border-bottom: 3px solid orangered;
    text-align: center;
    cursor: pointer;
  }

  .guide_item:hover {
    cursor: pointer;
  }
</style>
