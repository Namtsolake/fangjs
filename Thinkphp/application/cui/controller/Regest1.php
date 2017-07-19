
<?php
namespace app\cui\controller;
use think\Db;

class Regest1//C必须大写，类名这是一个规范；
{
	public function hitthewall()
    {
        return '<h1>世上无难事，只要肯撞墙。</h1>';
    }
    public function insertdatasimple($username,$psw,$email)
    {
    	//差重复
    	
		$data = Db::query('select * from users where username=?',[$username]);
		if($data){
			return '用户名已经存在！';
		}

    	$result = Db::execute('insert into users (username,psw,email) values(?,?,?)',[$username,md5($psw),$email]);
    	if($result){
        	return '<h1>成功</h1>';
    	}
    	return '<h1>失败</h1>';

    }
    
}
?>