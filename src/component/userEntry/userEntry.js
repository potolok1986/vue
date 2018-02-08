export default {
	data(){
		return {
			msg: `message`,
			userMsg: `user message`
		}
	},
	methods: {
		addMessage: function () {
			this.msg = this.userMsg;
			this.userMsg = null;
		}
	}
}