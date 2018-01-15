<template>
	<div>
		<div class="food">
			<router-link class="food-nav" :to="{path:'/'}">主页</router-link>
			<router-link class="food-nav" :to="{path:'/My'}">我</router-link>
		</div>
	</div>
</template>
<script>
	
	export default{
		name:"Nfood",
	}
</script>
<style scope="soped" lang="stylus">
	.food
		display flex
		align-items center
		justify-content center
		position fixed
		width 100%
		height 40px
		left 0
		bottom 0
		background #fff
		z-inde 999
		.food-nav
			width 50%
			text-align center
			
			
</style>