<template>
    <div class="news">
        <div class="topBox">
            <img src="../assets/img/news1.jpg">
            <div class="top_middle">
                <p class="titleText">新闻动态</p>

                <p class="enText">About building a dream</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'news'
  }
</script>

<style scoped>
    .topBox {
        width: 100%;
        max-height: 1080px;
        overflow: hidden;
        /*height: 640px;*/
        position: relative;
    }
    .topBox > img {
        /*height: 640px;*/
        width: 100%;
        display: block;
    }
    .top_middle {
        text-align: center;
        color: white;

        position: absolute;
        bottom: 15%;
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
</style>
