<template>
	<div>
		<Nhead :message="message"></Nhead>
		<router-link :class="{ active: isLog }" :to="{path:'/Login'}">
			<div class="my-item">
				<img src="" alt="">
				<span>登陆/注册</span>
				<span>></span>
			</div>
		</router-link>
		<div class="my-item" :class="{ active: !isLog }">
			<span>{{user}}</span>
			<span>></span>
		</div>
		<button class="my-item logout" @click="logout()">退出</button>
		<Nfood></Nfood>
	</div>
</template>
<script>
	import axios from "axios"
	import Nhead from '@/components/Nhead'
	import Nfood from '@/components/Nfood'
	export default{
		name:"My",
		data(){
			return{
				message:"我",
				user:"",
				isLog:false
			}
		},
		created(){
			this.checkLogin();
		},
		methods:{
			checkLogin(){
				let that = this
				axios.get('/api/users/checkLogin')
			  	.then(function (res) {
			  		console.log(res)
			  		if(res.data.code==200){
			  			that.user=res.data.message.username
			  			that.$nextTick(function () {
                			that.isLog=true // => '更新完成'
              			})
			  		}
			  	})
			  	.catch(function (res) {
			    	console.log(res);
			  	});
			},
			logout(){
				let that = this
				axios.get('/api/users/logout')
			  	.then(function (res) {
			  		console.log(res)
			  		if(res.data.code==200){
			  			that.isLog=false;
			  			that.checkLogin();
			  		}else{
			  			that.isLog=true;
			  		};
			  	})
			  	.catch(function (res) {
			    	console.log(res);
			  	});
			}
		},
		components:{
			Nhead,
			Nfood
		}
	}
</script>
<style scope="soped" lang="stylus">
	.my-item
		width 100%
		height 40px
		display flex
		align-items center
		justify-content space-between
	.logout
		justify-content center
	.active
		display none
</style>