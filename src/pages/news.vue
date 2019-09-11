<template>
    <div class="news">
        <div class="topBox">
            <img src="../assets/img/news1.jpg">
            <div class="top_middle">
                <p>
                    <img src="../assets/img/guanyu.png" alt="">
                </p>

                <br/>
                <img class="about1" src="../assets/img/about.png" alt="">
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
        /*height: 640px;*/
        position: relative;
    }
    .topBox > img {
        /*height: 640px;*/
        width: 100%;
        display: block;
    }
    .top_middle {
        position: absolute;
        top: 420px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
