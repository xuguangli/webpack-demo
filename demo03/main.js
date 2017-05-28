import { m1 } from './src/js/m1.js'
import { m2 } from './src/js/m2.js'
// 两种引入css的方式都可以
import './src/css/m1.css'
require('./src/css/m2.css')
// http://robin-front.github.io/2016/04/08/babel-loader%E9%85%8D%E7%BD%AE/
let main = function () {
	console.log('main.js')
	document.write("<h1>main.js</h1>")
	m1()
	m2()
}
main()
