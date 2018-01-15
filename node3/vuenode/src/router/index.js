import Vue from 'vue'
import Router from 'vue-router'
import Nhead from '@/components/Nhead'
import Nfood from '@/components/Nfood'
import My from '@/components/My'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home
	}, {
		path: '/Login',
		name: 'Login',
		component: Login
	}, {
		path: '/Nhead',
		name: 'Nhead',
		component: Nhead
	}, {
		path: '/Nfood',
		name: 'Nfood',
		component: Nfood
	}, {
		path: '/My',
		name: 'My',
		component: My
	}, {
		path: '/Login',
		name: 'Login',
		component: Login
	}, {
		path: '/Registery',
		name: 'Register',
		component: Register
	}]
})