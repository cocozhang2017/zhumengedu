<template>
    <div class="news">
        <div class="topBox">
            <img src="../assets/img/news1.jpg">
            <div class="top_middle">
                <img src="../assets/img/news_title.png" >
                <!--<p class="titleText">新闻动态</p>-->
                <!--<p class="enText">About building a dream</p>-->
            </div>
        </div>
        <div class="content">
            <div class="lists" v-for="(item,idx) of newsData">
                <div class="list_left">
                    <img :src="item.img" >
                </div>
                <div class="list_right" >
                    <p>{{item.newsTitle}}</p>
                    <div class="authorBox">
                        <span class="firstName">{{item.author.charAt(0)}}</span>
                        <span class="authorMsg">{{item.author}}</span>
                        <span class="authorMsg">·</span>
                        <span class="authorMsg">{{item.comment}}评论</span>
                        <span class="authorMsg">·</span>
                        <span class="authorMsg">2天前</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'news',
        data: ()=>({
            newsData: [
                {
                    img: '/static/news/news2.jpg',
                    newsTitle: '综合分录取将成为艺术院校录取主流',
                    author: '宿莽',
                    comment: '1',
                    time: '20190910'
                },
                {
                    img: '/static/news/news3.jpg',
                    newsTitle: '英国艺术院校到底牛在哪里？这么多艺术大神 都是毕业于英国.....',
                    author: '宿莽',
                    comment: '0',
                    time: '20190910'
                },
                {
                    img: '/static/news/news4.jpg',
                    newsTitle: '2019中国艺术类院校排名，最受关注的院校和 专业是啥？',
                    author: '宿莽',
                    comment: '12',
                    time: '20190910'
                },
                {
                    img: '/static/news/news5.jpg',
                    newsTitle: '创意艺术大学丨全英最顶尖的艺术院校',
                    author: '宿莽',
                    comment: '4',
                    time: '20190908'
                },
                {
                    img: '/static/news/news6.jpg',
                    newsTitle: '文化成绩要求较低的5所艺术院校（附录取线）',
                    author: '宿莽',
                    comment: '3100',
                    time: '20190905'
                },
                {
                    img: '/static/news/news7.jpg',
                    newsTitle: '91所艺术院校分类表，2019艺考生必知，录取 院校更容易！',
                    author: '宿莽',
                    comment: '1928',
                    time: '20190904'
                },
            ],
        }),
        methods:{

        },
    }
</script>

<style scoped>
    .topBox {
        width: 100%;
        max-height: 1080px;
        overflow: hidden;
        position: relative;
    }
    .topBox > img {
        width: 100%;
        display: block;
    }
    .top_middle {
        text-align: center;
        color: white;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
    }
    .titleText{
        font-size: 50px;
    }
    .enText{
        font-size: 16px;
        letter-spacing: 18px;
    }
    .content{
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
    .lists{
        display: flex;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #aaaaaa;
    }
    .lists:last-child{
        border-bottom: none;
    }
    .list_left{
        width: 30%;
        max-height: 192px;
        overflow: hidden;
    }
    .list_left img{
        width: 100%;
    }
    .list_right{
        width: 63%;
        padding-left: 5%;
    }
    .list_right>p{
        font-size: 30px;
        letter-spacing: 1px;
    }
    .authorBox .firstName{
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
    .authorBox .authorMsg{
        font-size: 19px;
        margin-right: 5px;
    }
</style>
