<template>
    <div class="newsDetail">
        <div class="topBox">
            <img :src="newsData.pic_Path">
        </div>
        <div class="content">
            <h4 class="content_title">{{newsData.title}}</h4>
            <p class="content_text">{{newsData.content}}</p>
        </div>
    </div>
</template>

<script>
  export default {
      name:'details',
      data: () => ({
          newsData: {},
      }),
      created() {
          let that = this;
          let newsId = this.$route.query.id;
          this.$axios.get(`/api/zhumeng/dynamic/getcontent/${newsId}`).then(res=>{
              that.newsData = res.data
          }).catch(err=>{
              console.log(err)
          })
      }
  }
</script>

<style scoped>
    .topBox {
        width: 100%;
        position: relative;
    }
    .topBox > img {
        width: 100%;
        display: block;
        margin-top: -22px;
    }
    .content{
        width: 62%;
        margin: 0 auto;
        padding-top: 0px;
        padding-bottom: 50px;
    }
    .content_title{
        text-align: center;
        margin-bottom: 40px;
    }
</style>
