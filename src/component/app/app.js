import example1 from "../example1/example1.vue";
import userEntry from "../userEntry/userEntry.vue";
export default {
	name: 'app',
	components: {
		example1,
		userEntry
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}