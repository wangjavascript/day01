import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    crodList: [], //购物车
    countNum: 0,  //数量
    countJa: 0   //总价
  },
  mutations: {
    addCrodList(state, paly) {
      var findIndex = state.crodList.find((item) => {
        return paly.id == item.id
      })
      if (!findIndex) {
        //paly.count = 1;
        Vue.set(paly, 'count', 1)
        state.crodList.push(paly)
      } else {
        findIndex.count++
      }
      state.countNum = state.crodList.reduce((t, i) => {
        return t + i.count
      }, 0)
      state.countJa = state.crodList.reduce((t, i) => {
        return t + i.count * i.price
      }, 0)
    },
    setNumAdd(state, paly) {
      var findIndex = state.crodList.find((item) => {
        return paly == item.id
      })
      if (findIndex && findIndex.count < 5) {
        findIndex.count++
      }
      state.countNum = state.crodList.reduce((t, i) => {
        return t + i.count
      }, 0)
      state.countJa = state.crodList.reduce((t, i) => {
        return t + i.count * i.price
      }, 0)
    },
    setNumSub(state, paly) {
      var findIndex = state.crodList.find((item) => {
        return paly == item.id
      })
      if (findIndex && findIndex.count > 1) {
        findIndex.count--
      }
      state.countNum = state.crodList.reduce((t, i) => {
        return t + i.count
      }, 0)
      state.countJa = state.crodList.reduce((t, i) => {
        return t + i.count * i.price
      }, 0)
    }
  },
  actions: {

  }
})
