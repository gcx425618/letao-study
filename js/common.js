$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});
// 全局配置
var APP = {
	baseUrl:'http://fullstack.net.cn:3000';
}

$.fn.serializeToJson = function () {

	var formAry = this.serializeArray();

	// var result = {username:'zhangsan', password:123123}
	var result = {};

	formAry.forEach(function (item) {
		result[item.name] = item.value;
	});

	return result;

}
