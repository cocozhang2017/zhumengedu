<template>
    <div class="news">
        <div class="topBox">
            <img src="../assets/img/news1.jpg">
            <div class="top_middle">
                <img src="../assets/img/news_title.png">
                <!--<p class="titleText">新闻动态</p>-->
                <!--<p class="enText">About building a dream</p>-->
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
        name: 'news',
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
                    path: '/details', query: { id: id }
                })
            }
        },
    }
</script>

<style scoped>
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
        text-align: center;
        color: white;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
    }

    .titleText {
        font-size: 50px;
    }

    .enText {
        font-size: 16px;
        letter-spacing: 18px;
    }

    .content {
        width: 62%;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0 3%;
        box-shadow: 0 0 5px lightgray;
        overflow: hidden;
        background: white;
        position: relative;
        top: -100px;
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
        width: 30%;
        max-height: 192px;
        overflow: hidden;
    }

    .list_left img {
        width: 100%;
    }

    .list_right {
        width: 63%;
        padding-left: 5%;
    }

    .list_right > p {
        font-size: 30px;
        letter-spacing: 1px;
    }

    .authorBox .firstName {
        display: inline-block;
        width: 33px;
        height: 33px;
        border-radius: 50%;
        text-align: center;
        line-height: 33px;
        color: white;
        font-size: 20px;
        background: #6fcff1;
        margin-right: 12px;
    }

    .authorBox .authorMsg {
        font-size: 19px;
        margin-right: 5px;
    }
</style>
