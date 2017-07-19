<?php
namespace app\api\controller;

use think\Controller;
use think\Session;
use think\Db;
use app\api\Model\ShopcartM;

class Shopcart extends Controller{
	 public function _initialize(){
    	$user_id = Session::get("user_id");
    	// echo $user_id;
		if(empty($user_id)){
			$this->redirect('/Thinkphp/public/login.html',302);
		}
        
    }

//增加商品：
	public function addshop($goods_id='', $count=''){
		$user_id = Session::get("user_id");
	
		$shopcart = new ShopcartM;

		//添加购物车的时候，要检查商品是不是在购物车；
		//购物车没有此商品则 添加；
		//购物车有次商品则更新数据；
		$data = ShopcartM::get(['user_id' => $user_id,'goods_id' => $goods_id]);
		if(empty($data)){
			$shopcart->data([
	    		'goods_id' =>  $goods_id,
	    		'count' =>  $count
			]);
			$result = $shopcart->save();
		}else{
			$data->count= $data->count+intval($count);
			$result = $shopcart ->save();
		}
		if(!$result){
			return "添加购物车失败！";
		}
		return "添加购物车成功！";

	}

	public function cartlist(){
		$user_id = Session::get("user_id");

		$goodsM = new ShopcartM;
		// $info = GoodsM::get(['id' => $id]);
		$info = Db::query('SELECT  a.*, b.price,b.description ,b.name
					FROM `shopcart`AS `a`,`goods`AS`b`
					WHERE a.goods_id = b.id AND a.user_id=?',[$user_id]);
		// echo $user_id;
		var_dump($info);
		
		$result = [
			"status"=> 1,
			"msg" => ""
		];
		if(empty($info)){
			$result["status"] = 0;
			$result["msg"] = "您收藏的商品已过期！";
			return json($result);
		}
		// var_dump($info);//输出复杂结构的数据类型；
	
		$result["cartlist"] = $info;
		// return json($result);

	}

}

