<template>
  <div class="footer">
        <div class="footer-top">
          <span>企业合作</span>
          <span>|</span>
          <span>市场合作</span>
          <span>|</span>
          <span>加入我们</span>
          <span>|</span>
          <span>联系我们:010-84928417</span>
        </div>
        <div class="footer-copyright">
          <p>Copyright©2017-2019 MapleCloudy,版权所有 京ICP备16047953号-1</p>
        </div>
      </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .footer {
    margin-top: 60px;
    background: #333;
    color: #86837E;
    font-size: 14px;
    height: 80px;
    text-align: center;
  }

  .footer-top {
    padding-top: 10px;
  }

  .footer-top > span {
    display: inline-block;
  }

  .footer-top > span + span {
    margin-left: 5px;
  }

  .footer-copyright {
    margin-top: 20px;
  }

</style>
