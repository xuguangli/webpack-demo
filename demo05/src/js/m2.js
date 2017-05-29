// 使用require方式引入图片
let pic = require('../img/m2.png')
let m2 = function () {
	console.log('m2.js')
  document.write("<div class='m2'>m2.js</div>")
  document.write("<img src='"+ pic +"' />")
}
export { m2 }
