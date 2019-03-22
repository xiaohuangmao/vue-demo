import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  showHeader:true,
  changeNum:0
}
const getters={ //实时监听state值的变化
  isShow(state){  //承载变化的showHeader的值
    return state.showHeader
  },
  getChangeNum(state){  //承载变化的changeNum的值
    return state.changeNum
  }
}
const mutations={
  show(state){
    state.showHeader=true
  },
  hide(state){
    state.showHeader=false
  },
  toggle(state){
    state.showHeader=!state.showHeader
  },
  newNum(state,sum){
    state.changeNum+=sum
  }
}
const actions={
  showHeader({commit,state}){
    commit('show')
  },
  hideHeader({commit,state}){
    commit('hide')
  },
  getNewNum({commit,state},num){
    commit('newNum',num)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
