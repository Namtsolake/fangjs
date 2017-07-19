<?php
namespace app\api\controller;

use think\Controller;
use think\Db;
use app\api\Model\UserM;
use app\api\Model\UserInfo;
use app\api\Model\GoodsM;
use think\Cookie;

class Goods extends Controller{
//增加商品：
	public function add($name='', $price='', $description=''){

		// 获取表单上传文件 例如上传了001.jpg
	    $file = request()->file('img');
	    // 移动到框架应用根目录/public/uploads/ 目录下
	    $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
	    if($info){
	        // 成功上传后 获取上传信息
	        // 输出 jpg
	        echo $info->getExtension();
	        // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
	        echo $info->getSaveName();
	        // 输出 42a79759f284b767dfcb2a0197904287.jpg
	        echo $info->getFilename(); 
	    }else{
	        // 上传失败获取错误信息
	        echo $file->getError();
	        return "图片上传失败！！";
	    }

	    $img = "/Thinkphp/public/uploads/" . $info->getSaveName();


		$goods = new GoodsM;
		$goods->data([
    		'name' =>  $name,
    		'price' =>  $price,
    		'description' => $description,
    		'img' =>  $img
		]);
		
		$result = $goods->save();
		if(!$result){
			return "商品信息保存失败！";
		}
		return "商品保存成功！";

	}

	public function queryShop($id=''){
		$goodsM = new GoodsM;
		// $info = GoodsM::get(['id' => $id]);
		$info = Db::query('select * from goods  where id=?',[$id]);
		// var_dump($info[0]);
		$result = [
			"status"=> 1,
			"msg" => ""
		];
		if(empty($info)){
			$result["status"] = 0;
			$result["msg"] = "您查询的产品不存在，或者已经下架";
			return json($result);
		}
		// var_dump($user);输出复杂结构的数据类型；
	
		$result["goods"] = $info[0];
		return json($result);

	}

}


?>