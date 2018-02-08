import Vue from 'vue'
import app from './component/app/App.vue'
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	render: h => h(app)
});
