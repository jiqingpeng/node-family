		<template>
	<div>
		<div class="register">
			<input ref="user" class="user" type="text" placeholder="手机号/邮箱">
			<input ref="password" class="pwd" type="text" placeholder="密码">
			<button @click="register()">注册</button>
		</div>
	</div>
</template>
<script>
	import  axios  from "axios"
	export default{
		name:"Register",
		methods:{
			register:function(){
				var params = {
					"username":this.$refs.user.value,
					"password":this.$refs.password.value
				};
				let  that =this
				axios.post('/api/users/register',params)
			  	.then(function (res) {
			  		console.log(res)
			  		if(res.data.code==200){
			  			alert(res.data.msg)
			  			that.$router.push({path:'/Login'})
			  		}else{
			  			alert(res.data.msg)
			  		}
			  	})
			  	.catch(function (res) {
			    	console.log(res);
			  	});
			  	
			},
			
		}
	}
</script>
<style scope="soped" lang="stylus">
	.register
		width 96%
		margin 10% auto 0
		input,button
			width 100%
			height 30px
			margin 3% 0
		

</style>