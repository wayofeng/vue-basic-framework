
import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'

const sessionStoragePlugin = store => {
    store.subscribe((mutation, state) => {// 每次 mutation 之后调用
        Object.keys(state).forEach((item, index) => {
            window.sessionStorage.setItem(item, JSON.stringify(state[item]))
        })
    })
}

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [sessionStoragePlugin],
    modules: {
        global
    }
})