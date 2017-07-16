import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
}from "react-router-dom";

class More extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="more">
				<div className="all">
					<div className="zho">
						<div className="datu"></div>
						<div className="yi">
							客服热线<span>10101818 ></span>	
							<p></p>
						</div>
						<div className="er">
							官方微信<span>房金所官微</span>	
							<p></p>
						</div>
						<div className="san">
							官方微博<span>房金所官博</span>	
							<p></p>
						</div>
						<div className="si">
							官方网站<span>www.fangjs.com</span>	
							<p></p>
						</div>
						<div className="wu">
						<NavLink to="/home" activeClassName="suiyi">帮助中心</NavLink><span><a href="javascript:;">></a></span>	
							<p></p>
						</div>
						<div className="liu">
						<NavLink to="/home" activeClassName="suiyi">房金所介绍</NavLink><span><a href="javascript:;">></a></span>	
							<p></p>
						</div>
						<div className="qi"></div>
					</div>	
				</div>
			</div>
			)
	}
}

export default More;