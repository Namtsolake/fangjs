<?php
namespace app\cuicui\controller;
use think\Db;

class Cx5//C必须大写，类名这是一个规范；
{
    
    public function hitthewall()
    {
        return '<h1>世上无难事，只要肯撞墙。</h1>';
    }
    public function cuimian($target="自己")
    {
        return '<h1>世上无难事，只要肯撞墙。</h1>'.$target;
    }
    public function insertdatasimple($carname,$price)
    {
    	Db::execute('insert into cars (carname,price) values(?,?)',["cx5",20000]);
        return '<h1>成功</h1>';
    }
    public function selectdatasimple($carname)
    {
    	$list = Db::query('select carname,price,createData from cars where carname=?',[$carname]);
        // return  json ($list);
        return jsonp($list);
    }
    public function selectdatabetter($carname)
    {
    	$list = Db::table("cars")->where("carname",$carname)->column("carname");
        // return  json ($list);
        return jsonp($list);
    }
}
