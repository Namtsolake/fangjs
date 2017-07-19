<?php
namespace app\chen\controller;
use think\Controller;
use think\Cookie;

class Login extends Controller{
	public function lg($username="",$psw = ""){
		cookie::set('name',md5($username));
		return '登录成功!';
	}

}
?>