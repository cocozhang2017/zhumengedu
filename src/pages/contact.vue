<template>
    <div>
        <div class="topBox">
            <img src="../assets/img/contact0.png">
            <div class="top_middle">
                <img src="../assets/img/contact.png">
            </div>
        </div>
        <!--联系我们很高兴为你服务-->
        <div class="happy">
            <div class="happy_img">
                <img src="../assets/img/contact1.jpg" alt="">
            </div>
        </div>
        <!--联系我们 联系地址-->
        <div class="contact">
            <div class="contact-us">
                <div class="contact-us-left">
                    <img src="../assets/img/contact2.jpg" alt="">
                </div>
                <div class="contact-us-right">
                    <div class="contact-us-right-top">
                        <img src="../assets/img/lxwm.png" alt="">
                        <span>联系我们</span>
                        <hr>
                    </div>
                    <div class="contact-us-right-footer">
                        <p>
                            全国业务咨询热线:400-2828-80-028-8737576
                        </p>
                        <p>
                            技术支持:028-857759385-9954753
                        </p>
                        <p>
                            备案咨询电话:028-830571122
                        </p>
                        <p>
                            企业客服QQ:400282888
                        </p>
                        <p>
                            客服邮箱:18822758392@163.com
                        </p>
                        <p>
                            投诉邮箱:tousu@mgtx.com
                        </p>
                    </div>
                </div>
            </div>
            <div class="contact-address">
                <div class="contact-address-left">
                    <img src="../assets/img/contact3.jpg" alt="">
                </div>
                <div class="contact-address-right">
                    <div class="contact-address-right-top">
                        <img src="../assets/img/zuobiao.png" alt="">
                        <span>联系地址</span>
                        <hr>
                    </div>
                    <div class="contact-address-right-footer">
                        <p>
                            公司地址:北京市通州区新华南路39号63幢三层N区069号
                        </p>
                        <p>
                            邮编:10040
                        </p>
                        <p>
                            网址:http://qiutugroup.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--<div>-->
    <!--<el-upload-->
    <!--class="avatar-uploader"-->
    <!--:data="dataObj"-->
    <!--action="https://up-z1.qiniup.com"-->
    <!--list-type="picture-card"-->
    <!--:show-file-list="false"-->
    <!--:on-error="handleError"-->
    <!--:on-success="handleSuccessVideo"-->
    <!--:on-progress="uploadProcess"-->
    <!--:before-upload="videoBeforeUpload"-->
    <!--:on-remove="handleRemove">-->
    <!--<video v-if="imageUrl.length > 1 && imgFlag == false" controls="controls" :src="[qiniuUrl + '/' + imageUrl]"-->
    <!--class="avatar"></video>-->
    <!--<i v-else-if="imageUrl.length < 1 && imgFlag == false" class="el-icon-plus avatar-uploader-icon"></i>-->
    <!--<el-progress v-if="imgFlag == true" type="circle" :percentage="percent"-->
    <!--style="margin-top: 20px"></el-progress>-->
    <!--</el-upload>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: 'contact',
        // data () {
        //     return {
        //         qiniuUrl: 'https://up.demoworld.com/',  // 个人七牛访问前缀
        //         imgFlag: false,
        //         imageUrl: [],
        //         percent: 0,
        //         dialogImageUrl: '',
        //         dialogVisible: false,
        //         listObj: {},
        //         dataObj: {token: '111o8CXprRY-dhCawNZM7LQMNs-4y1pEmUlzbuMExv9:Xqu54BdpgEykaYpZf4IKGJQpaNc=:eyJzY29wZSI6ImIyZXJwIiwiZGVhZGxpbmUiOjE1NjAyMTkxMDB9'} // 此处七牛token写成常量方便调试，正式环境需要获取token
        //         // dataObj: { token: '111o8CXprRY-dhCawNZM7LQMNs-4y1pEmUlzbuMExv9:Xqu54BdpgEykaYpZf4IKGJQpaNc=:eyJzY29wZSI6ImIyZXJwIiwiZGVhZGxpbmUiOjE1NjAyMTkxMDB9' }
        //     }
        // },
        // methods: {
        //     handleRemove (file, fileList) {
        //         this.imageUrl = ''
        //     },
        //     handleSuccessVideo (response) {
        //         console.log(123, response)
        //         this.imgFlag = false
        //         this.percent = 0
        //         if (response.hash) {
        //             this.imageUrl = response.hash
        //         } else {
        //             this.$message.error('视频上传失败，请重新上传！')
        //         }
        //     },
        //     handleError (err, file, fileList) {
        //         // 上传失败异常处理
        //         const error = JSON.parse(JSON.stringify(err))
        //         console.log(err)
        //         console.log(error)
        //         this.$message.error(error.status.toString())
        //         this.imgFlag = false
        //         this.percent = 0
        //     },
        //     videoBeforeUpload (file) {
        //         console.log(file)
        //         const _self = this
        //         const isVideo = file.type === 'video/mp4' || file.type === 'video/ogg' || file.type === 'video/flv' || file.type === 'video/avi' || file.type === 'video/wmv' || file.type === 'video/rmvb'
        //         const isLt100M = file.size / 1024 / 1024 < 100
        //         if (!isVideo) {
        //             this.$message.warning('请上传正确格式的视频！')
        //             return false
        //         } else {
        //             if (!isLt100M) {
        //                 this.$message.warning('上传视频文件大小不能超过 100MB!')
        //                 return false
        //             }
        //         }
        //         // 如果要实时获取七牛token 需要使用以下代码
        //         // const fileName = file.uid;
        //         // this.listObj[fileName] = {};
        //         // return new Promise((resolve, reject) => {
        //         //   getToken().then(response => {
        //         //     const data = response.data;
        //         //     if (data.success) {
        //         //       const tokens = data.data.token;
        //         //       _self._data.dataObj.token = tokens;
        //         //       // _self._data.dataObj.key = key
        //         //       _self.listObj[fileName] = { hasSuccess: false, uid: fileName };
        //         //       // _self.imgList['skuImageVideo'] = { hasSuccess: false, uid: fileName };
        //         //       resolve(true);
        //         //     } else {
        //         //       this.$message.warning('获取七牛token异常，请刷新后重试！');
        //         //     }
        //         //   }).catch(err => {
        //         //     console.log(err);
        //         //     reject(false);
        //         //   });
        //         // });
        //     },
        //     uploadProcess (event, file, fileList) {
        //         this.imgFlag = true
        //         console.log(event.percent)
        //         this.percent = Math.floor(event.percent)
        //     },
        // }
    }
</script>

<!--<style>-->
<!--.avatar-uploader .el-upload {-->
<!--border: 1px dashed #d9d9d9;-->
<!--border-radius: 6px;-->
<!--cursor: pointer;-->
<!--position: relative;-->
<!--overflow: hidden;-->
<!--width: 178px;-->
<!--height: 178px;-->
<!--}-->

<!--.avatar-uploader .el-upload:hover {-->
<!--border-color: #409EFF;-->
<!--}-->

<!--.avatar-uploader-icon {-->
<!--font-size: 28px;-->
<!--color: #8c939d;-->
<!--width: 178px;-->
<!--height: 178px;-->
<!--line-height: 178px;-->
<!--text-align: center;-->
<!--}-->

<!--.avatar {-->
<!--width: 178px;-->
<!--height: 178px;-->
<!--display: block;-->
<!--}-->

<!--.image-preview {-->
<!--width: 178px;-->
<!--height: 178px;-->
<!--position: relative;-->
<!--border: 1px dashed #d9d9d9;-->
<!--border-radius: 6px;-->
<!--float: left;-->
<!--}-->

<!--.image-preview .image-preview-wrapper {-->
<!--position: relative;-->
<!--width: 100%;-->
<!--height: 100%;-->
<!--}-->

<!--.image-preview .image-preview-wrapper img {-->
<!--width: 100%;-->
<!--height: 100%;-->
<!--}-->

<!--.image-preview .image-preview-action {-->
<!--position: absolute;-->
<!--width: 100%;-->
<!--height: 100%;-->
<!--left: 0;-->
<!--top: 0;-->
<!--cursor: default;-->
<!--text-align: center;-->
<!--color: #fff;-->
<!--opacity: 0;-->
<!--font-size: 20px;-->
<!--background-color: rgba(0, 0, 0, .5);-->
<!--transition: opacity .3s;-->
<!--cursor: pointer;-->
<!--text-align: center;-->
<!--line-height: 200px;-->
<!--}-->

<!--.image-preview .image-preview-action .el-icon-delete {-->
<!--font-size: 32px;-->
<!--}-->

<!--.image-preview:hover .image-preview-action {-->
<!--opacity: 1;-->
<!--}-->

<!--</style>-->
<style>
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
        top:55%;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
    }

    /*筑梦教育*/
    .happy {
        width: 70%;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        top: -160px;
    }
    .happy_img {
        width: 100%;
    }
    .happy_img>img {
        width: 100%;
        height: 100%;
    }

    .contact {
        width: 70%;
        margin: 20px auto;
        margin-top: -120px;
        background: #f1f1f1;
    }

    .contact-us, .contact-address {
        display: flex;
        flex: 2;
    }

    .contact-address-left, .contact-us-left {
        flex: 1;
    }

    .contact-address {
        margin-top: 20px;
    }

    .contact-us-right, .contact-address-right {
        text-align: left;
        flex: 1;
        margin: 50px 0 0 30px;
    }
    .contact-us-right-top {
        height: 60px;
    }
    .contact-us-right-top>img,.contact-address-right-top>img {
        line-height:40px;
    }
    .contact-us-right-top>span,.contact-address-right-top>span {
        display:inline-block;
        line-height:40px;
         vertical-align: top;
    }
</style>
