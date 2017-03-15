<template>
  <nav class="g-nav">
    <div class="g-nav-wrap">
      <div class="g-nav-wrap-l">
        <a href="/" class="g-nav-wrap-l-logo"><img src="../assets/imgs/logo.png" alt=""></a>
        <div class="nav-list">
          <router-link to="/" active-class="current" exact>
            <span>首页</span>
          </router-link>
          <router-link to="/about" active-class="current" exact>
            <span>关于</span>
          </router-link>
        </div>
      </div>
      <div class="g-nav-wrap-r">
        <div class="search">
          <img src="../assets/imgs/search.png" alt="">
          <input type="text" placeholder="按回车搜索哦" @keyup.enter="searchFn" v-model="kw"/>
        </div>
        <div class="user">
          <button @click="showModal">登录</button>
        </div>
      </div>
    </div>
    <vodal :show="show" animation="rotate" @hide="show = false">
      <div class="modal">
        <h2 class="modal-title">{{ !signup ? '登录' : '注册'}}</h2>
        <div class="modal-content">
          <div v-if="!signup">
            <div class="input-wrap">
              <input type="text" placeholder="昵称" v-model="signinName"/>
            </div>
            <div class="input-wrap">
              <input type="password" placeholder="密码" v-model="signinPwd"/>
            </div>
          </div>
          <div v-else>
            <div class="input-wrap">
              <input type="text" placeholder="昵称" v-model="signupName" />
            </div>
            <div class="input-wrap">
              <input type="email" placeholder="邮箱" v-model="signupEmail"/>
            </div>
            <div class="input-wrap">
              <input type="password" placeholder="密码" v-model="signupPwd"/>
            </div>
            <div class="input-wrap">
              <input type="password" placeholder="重复密码" v-model="signupRepwd"/>
            </div>
          </div>
          <div class="button-wrap" v-if="signup">
            <a href="javascript:;" class="signin-btn" @click="signupConfirm">
              确认注册
            </a>
            <a href="javascript:;" class="signin-btn" @click="signinFn">
              直接登录
            </a>
          </div>
          <div v-else>
            <div class="button-wrap">
              <a href="javascript:;" class="signin-btn" @click="signinConfirm">
                立即登录
              </a>
            </div>
            <div class="button-wrap">
              <a href="javascript:;" class="signin-btn" @click="signupFn">
                我要注册
              </a>
            </div>
          </div>
        </div>
      </div>
    </vodal>
  </nav>
</template>
<script>
import { mapState,mapActions } from 'vuex'
import Cookies from 'js-cookie'
export default {
  mounted () {
    var id = Cookies.get('id')
    console.log(id)
  },
  data() {
    return {
      kw: '',
      show: false,
      signup: false,
      signinName: '',
      signinPwd: '',
      signupName: '',
      signupEmail: '',
      signupPwd: '',
      signupRepwd: ''
    }
  },
  computed: {
    ...mapState({
      loginFailed: ({user}) =>user.loginFailed,
      userInfo: ({user}) =>user.userInfo
    })
  },
  watch: {
    loginFailed(val) {
      this.$toast.error('','账号或者密码错误')
    }
  },
  methods: {
    ...mapActions(['signUp', 'signIn']),
    searchFn() {
      
    },
    showModal() {
      if(!this.show) {
        this.show = true
        this.signup = false
      }
    },
    signupFn() {
      this.signup = true
    },
    signinFn() {
      this.signup = false
    },
    signinConfirm() {
      if(!this.signinName || !this.signinPwd) {
        this.$toast.error('','请填写完整信息')
        return
      }
      var params  = {
        "username": this.signinName,
        "password": this.signinPwd
      }
      this.signIn(params)
    },
    signupConfirm() {
      var mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!this.signupName || !this.signupRepwd || !this.signupEmail || !this.signupPwd) {
        this.$toast.error('','请填写完整信息')
        return
      }
      if(!mailReg.test(this.signupEmail)) {
        this.$toast.error('','邮箱格式错误')
        return
      }
      if(this.signupPwd != this.signupRepwd) {
        this.$toast.error('','两次密码输入不一致')
        return
      }
      var params  = {
        "username": this.signupName,
        "password": this.signupRepwd,
        "email": this.signupEmail
      }
      this.signUp(params)
    }
  }
}
</script>
<style lang="less">
@import '../assets/less/color.less';
.g-nav {
  height: 60px;
  background: @mainColor;
  box-shadow: 0 1px 2px rgba(0,0,0,.05);
  color: #fff;
  &-wrap {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    &-l {
      line-height: 60px;
      flex: 3;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      &-logo {
        display: block;
        width: 48px;
        height: 48px;
      }
      .nav-list {
        margin-left: 50px;
        display: flex;
        flex-direction: row;
        a {
          display: flex;
          align-items: center;
          color: #fff;
          text-decoration: none; 
          padding: 0 24px;
          font-size: 18px;
          img {
            width: 28px;
            height: 28px;
          }
        }
        .current {
          &:after {
            content: "";
            position: absolute;
            height: 3px;
            left: 24px;
            right: 24px;
            bottom: 0;
            border-radius: 3px;
            background: #eded63;
          }
        }
      }
    }
    &-r {
      flex: 2;
      display: flex;
      flex-direction: row;
      .search {
        width: 80%;
        text-align: right;
        line-height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img {
          width: 15px;
          height: 15px;
          margin-right: -24px;
        }
        input {
          width: 180px;
          background: hsla(0,0%,100%,.25);
          border: none;
          font-size: 16px;
          border-radius: 4px;
          color: #fff;
          line-height: 18px;
          height: 40px;
          padding: 0 14px 0 40px;
          outline: none;
          &::-webkit-input-placeholder {
            color: #fff;
            font-size: 14px;
          }
        }
      }
      .user {
        width: 20%;
        line-height: 58px;
        text-align: right;
        button {
          display: inline-block;
          margin-bottom: 0;
          font-weight: 600;
          color: #fff;
          vertical-align: middle;
          -ms-touch-action: manipulation;
          touch-action: manipulation;
          cursor: pointer;
          outline: none;
          background-image: none;
          background-color: @mainColor;
          border: 2px solid #d7dde4;
          white-space: nowrap;
          line-height: 1.5;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          padding: 5px 15px;
          font-size: 12px;
          border-radius: 4px;
          transform: translate3d(0,0,0);
          transition: color .2s linear,background-color .2s linear,border .2s linear;
        }
      }
    }
  }
  .vodal-dialog {
    width: 300px !important;
    height: auto !important;
    margin: auto !important;
    border-radius: 12px;
    padding: 25px;
    box-sizing: border-box;
    position: relative;
    top: 90px;
    .modal {
      .modal-title {
        font-size: 20px;
        text-align: center;
        color: #000;
      }
      .modal-content {
        color: #f0f0f0;
        margin-top: 16px;
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
        .input-wrap {
          &:not(first-child) {
            margin-top: 18px;
          }
          input {
            width: 100%;
            height: 44px;
            padding: 0 14px;
            background: #f4f7f7;
            border-radius: 4px;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            -o-appearance: none;
            -ms-appearance: none;
            appearance: none;
            box-sizing: border-box;
            border: none;
            font-size: 15px;
          }
        }
        .button-wrap {
          .signin-btn {
            text-decoration: none;
            margin-top: 18px;
            background: @mainColor;
            color: #fff;
            display: inline-block;
            width: 100%;
            height: 40px;
            font-size: 15px;
            line-height: 40px;
            border-radius: 4px;
            &:hover {
              -webkit-transform: translateY(-1px);
              -ms-transform: translateY(-1px);
              transform: translateY(-1px);
              box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }
  }
}
</style>