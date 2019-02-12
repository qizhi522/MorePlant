import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'

import mutations from './mutaions'
import actions from './actions'

Vue.use(Vuex)

const state = {
  username: '',
  headerImg: ''
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    home,
  }
})
