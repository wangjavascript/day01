<template>
  <div class="home">
    <div class="header">
      <div class="tou">
        <img src="../assets/images/avatar-1.jpg" alt />
      </div>
    </div>
    <div class="text">
      <div class="title">爱时尚精品屋</div>
      <p>公告：欢迎光临,流行爆款库存有限请尽早下单,谢谢</p>
    </div>
    <div class="nav">
      <span
        :class="countter===index?'active':''"
        @click="setSort(index)"
        v-for="(item,index) in navList"
        :key="index"
      >{{item}}</span>
    </div>
    <div class="content">
      <div class="box" v-for="(item, index) in list" :key="index">
        <div class="left">
          <img :src="item.pic" alt srcset />
        </div>
        <div class="right">
          <div>{{item.name}}</div>
          <div>已售：{{item.buyCount}}件</div>
          <div>
            单价： ￥
            <span>{{item.price}}</span>
          </div>
        </div>
        <div class="addShop" @click="setCard(item)">加入购物车</div>
        <div @click="routerCard" class="card">
          <div class="DivLeng">{{countNum}}</div>
          <img src="../assets/images/cart.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations,mapState } from 'vuex'

export default {
  data() {
    return {
      list: [],
      countter: 0,
      navList: ["价格升序↑", "价格降序下↓", "销量升序↑", "销量降序↓"]
    };
  },
  mounted() {
    axios.get("https://yantianfeng.com/api/goodList").then(({ data }) => {
      this.list = data.goodList;
    });
  },
  computed: {
    ...mapState(['crodList','countNum'])
  },
  methods: {
    routerCard(){
      this.$router.push({path:'/about'})
    },
    setSort(index) {
      this.countter = index;
      if (index === 0) {
        this.list.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (index === 1) {
        this.list.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (index === 2) {
        this.list.sort((a, b) => {
          return a.buyCount - b.buyCount;
        });
      } else {
        this.list.sort((a, b) => {
          return b.buyCount - a.buyCount;
        });
      }
    },
     ...mapMutations(['addCrodList']),
    setCard(val) {
      this.addCrodList(val)
    }
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.home .header {
  height: 200px;
  background-image: url("../assets/images/banner-2.png");
  background-position-x:center; 
  background-size: cover;
  position: relative;
}
.home .tou {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: -30px;
  left: 50%;
  margin-left: -40px;
}
.home .tou img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.home .text {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.home .text .title {
  font-size: 22px;
  font-weight: bold;
  line-height: 50px;
}
.home .nav {
  margin-top: 20px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
}
.home .nav .active {
  color: red;
}
.home .content {
  margin-top: 20px;
}
.home .content .box {
  display: flex;
  width: 100%;
  height: 95px;
  margin-top: 10px;
  position: relative;
}
.home .content .box .left {
  width: 30%;
}
.home .content .box .left img {
  width: 80%;
  padding: 5px;
  margin-left: 5px;
}
.home .content .box .right {
  width: 70%;
  line-height: 25px;
  padding-top: 5px;
}
.home .content .box .right div:nth-child(1) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.home .content .box .right div:last-child span {
  color: red;
  font-size: 18px;
}
.home .content .box .addShop {
  position: absolute;
  color: white;
  padding: 5px 10px;
  background: red;
  bottom: 5px;
  right: 5px;
}
.home .addShop:active {
  opacity: 0.3;
}
.home .card {
  position: fixed;
  right: 10px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #00bfff;
}
.home .card .DivLeng{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  color: white;
  text-align: center;
  line-height: 20px;
  position: absolute;
  right: 1px;
  top:-7px;
}
.home .card img {
  width: 60%;
  margin: 13px;
}
</style>
