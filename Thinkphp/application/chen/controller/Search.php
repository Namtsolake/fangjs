<?php
namespace app\chen\controller;
use think\Controller;
use think\Cookie;

class Search extends Controller{
	 protected $beforeActionList = [
        'first',
        'second' =>  ['except'=>'hello'],
        'three'  =>  ['only'=>'hello,data'],
    ];

    protected function first()
    {
        echo 'first<br/>';
    }

    protected function second()
    {
        echo 'second<br/>';
    }

    protected function three()
    {
        echo 'three<br/>';
    }
	public function doit(){
		return("查询ok!");
		
	}

}
?>