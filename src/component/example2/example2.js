import example3 from "../example3/example3.vue"
export default {
	console.log(this)
	components:{
		example3
	},
	data(){
		let msg = "Компонента второго уровня";
		return {
			msg: msg,
			title: `Компонент создан в ${new Date().toLocaleString()} `,
			todos: [
				{ id: 0, text: 'Овощи' },
				{ id: 1, text: 'Сыр' },
				{ id: 2, text: 'Что там ещё люди едят?' }
			]
		}
	}
}