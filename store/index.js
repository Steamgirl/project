import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		agent:{asdas:1},
		userInfo:{},
		code:{}
	},
    mutations: {
		SETAGENT(state, status) {
			state.agent=status
		},
		SETUSERINFO(state, status){
			state.userInfo=status
		},
		SETCODE(state, status){
			state.code=status
		}
	},
    actions: {}
})
export default store