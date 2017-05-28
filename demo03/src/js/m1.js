// import方式引入图片
import pic from '../img/m1.jpg'
let m1 = function () {
	console.log('m1.js')
  document.write("<div class='m1'>m1.js</div>")
  document.write("<img src='"+ pic +"' />")
}
export { m1 }
