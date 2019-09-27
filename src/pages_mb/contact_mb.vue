<template>
    <div>
        <div class="topBox">
            <img src="../assets/mobile/contact/contact1.jpg"
                 srcset="../assets/mobile/contact/contact1-assets/contact1@1x.png 320w,
                        ../assets/mobile/contact/contact1-assets/contact1@2x.png 375w,
                        ../assets/mobile/contact/contact1-assets/contact1@3x.png 414w"
            >
            <div class="top_middle">
                <img src=" ../assets/mobile/contact/contact5.jpg"
                srcset="../assets/mobile/contact/contact5-assets/contact5@1x.png 320w,
                ../assets/mobile/contact/contact5-assets/contact5@2x.png 375w,
                ../assets/mobile/contact/contact5-assets/contact5@3x.png 414w"
                >">
            </div>
        </div>
        <!--联系我们很高兴为你服务-->
        <div class="happy">
            <div class="happy_img">
                <img src="../assets/mobile/contact/contact2.jpg"
                     srcset="../assets/mobile/contact/contact2-assets/contact2@1x.png 320w,
                        ../assets/mobile/contact/contact2-assets/contact2@2x.png 375w,
                        ../assets/mobile/contact/contact2-assets/contact2@3x.png 414w">
            </div>
        </div>
        <!--联系我们 联系地址-->
        <div class="contact">
            <div class="contact-us">
                <div class="contact-us-left">
                    <img src="../assets/mobile/contact/contact3.jpg"
                         srcset="../assets/mobile/contact/contact3-assets/contact3@1x.png 320w,
                        ../assets/mobile/contact/contact3-assets/contact3@2x.png 375w,
                        ../assets/mobile/contact/contact3-assets/contact3@3x.png 414w">
                </div>
                <div class="contact-us-right">
                    <div class="contact-us-right-top">
                        <img src="../assets/mobile/contact/lianxiwomen.png" alt="">
                        <span>联系我们</span>
                        <hr>
                    </div>
                    <!--<div class="contact-us-right-footer">-->
                        <p>
                            咨询热线:400-919-1314-010-53513311
                        </p>
                        <!--<p>-->
                            <!--技术支持:028-857759385-9954753-->
                        <!--</p>-->
                        <!--<p>-->
                            <!--备案咨询电话:028-830571122-->
                        <!--</p>-->
                        <!--<p>-->
                            <!--企业客服QQ:400282888-->
                        <!--</p>-->
                        <!--<p>-->
                            <!--客服邮箱:18822758392@163.com-->
                        <!--</p>-->
                        <!--<p>-->
                            <!--投诉邮箱:tousu@mgtx.com-->
                        <!--</p>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="contact-address">
                <div class="contact-address-left">
                    <img src="../assets/mobile/contact/contact4.jpg"
                         srcset="../assets/mobile/contact/contact4-assets/contact4@3x.png 320w,
                        ../assets/mobile/contact/contact4-assets/contact4@3x.png 375w,
                        ../assets/mobile/contact/contact4-assets/contact4@3x.png 414w">
                </div>
                <div class="contact-address-right">
                    <div class="contact-address-right-top">
                        <img src="../assets/mobile/contact/zuobiao.png" alt="">
                        <span>联系地址</span>
                        <hr>
                    </div>

                        <p>
                            公司地址:北京市通州区宋庄镇双埠头村桃花村俱乐部忆园
                        </p>
                        <!--<p>-->
                            <!--邮编:10040-->
                        <!--</p>-->
                        <!--<p>-->
                            <!--网址:http://qiutugroup.com-->
                        <!--</p>-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'contact'
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
        top: 55%;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
    }

    /*筑梦教育*/
    .happy {
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        top: -40px;
    }

    .happy_img {
        width: 100%;
    }

    .happy_img > img {
        width: 100%;
        height: 100%;
    }

    .contact {
        width: 90%;
        margin: 20px auto;
        margin-top: -40px;
        background: #fff;
    }

    .contact-us, .contact-address {
        display: flex;
        flex: 2;
    }
    .contact-address-left, .contact-us-left {
        flex: 1;
    }

    .contact-address {
        margin-top: 0;
    }

    .contact-us-right, .contact-address-right {
        text-align: left;
        flex: 1;
        margin: 10px 0 0 10px;
    }

    .contact-us-right-top {
        height: 30px;
    }

    .contact-us-right-top > img, .contact-address-right-top > img {
        height: 20px;
        line-height: 20px;
    }

    .contact-us-right-top > span, .contact-address-right-top > span {
        display: inline-block;
        line-height: 20px;
        vertical-align: top;
    }
   .contact-address p {
        margin-top:0;
    }
</style>
