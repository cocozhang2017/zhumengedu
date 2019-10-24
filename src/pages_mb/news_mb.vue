<template>
    <div class="news">
        <div class="topBox">
            <img src="../assets/mobile/news/news1.png"
                 srcset="../assets/mobile/news/news1-assets/news1@1x.png 320w,
                        ../assets/mobile/news/news1-assets/news1@2x.png 375w,
                        ../assets/mobile/news/news1-assets/news1@3x.png 414w"
            >
            <div class="top_middle">
                <p class="titleText">新闻动态</p>
                <p class="enText">About building a dream</p>
            </div>
        </div>
        <div class="content">
            <div class="lists" v-for="(item,idx) of newsData" @click="details(item)">
                <div class="list_left">
                    <img :src="item.pic_Path">
                </div>
                <div class="list_right">
                    <p>{{item.title}}</p>
                    <div class="authorBox">
                        <!--<span class="firstName">{{item.content.charAt(0)}}</span>-->
                        <!--<span class="authorMsg">{{item.content}}</span>-->
                        <!--<span class="authorMsg">·</span>-->
                        <span class="authorMsg">{{item.create_Time.split(' ')[0]}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'news_mb',
        data: () => ({
            newsData: [],
        }),
        created(){
            let that = this
            this.$axios.get('/api/zhumeng/dynamic/list').then(res=>{
                console.log(res)
                that.newsData = res.data
            }).catch(err=>{
                console.log(err)
            })
        },
        methods: {
            details(item){
                var id=item.id;
                this.$router.push({
                    path: '/details_mb', query: { id: id }
                })
            }
        },
    }
</script>

<style scoped>
    p{
        margin: 0;
    }
    .topBox {
        width: 100%;
        /*max-height: 1080px;*/
        /*overflow: hidden;*/
        position: relative;
    }

    .topBox > img {
        width: 100%;
        display: block;
        margin-top: -22px;
    }

    .top_middle {
        width: 100%;
        text-align: center;
        color: white;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
    }
    .titleText {
        font-size: 1rem;
        margin-bottom: 5px;
    }
    .enText {
        font-size: .7rem;
        letter-spacing: .3rem;
    }

    .content {
        width: 90%;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0 1%;
        overflow: hidden;
        background: white;
    }

    .lists {
        display: flex;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #aaaaaa;
    }

    .lists:last-child {
        border-bottom: none;
    }

    .list_left {
        width: 35%;
        max-height: 192px;
        overflow: hidden;
    }

    .list_left img {
        width: 100%;
    }

    .list_right {
        width: 63%;
        padding-left: 2%;
    }

    .list_right > p {
        font-size: .9rem;
        letter-spacing: 1px;
    }

    .authorBox .firstName {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        text-align: center;
        line-height: 1.2rem;
        color: white;
        font-size: .8rem;
        background: #6fcff1;
        margin-right: .6rem;
    }

    .authorBox .authorMsg {
        font-size: .8rem;
        margin-right: .4rem;
    }
</style>
