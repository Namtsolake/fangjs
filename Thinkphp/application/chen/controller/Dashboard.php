<?php
namespace app\chen\controller;
use think\Controller;
use think\Cookie;

class Dashboard extends Controller{
	public function _initialize(){
		if (Cookie::get('name')!=md5("cuic")) {
			$this->redirect("https://www.baidu.com/",302);//重定向；
		}
	}
	public function main(){
		
		return "这是一些机密的数据";
	}

}
?>