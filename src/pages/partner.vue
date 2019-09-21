<template>
    <div class="news">
        <div class="topBox">
            <img src="../assets/partner/partner_bg.jpg">
            <div class="top_middle">
                <img src="../assets/partner/partner_title.png">
            </div>
        </div>
        <div class="content">
            <div class="partner_info">
                <div class="one_cube">
                    <h3 class="cube_titlle">
                        <span>初心传媒</span>
                    </h3>
                    <p>初心传媒贯彻执行集团的轻利润运营 思维，誓做一家以服务至上，全身心为客户提供最佳解决方案的新思维传媒公司</p>
                </div>
                <div class="two_cube">
                    <img src="../assets/partner/partner1.jpg">
                </div>
                <div class="one_cube">
                    <h3 class="cube_titlle">
                        <span>创造艺人</span>
                    </h3>
                    <p>公司致力于影视公司的角色分配、 练习生选拔、艺人经纪等业务。贯彻执行集团轻利润运营思维， 誓做一家以服务至上，全身心为艺人、影视公司提供最佳解决方案的新思维艺人经纪公司</p>
                </div>
                <div class="one_cube">
                    <img src="../assets/partner/partner2.jpg">
                </div>
                <div class="one_cube">
                    <h3 class="cube_titlle">
                        <span>至美影业</span>
                    </h3>
                    <p>公司致力于原创舞台剧、影视剧的孵化 影视剧后期配音。贯彻执行集团的轻利润运营思维，誓做一家以服务至上，全身心为客户提供最具性价比解决方案的新思维影业</p>
                </div>
                <div class="one_cube">
                    <img src="../assets/partner/partner3.jpg">
                </div>
                <div class="two_cube">
                    <div class="two_info">
                        <h3>联合创始人:宿莽</h3>
                        <p>求途文化产业集团创始人 求途筑梦教育联合创始人 求途创造艺人联合创始人</p>
                        <p>求途至美影业联合创始人 求途初心传媒联合创始人</p>
                        <p>敦复教育创始人</p>
                        <p>宿莽文化创始人</p>
                        <p>原北京儿艺术培训部经理 原北京演艺集团多元发展部负责人宿莽</p>
                    </div>
                </div>
                <div class="two_cube">
                    <div class="two_info">
                        <h3>合作导演：沈文帅</h3>
                        <p>执导作品</p>
                        <p style="margin-left: -1%">《热血派》《班长大人》《出线了，初恋》《潜梦追凶》</p>
                    </div>
                </div>
                <div class="one_cube">
                    <img src="../assets/partner/partner4.jpg">
                </div>
            </div>
            <div class="teacher_info">
                <div class="teacher_text">
                    <div class="titleText">师资团队</div>
                    <div class="enText">Teacher team</div>
                </div>
                <div class="school_cube">
                    <p class="school_name">中央戏剧学院</p>
                    <div class="teacher_avatar">
                        <div><img src="../assets/partner/teacher1.png"></div>
                        <div><img src="../assets/partner/teacher2.png"></div>
                        <div><img src="../assets/partner/teacher3.png"></div>
                        <div><img src="../assets/partner/teacher1.png"></div>
                        <div><img src="../assets/partner/teacher2.png"></div>
                        <div><img src="../assets/partner/teacher3.png"></div>
                    </div>
                </div>
                <div class="school_cube">
                    <p class="school_name">北京电影学院</p>
                    <div class="teacher_avatar">
                        <div><img src="../assets/partner/teacher1.png"></div>
                        <div><img src="../assets/partner/teacher2.png"></div>
                        <div><img src="../assets/partner/teacher3.png"></div>
                        <div><img src="../assets/partner/teacher1.png"></div>
                        <div><img src="../assets/partner/teacher2.png"></div>
                    </div>
                </div>
                <div class="school_cube">
                    <p class="school_name">其他院校</p>
                    <div class="teacher_avatar">
                        <div><img src="../assets/partner/teacher1.png"></div>
                        <div><img src="../assets/partner/teacher2.png"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'partner',
    data: () => ({

    }),
    methods: {}
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
        font-size: 40px;
        margin-bottom: 20px;
    }
    .enText {
        font-size: 16px;
        letter-spacing: 15px;
    }

    .content {
        width: 62%;
        box-sizing: border-box;
        margin: 0 auto;
        position: relative;
        top: -100px;
    }
    .partner_info{
        display: flex;
        flex-wrap: wrap;
        color: white;
        font-size: 0;
        background: #3a3e41;
    }
    .one_cube{
        width: 33.3%;
        max-height: 400px;
        overflow: hidden;
    }
    .two_cube{
        width: 66.7%;
        max-height: 400px;
        overflow: hidden;
    }
    .cube_titlle{
        font-size: 25px;
        text-align: center;
        padding-top: 15%;
        margin-bottom: 15%;
    }
    .cube_titlle span{
        padding: 2% 6%;
        border: 1px solid white;
    }
    .one_cube p{
        padding: 0 15%;
        font-size: 16px;
        text-align: justify;
    }
    .two_cube p{
        font-size: 16px;
    }
    .content img{
        width: 100%;
        height: 100%;
    }
    .two_info{
        padding-top: 7%;
        padding-left: 8%;
    }
    .two_info h3{
        font-size: 25px;
        margin-bottom: 5%;
    }
    .two_info p{
        font-size: 16px;
    }

    .teacher_text{
        text-align: center;
        margin-top: 60px;
        margin-bottom: 50px;
    }
    .school_cube{
        position: relative;
        margin-bottom: 150px;
    }
    .school_name{
        font-size: 60px;
        color: #e4e4e4;
        position: absolute;
        left: -20%;
        top: -110px;
        z-index: -1;
    }
    .teacher_avatar{
        display: flex;
        flex-wrap: wrap;
    }
    .teacher_avatar div{
        width: 33.3%;
        max-height: 400px;
        overflow: hidden;
    }
    .teacher_avatar img{
        width: 100%;
        height: 100%;
    }
</style>
