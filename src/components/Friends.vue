<template>
  <div class="friend">
    <div class="friend-wrap" v-for="friend in friends">
      <a :href="friend.url" target="_blank">
        <div class="avatar">
          <img :src="friend.avatar" alt="">
        </div>
        <div class="info">
          <p class="name">{{ friend.name }}</p>
          <p class="des">{{ friend.des }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
const friends = [
  {
    avatar: 'http://www.duang7.com/img/avatar.jpg',
    name: 'RainWalker',
    des: '只吹牛逼不懂技术!',
    url: 'http://www.duang7.com/'
  }, {
    avatar: 'http://tva2.sinaimg.cn/crop.0.0.349.349.180/624f9882jw1eauqmjnvloj209q09qaab.jpg',
    name: '颜海镜',
    des: '90后一枚，活跃在各个技术社区，常以歪脖无脸男作为头像，专注Web前端',
    url: 'http://yanhaijing.com/'
  }
]
export default {
  data () {
    return {
      friends: friends
    }
  },
  methods: {
    
  }
}
</script>
<style lang="less">
.friend {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  &-wrap {
    margin-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    a {
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      -webkit-flex-direction: row;
      text-decoration: none;
      color: #333;
      .avatar {
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      .info {
        padding-left: 10px;
        .name {
          font-size: 14px;
        }
        .des {
          padding: 5px 0;
          font-size: 12px;
        }
      }
    }
  }
}
</style>