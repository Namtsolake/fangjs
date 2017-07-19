<?php
namespace app\api\controller;

use think\Controller;
use app\api\Model\UserM;
use app\api\Model\UserInfo;
use think\Cookie;
use think\Session;

class User extends Controller{


//
//注册；
public function regest($username,$psw){
	$user = new UserM;
	$user->data([
	    'username'  => $username ,
	    'psw' => md5($psw)
	]);
	$result = $user->save();
	if(!$result){
		return "保存失败！";
	}
	return "注册成功！";

}
//保存用户信息；
public function saveInfo($user_id="",$username='',$age='',$tel = ""){
	$user = new UserInfo;
	$user->data([
	    'user_id'  => $user_id ,
	    'username'  => $username ,
	    'age'  => $age ,
	    'tel'  => $tel 
	   
	]);
	$result = $user->save();
	if(!$result){
		return "保存失败！";
	}
	return "保存成功！";

}

//登录；
public function login($username='',$psw=''){
	$user = UserM::get(['username' => $username ,"psw" =>md5($psw)]);
	$result = [
		"status"=> 1,
		"msg" => ""
	];
	if(empty($user)){
		$result["status"] = 0;
		$result["msg"] = "登录失败，请检查你的用户名，密码。";
		Cookie::set("username","");
		return json($result);
	}
	// var_dump($user);输出复杂结构的数据类型；
	Cookie::set("username",$username);
	Session::set('user_id',$user->id);
	
	return "登陆成功";

}



//退出登录；

}






?>