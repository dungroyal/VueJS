<template>
	<div id="app">
		<CompHeader v-bind:titleHeader="title" />
		<CompListUser v-bind:list_user="list_user"/>
		<CompFooter />
	</div>
</template>

<script>
import CompListUser from './components/CompListUser.vue';
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
export default {
	name: 'app',
	data () {
		return {
			title: 'Hello VueJs',
			list_user:[
				{id:1,name:'Dũng',age:'20'},
				{id:2,name:'Nhân',age:'23'},
				{id:3,name:'Hào',age:'21'},
				{id:4,name:'Chánh',age:'20'},
				{id:5,name:'Huy',age:'20'},
			]
		}
	},
	components: {
		CompHeader,
		CompListUser,
		CompFooter
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
