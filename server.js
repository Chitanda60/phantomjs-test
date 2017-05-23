
/**
 * plantomjs
 */

/**
 * 传递参数
 */
// var system = require('system')
// if (system.args.length === 1) {
// 	console.log('Try to pass args when invoking this.scripts')
// } else {
// 	system.args.forEach(function(arg, i) {
// 		console.log(i + ': ' + arg)
// 	})
// }

// phantom.exit()

/**
 * 页面快照
 */
// var page = require('webpage').create()
// page.open('https://baidu.com/', function() {
// 	page.render('zhixia.png')
// 	phantom.exit()
// })

/**
 * 参数计量
 */
// var page = require('webpage').create()
// var system = require('system')
// var t, address

// if (system.args.length === 1) {
// 	console.log('Usage: loadspeed.js <some URL>')
// 	phantom.exit()
// }

// t = Date.now()
// address = system.args[1]
// page.open(address, function(status) {
// 	if (status !== 'success') {
// 		console.log('Fail to load the address')
// 	} else {
// 		t = Date.now() - t
// 		console.log('Loading time ' + t + 'msec')
// 	}
// 	phantom.exit()
// })

/**
 * 代码运算
 * evaluate()运行在沙箱中无法读取所属页面上下文之外的js对象和变量
 */
// var page = require('webpage').create()
// var system = require('system')
// var address

// if (system.args.length === 1) {
// 	console.log('Usage: loadspeed.js <some URL>')
// 	phantom.exit()
// }

// address = system.args[1]

// page.onConsoleMessage = function(msg) {
// 	console.log('Page title is ' + msg)
// }

// page.open(address, function(status) {
// 	if (status !== 'success') {
// 		console.log('Fail to load the address')
// 	} else {
// 		var title  = page.evaluate(function() {
// 			// evaluate内部代码的控制台信息默认不会显示
// 			console.log(document.title)
// 		})
// 	}
// 	phantom.exit()	
// })

/**
 * dom操作
 */
var page = require('webpage').create()
console.log('The default user agent is ' + page.settings.userAgent)
// 当前页面请求资源时追踪请求和响应
page.onResourceRequested = function(request) {
	// console.log('Request' + JSON.stringify(request, undefined, 4))
}
page.onResourceReceived = function(response) {
	// console.log('Receive' + JSON.stringify(response, undefined, 4))
}
page.open('https://baidu.com', function(status) {
	if (status !== 'success') {
		console.log('Unable to access network')
	} else {
		var ua = page.evaluate(function() {
			return document.getElementById('su').value
		})
		console.log(ua)
	}
	phantom.exit()
})










