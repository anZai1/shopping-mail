import Vue from "vue"
import Vuex from "vuex"

import {actions} from "./actions"
import {getters} from "./getters"
import {mutations} from "./mutations"


Vue.use(Vuex)

const state={

}
const store=new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{}
})

export default store