import React,{Component} from "react";
import "./index.scss";
// import "./canvas.js";
import axios from "axios";
import ReactSwipe from "react-swipe";
import {
	NavLink
}from "react-router-dom";
class Home extends Component{
	constructor(prop){
		super(prop);

	}

	componentDidMount() {
		draw(99, Math.PI/2);
	}
	
	render(){
		return(
			<div id="home">
			<div className="all">
				
				<div className="lunbo">
					
				</div>
				<div className="gonggao">
				<p>最新公告：<span>房金贷+部分借款提前还款公告</span></p>
				</div>
				<div className="xiangqing">
				<NavLink to="/detail" activeClassName="suiyi"></NavLink>
				</div>
				<a href="javascript:;" className="tiao"><section className="dong">
					<canvas id="canvas" width="500" height="500"></canvas>
					<span className="up">预期年化收益率</span>
					<span className="down">5.90%</span>
				</section></a>
				<ul>  
					<li>1000元起投</li>
					<li>期限58天</li>
					<li>一次性还本付息</li>
				</ul>
				<div className="dianji">
					<NavLink to="/detail" activeClassName="suiyi">立即投资</NavLink>
				</div>
			</div>
			</div>
			)

	}
}

export default Home;