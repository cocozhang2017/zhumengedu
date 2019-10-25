<template>
    <div class="LM">
        <div class="message">
            <v-input v-model="phone"></v-input>
            <v-textarea v-model="message" ref="message"></v-textarea>
            <div class="btn-con">
                <input @click="handleSend" type="button" class="btn" value="发布"  :class="{right_phone:rightPhone}">
                <input @click="refresh" type="button" class="btn" value="刷新" >
            </div>
        </div>
    </div>
</template>
<script>
    import vInput from '../components/vInput.vue'
    import vTextarea from '../components/vTextarea.vue'
    import vList from '../components/vList.vue'
    export default {
        data () {
            return {
                phone: '',
                message: '',
                list: []
            }
        },
        computed: {
            rightPhone() {
                return /^1[3|4|5|7|8][0-9]{9}$/.test(this.phone);
            }
        },
        components: {
            vInput,
            vTextarea,
            vList
        },
        methods: {
            handleSend: function () {
                if (!this.rightPhone) {
                    window.alert('请输入11位手机号码并且符合国内手机号码段')
                    return
                }
                if (this.message === '') {
                    window.alert('请输入留言内容')
                    return
                }
                if(this.message!==''&&this.rightPhone){
                    let userphone=this.phone;
                    let content=this.message;
                    this.$axios.get(`/api/api/zhumeng/message?userphone=${userphone}&content=${content}`).then(res=>{
                        console.log(res.status);
                        if(res.status==200){
                            this.phone='';
                            this.message='';
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
                }
            },
            refresh(){
                this.phone='';
                this.message='';
            }
        }
    }
</script>

<style scoped>
    .LM {
        background: #F5FFFA;
        padding-top:180px;
        height: 100%;
    }
    .message {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .message div{
        margin-bottom: 12px;
        flex-direction: row;
    }
    .message input:focus,
    .message textarea:focus{
        border: 1px solid #3399ff;
        border-radius: 5px;
    }
    .message .btn-con{
        text-align: center;
        display: inline-block;
    }
    .message .btn{
        padding: 6px 15px;
        border: 1px solid #39f;
        border-radius: 4px;
        color: #fff;
        background-color: #39f;
        cursor: pointer;
        outline: none;
    }
</style>
