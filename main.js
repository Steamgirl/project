import Vue from 'vue'
import App from './App'
import store from './store'
import utils from './utils/http.js'

Vue.config.productionTip = false
Vue.prototype.$http=utils.http
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
