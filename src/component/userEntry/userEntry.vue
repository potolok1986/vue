<template  lang="pug">
	div
		p {{msg}}
		button(v-on:click="addMessage") click
		p введенное значение {{userMsg}}
		input(v-model="userMsg")
</template>

<script src="./userEntry.js"></script>