var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

/*调试模式是mongoose提供的一个非常实用的功能，用于查看mongoose模块对mongodb操作的日志，一般开发时会打开此功能，以便更好的了解和优化对mongodb的操作。*/
mongoose.set('debug', true);

/*一般默认没有user和password*/
var db = mongoose.connect('mongodb://localhost:27017/myDB');

db.connection.on("error", function(error) {
	console.log("数据库连接失败：" + error);
});

db.connection.on("open", function() {
	console.log("数据库连接成功");
});

// 用户
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	username: {
		type: String
	}, //用户账号
	password: {
		type: String
	}, //密码
	userage: {
		type: Number
	}, //年龄
	logindate: {
		type: Date
	}, //最近登录时间
	time: {
		type: String,
		default: Date.now()
	}
});
var MsgSchema = new Schema({
	user: {
		type: String
	}, //用户账号
	tit: {
		type: String
	}, //密码
	cont: {
		type: Number
	}
});
Model = {
	User: mongoose.model('User', UserSchema),
	Msg: mongoose.model('Msg', MsgSchema),
}
module.exports = Model