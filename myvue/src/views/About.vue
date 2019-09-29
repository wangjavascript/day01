<template>
  <dir class="gou">
    <div class="content">
      <h3>购物车</h3>
      <div v-if="crodList.length">
        <div class="box" v-for="(item, index) in crodList" :key="index">
          <div class="left">
            <img :src="item.pic" alt srcset />
          </div>
          <div class="right">
            <div>{{item.name}}</div>
            <div>
              单价： ￥
              <span>{{item.price}}</span>
              <div>{{item.count}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="ruguo" v-else>
         <img src="../assets/images/没有更多.png" alt />
         <p>你的购物车还是空的哦!</p>
      </div>
    </div>
    <div class="foot">
      <div class="left">
        <div>总数：{{countNum}}</div>
        <div>总价：{{countJa}}</div>
      </div>
      <div class="right" @click="getFu">去结算</div>
    </div>
  </dir>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["crodList",'countNum','countJa'])
  },
  methods: {
    getFu() {
      this.$router.push({ path: "/fu" });
    }
  }
};
</script>

<style scoped>
.gou {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.gou .content {
  flex: 1;
}
.gou .foot {
  width: 100%;
  height: 50px;
  display: flex;
  text-align: center;
  line-height: 50px;
  color: white;
}
.gou .foot .left {
  width: 75%;
  background: #2f4f4f;
  display: flex;
  justify-content: space-around;
}
.gou .foot .right {
  width: 25%;
  background: #00ff7f;
}
h3 {
  line-height: 40px;
  padding-left: 10px;
}
.box {
  display: flex;
  width: 100%;
  height: 95px;
  margin-top: 10px;
  position: relative;
}
.box .left {
  width: 30%;
}
.box .left img {
  width: 80%;
  padding: 5px;
  margin-left: 5px;
}
.box .right {
  width: 70%;
  line-height: 40px;
  padding-top: 5px;
}
.box .right div:nth-child(1) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box .right div:last-child span {
  color: red;
  font-size: 18px;
}
.ruguo img{
  margin:25px auto;
  padding-left: 135px;
}
.ruguo p{
  text-align: center;
}
</style>