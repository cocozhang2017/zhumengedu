<template>
    <div class="navbar_mb">
        <div class="searchBar" id="searchBar">
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
                <span class="guide_item" :class="{on: '/news_mb'===$route.path}" @click="goTo('/news_mb')">
                    新闻动态
                </span>
                <span class="guide_item" :class="{on: '/partner_mb'===$route.path}" @click="goTo('/partner_mb')">
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
                client: '',
            }
        },
        created(){
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                this.client = 'm'
            }else{
                this.client = 'p'
            }
        },
        methods: {
            goTo (path) {
                this.$router.replace(path)
            },
        }
    }
</script>

<style scoped>
    .navbar_mb{
        width: 100%;
        max-width: 750px;
        margin: 0 auto;
        background-color: rgba(174,183,195,.6);
        /*background-color: rgba(255,255,255,.2);*/
        position: fixed;
        top: 0;
        z-index: 999;
    }

    #searchBar {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 2.5%;
        padding-right: 1%;
    }
    .top{
        width: 30%;
    }
    .t_left > span {
        font-size: .8rem;
        display: block;
    }
    .t_left > p {
        font-size: .2rem;
        margin: 0;
    }
    .top_right{
        width: 60%;
    }
    .top_right > span {
        display: inline-block;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 0.8rem;
    }
    .top_right > span + span {
        margin-left: 2%;
    }
    .on {
        background: rgba(0,0,0,.2);
        border-bottom: 3px solid orangered;
        text-align: center;
        cursor: pointer;
    }

    .guide_item:hover {
        cursor: pointer;
    }
</style>
