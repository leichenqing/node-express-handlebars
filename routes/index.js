var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: 'hello express',
		users: [
			{uid: 1, username: '张三'},
			{uid: 2, username: '李四'},
			{uid: 3, username: '王五'},
			{uid: 4, username: '赵六'}
		]
	});
});

module.exports = router;