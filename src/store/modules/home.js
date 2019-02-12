import {fetchGet} from 'fetch'
import API from 'API'
const state = {
    comshow: false,
}

const mutations = {
    switch_dialog(state){//这里的state对应着上面这个state
        // 变更状态
        state.comshow = state.comshow?false:true;
        //你还可以在这里执行其他的操作改变state
    }
}

const actions = {
    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

