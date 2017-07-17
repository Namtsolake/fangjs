import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
}from "react-router-dom";

class Myder extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="myder">
				<div className="all">

						<div className="datu1">
							<span></span>
							<h1>我是谁</h1>
							<p>房金所是国内安全运营超过2年的</p>
							<p>互联网金融信息服务平台</p>
							<p>为投资人提供安全、透明、便捷的</p>
							<p>优选投资项目</p>
						</div>
						<div className="datu2">
							<span></span>
							<h1>我的成绩</h1>
							<p>中国互联网金融协会首批会员单位。</p>
							<p>2016互联网金融领先企业十强。</p>
							<p>2015互联网金融公司"投资者保护杰出贡献奖"。</p>
							<p>运营2周年累计成交额20亿+。</p>
						</div>
						<div className="datu3">
							<span></span>
							<h1>我的愿景</h1>
							<p>顺应互联网高速发展和金融改革发展的步</p>
							<p>伐，打造国内具有金融</p>
							<p>专业实力、互联网搞笑运营的互联网</p>
							<p>金融信息服务平台</p>
						</div>
						<ul className="datu4">
							<li><a href="#">房金所官博</a></li>
							<li><a href="#">房金所官微</a></li>
						</ul>
						<div className="kong"></div>
				</div>	
			</div>
			)
	}
}

export default Myder; 