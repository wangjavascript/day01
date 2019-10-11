<template>
  <div class="box">
    <div class="box-top">
      <div class="dz">
        <div class="dzTitle">收货地址</div>
        <li @click="setDZ(index)" v-for="(item,index) in list[0].dz" :key="index">
          {{item}}
          <span v-if="index==curroDZ">
            <img class="dv" :src="require('../assets/images/check.png')" alt />
          </span>
        </li>
      </div>
      <div class="zf">
        <div class="zfTitle">收货地址</div>
        <li @click="setZF(index)" v-for="(item,index) in list[1].zf" :key="index">
          {{item.name}}
          <img :src="item.iconf" />
          <img :src="require('../assets/images/微信.png')" />
          <span v-if="index==curroZF">
            <img class="dv" :src="require('../assets/images/check.png')" alt />
          </span>
        </li>
      </div>
      <div class="spList">
        <li class="listTitle">商品列表</li>
        <div v-for="(item,index) in crodList" :key="index">
          <div class="left">
            <img :src="item.pic" alt />
          </div>
          <div class="introduce">{{item.name}}</div>
          <div class="right">
            <div>X{{item.count}}</div>
            <div>{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div>总价：￥{{countJa}}</div>
      <div>去支付</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import list from "../data/list.json";
export default {
  data() {
    return {
      list: list,
      curroDZ: 0,
      curroZF: 0
    };
  },
  computed: {
    ...mapState(["countJa", "crodList"])
  },
  methods: {
    setDZ(index) {
      this.curroDZ = index;
    },
    setZF(index) {
      this.curroZF=index
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #eee;
  display: flex;
  flex-direction: column;
}
.box .box-top {
  flex: 1;
  overflow: auto;
}
.dz {
  width: 95%;
  margin: 0 auto;
  background: white;
  padding-left: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
.dz .dzTitle {
  line-height: 50px;
}
.dz li {
  position: relative;
  line-height: 55px;
  border-top: 1px solid #eee;
}
.dz span .dv {
  position: absolute;
  width: 40px;
  right: 40px;
  margin-top: 5px;
}
.zf {
  width: 95%;
  margin: 0 auto;
  background: white;
  padding-left: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
.zf .zfTitle {
  line-height: 40px;
}
.zf li {
  position: relative;
  line-height: 40px;
  border-top: 1px solid #eee;
}
.zf span .dv {
  position: absolute;
  width: 40px;
  right: 40px;
  margin-top: 10px;
}
.box .bottom {
  display: flex;
  width: 100%;
  line-height: 50px;
  background: #556b2f;
  padding-left: 20px;
  color: white;
}
.box .bottom div:first-child {
  width: 70%;
}
.box .bottom div:last-child {
  text-align: center;
  background: #00ff7f;
  width: 30%;
}
.spList {
  width: 95%;
  margin: 0 auto;
  background: white;
  padding-left: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
.spList > .listTitle {
  line-height: 40px;
  padding-left: 10px;
}
.spList > div {
  width: 100%;
  height: 80px;
  display: flex;
}
.spList > div .left {
  flex: 2;
}
.spList > div .introduce {
  flex: 5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 80px;
  padding-left: 10px;
}
.spList > div .right {
  flex: 3;
  line-height: 80px;
  padding-left: 20px;
  display: flex;
  justify-content: space-around;
}
.spList > div .left img {
  width: 80%;
  height: 80%;
  padding-left: 10px;
  padding-top: 10px;
}
</style>