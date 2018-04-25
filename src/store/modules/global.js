
import * as types from '../mutation-type'

const state = {
  testStore: ''
}

const actions = {
  testStore({ commit }, params) { // 测试
    commit(types.TEST_STORE, params)
  }
}

const getters = {
  testStore: state => state.testStore // 测试
}

const mutations = {
  [types.TEST_STORE](state, res) {  // 测试
    state.testStore = res
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}