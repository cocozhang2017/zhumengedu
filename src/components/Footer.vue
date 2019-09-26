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
        <p class="footer-middle">北京市通州区宋庄镇双埠头村桃花村俱乐部忆园</p>
        <p class="footer-copyright">Copyright©2017-2019版权所有 京ICP备16047953号-1</p>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .footer {
        /*margin-top: 60px;*/
        background: #333;
        color: #86837E;
        font-size: 12px;
        height: 83px;
        text-align: center;
    }

    .footer-top > span {
        display: inline-block;
    }

    .footer-top > span + span {
        margin-left: 5px;
    }

    .footer-top, .footer-middle, .footer-copyright {
        height: 24px;
        line-height: 24px;
        padding: 0;
        margin: 0;
    }
    .footer-top {
        padding-top: 10px;
    }

    .footer-copyright {
        padding: 0;
    }

</style>
