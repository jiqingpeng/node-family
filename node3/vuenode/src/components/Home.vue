<template>
	<div>
		<Nhead :message="message"></Nhead>
		<ul class="msg">
			<li v-for="item in items">
				<p class="msg-nav">
						<span>{{ item.user }}</span>
						<span>{{ item.type }}</span>
				</p>
				<a :href="item.url">
					<p class="msg-tit">
						<span>{{ item.tit }}</span>
					</p>
					<p class="msg-cont">{{ item.cont }}</p>
				</a>
		    </li>
		</ul>
  		<div class="message" :class="{ active: isLog }">
  			<span>还没有登录，快去我里面登录吧</span>
  		</div>
		<Nfood></Nfood>
	</div>
</template>
<script>
	import axios from "axios"
	import Nhead from '@/components/Nhead'
	import Nfood from '@/components/Nfood'
	export default{
		name:"Home",
		data(){
			return{
				message:"主页",
				user:"",
				items:[],
				isLog:false
			}
		},
		created(){
			this.getLogin();
		},
		methods:{
			getLogin(){
				let that = this
				axios.get('/api/users/checkLogin')
			  	.then(function (res) {
			  		console.log(res)
			  		if(!(res.data.code==3)){
			  			that.getList();
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
			  		if(res){
			  			that.$router.push({path:'/Login'});
			  		}
			  	})
			  	.catch(function (res) {
			    	console.log(res);
			  	});
			},
			getList(){
				let that = this
				axios.get('/api/mess/msg')
			  	.then(function (res) {
			  		console.log(res)
			  		that.items=res.data
			  	})
			  	.catch(function (res) {
			    	console.log(res);
			  	});
			},
		},
		components:{
			Nhead,
			Nfood
		}
	}
</script>
<style scope="soped" lang="stylus">
	.active
		display none
	.msg
		width 94%
		padding 0 3%
		p
			margin-top 10px
		.msg-nav
			display flex
			align-items center
			justify-content space-between
		.msg-tit
			display flex
			align-items center
			justify-content center
	.message
		display flex
		align-items center
		justify-content center
</style>