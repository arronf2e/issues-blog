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
          <button>登录</button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        kw: ''
      }
    },
    methods: {
      searchFn() {
        console.log(this.kw)
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
          font-weight: 400;
          color: #fff;
          vertical-align: middle;
          -ms-touch-action: manipulation;
          touch-action: manipulation;
          cursor: pointer;
          outline: none;
          background-image: none;
          background-color: @mainColor;
          border: 1px solid #d7dde4;
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
}
</style>