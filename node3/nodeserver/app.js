var express = require('express'); //加载express模块
var path = require('path'); //路径模块
var favicon = require('serve-favicon'); //请求网页的logo
var logger = require('morgan'); //在控制台中，显示req请求的信息
var cookieParser = require('cookie-parser'); //这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var bodyParser = require('body-parser'); //node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

// 路由信息（接口地址），存放在routes的根目录
var index = require('./routes/index');
var users = require('./routes/users');
var mess = require('./routes/mess');
var app = express();
var Model = require('./modle/model');
// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置视图根目录
app.set('view engine', 'jade'); //设置视图格式（本人不太喜欢用jade，接下来会交大家使用html格式的文件）
// 载入中间件
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//配置路由，（'自定义路径'，上面设置的接口地址）
app.use('/', index);
app.use('/users', users);
app.use('/mess', mess);
// 错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;