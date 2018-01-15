<template>
	<div>
		<div class="login">
			<input ref="user" class="user" type="text" placeholder="手机号/邮箱">
			<input ref="password" class="pwd" type="text" placeholder="密码">
			<button @click="login()">登陆</button>
			<router-link :to="{path:'/Registery'}">注册</router-link>
		</div>
	</div>
</template>
<script>
	import  axios  from "axios"
	export default{
		name:"Login",
		methods:{
			login:function(){
				var params = {
					"username":this.$refs.user.value,
					"password":this.$refs.password.value
				};
				let that = this
				axios.post('/api/users/login',params)
			  	.then(function (res) {
			  		if(res.data.code==1){
			  			alert(res.data.message)
			  			return
			  		}
			  		that.$router.push({path:'/My'});
			  	})
			  	.catch(function (res) {
			    	console.log(response);
			  	});
			}
		}
	}
</script>
<style scope="soped" lang="stylus">
	.login
		width 96%
		margin 10% auto 0
		input,button
			width 100%
			height 30px
			margin 3% 0
</style>