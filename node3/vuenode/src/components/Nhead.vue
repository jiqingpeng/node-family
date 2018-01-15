<template>
	<div>
		<div class="head">
			<span>{{message}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Nhead",
		props:["message"]
	}
</script>
<style scope="soped" lang="stylus">
	.head
		display flex
		align-items center
		justify-content center
		position fixed
		width 100%
		height 30px
		left 0
		top 0
		background #fff
		z-inde 999
</style>