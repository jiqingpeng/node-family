var express = require('express');
var router = express.Router();
var Model = require('../modle/model')

var responseData;
router.use(function(req, res, next) {
	responseData = {
		code: 0,
		message: ''
	}
	next();
})
var date = new Date(),
	yy = date.getFullYear(),
	MM = date.getMonth() + 1,
	dd = date.getDate(),
	hh = date.getHours(),
	mm = date.getMinutes(),
	ss = date.getSeconds();
//列表
router.get('/msg', function(req, res, next) {
	responseData = [{
		"user": "jqp",
		"tit": "前后端分离与Node和NPM的那些事",
		"url": "http://www.jqpblog.site/2016/08/22/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E4%B8%8ENode%E5%92%8CNPM%E7%9A%84%E9%82%A3%E4%BA%9B%E4%BA%8B/",
		"type": "Node/API",
		"cont": "现在的前端同学如果去面试的话，面试的问题肯定会有你了解前后端分离吗，你了解nodejs吗？在没有了解的时候感觉这是个什么东西，好高大上，去网上查了查资料，再多做几个demo，终于对传说中的前后端分离以及nodejs有了一些了解。 其实在技术这个行业里面没有什么是绝对好的技术也没有什么是过时的差的技术，只要合适的技术在合适的环境下他就是最好的技术，所以我们在学习一些新技术的时候，也不要觉着只要是新技术，是最新最热门的技术就是最好的，其实它也是通过不同的行业背景行业环境以及一些以往的技术慢慢的衍生过度而来的。"
	}, {
		"user": "jqp",
		"tit": "Bootstrap在实际生产开发中的使用心得",
		"url": "http://www.jqpblog.site/2015/12/27/Bootstrap%E5%9C%A8%E5%AE%9E%E9%99%85%E7%94%9F%E4%BA%A7%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97/",
		"type": "Bootstrap/API",
		"cont": "今天有个后台同学问我Bootstrap怎么用，一下给我问的有点懵，我和他说你一个后台的怎么还要写样式了吗？（这不是抢我们前端同学的饭碗吗？）然后我给了他一个www.guanwang.com,他说你直接给我jar包过来吧，然后我想起来他是一个后台同学又给他简单的解释了几句之后，他一句你给我几个demo我也就放弃了对他的说服教育，想想中华的传统美德不就是助人为乐吗，自己正好也总结一下自己在使用Bootstrap的一些心得。"
	}, {
		"user": "jqp",
		"tit": "简单谈谈vue-cli",
		"url": "http://www.jqpblog.site/2016/02/15/%E7%AE%80%E5%8D%95%E8%B0%88%E8%B0%88vue-cli/",
		"type": "Vue/API",
		"cont": "在JavaScript领域，Angular、React.js和vue.js之间的战斗一直在持续升温！为了工作，程序员选择正确的框架和库来构建应用程序是至关重要的(真的重要吗？还不是因为水平高的人不想重复造轮子，水平低的人比如我自己0..0恨不得找个能一键构成项目的框架，不过要是那样的话我们应该也失业了)好在这个框架还是需要开发人员去操作部署的，言归正传说起vue就要简单说一下与vue并驾齐驱的另外俩假马车了对就是大家听说过的Angular和React"

	}]
	res.json(responseData)
})
module.exports = router;