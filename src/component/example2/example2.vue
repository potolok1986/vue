<template lang="pug">
	div
		h3(v-bind:title="title") {{msg}}
		ol
			example3(v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id")

</template>
<script src="./example2.js"></script>