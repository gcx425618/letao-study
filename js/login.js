$(function () {
	// 1.为登录添加点击事件
	// 2.获取用户输入的信息
	// 3.验证格式
	// 4.发送请求
	// 
	// 当登录按钮被电机的时候
	$('#loginBtn').on('click',function () {
		// 获取表单数据
		var result = $('#loginForm').serializeToJson();
		console.log(result);

		if (!$.trim(result.username)) {
			alert('请输入用户名');
			return;
		}

		if (!$.trim(result.password)) {
			alert('请输入用户名');
			return;
		}

		$.ajax({
			type:'post',
			url: `${APP.baseUrl}/employee/employeeLogin`,
			data: result,
			success:function (response) {
				if (response.success) {
					location.href = 'user.html';
				}else {
					alert(response.message);
				}
			}
		})
	});
});