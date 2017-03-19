<template>
  <div class="mailme">
    <div class="mailme-header">
      <p>
        <img src="http://o9xap42x4.bkt.clouddn.com/mail.png" alt="">
        Email Me
      </p>
    </div>
    <div class="mailme-form">
      <div class="mailme-form-wrap">
        <input type="text" placeholder="您的邮箱" v-model="email">
      </div>
      <div class="mailme-form-wrap">
        <textarea name="" id="" cols="90" rows="10" placeholder="有什么想对我说的嘛" v-model="suggestion">

        </textarea>
      </div>
      <div class="mailme-form-wrap">
        <a class="btn" @click="sendMail">发送🐹 </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      suggestion: ''
    }
  },
  methods: {
    sendMail() {
      var _this = this
      var mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      var params = {}
      if(!mailReg.test(_this.email)) {
        _this.$toast.error('','邮箱格式错误')
        return
      }
      if(!_this.suggestion) {
        _this.$toast.error('','留下你要说的话呀')
        return
      }
      params.email = _this.email
      params.suggestion = _this.suggestion
      Bmob.Cloud.run('MailMe', params,  {
        success: function(result) {
          _this.email = ''
          _this.suggestion = ''
          _this.$toast.success('','发送成功，我会第一时间回复哦！')
        },
        error: function(error) {
          _this.$toast.success('','发送失败了，再试一次嘛！')
        }
      })   
    }
  }
}
</script>
<style lang="less">
@import '../assets/less/color.less';
.mailme {
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  &-header {
    p {
      font-size: 20px;
      color: @mainColor;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  &-form {
    margin-top: 10px;
    &-wrap {
      input, textarea{
        width: 180px;
        background: @mainColor;
        border: none;
        font-size: 14px;
        border-radius: 4px;
        color: #fff;
        line-height: 18px;
        height: 40px;
        padding: 0 5px;
        outline: none;
        margin-bottom: 15px;
        &::-webkit-input-placeholder {
          color: #fff;
          font-size: 14px;
        }
      }
      textarea {
        width: 90%;
        padding-top: 5px;
        height: 80px;
      }
      a {
        cursor: pointer;
        border-radius: 5px;
        text-decoration: none;
        padding: 5px 10px;
        font-size: 18px;
        transition: .3s;
        -webkit-transition: .3s;
        -moz-transition: .3s;
        -o-transition: .3s;
        display: inline-block;
        color: @mainColor;
        border: 2px @mainColor solid;
        &:hover {
          background-color: @mainColor;
          color: #fff;
        }
      }
    }
  }
}
</style>