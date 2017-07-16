import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css"
import {
	NavLink
}from "react-router-dom";

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			isShow:false,/*=号和nav一开始为隐藏*/
			isFirstShow:false
		}
	}
	

	render(){
		return(
			<div id="app">

			<header>
			<p>房金所</p>
			{/*<span>
			<img src="">
			</span>*/}
			</header>

			<section>{/*红色header下面的*/}
			{this.props.children}
			</section>

			<footer>
			<ul>
			<li>
			<NavLink to="/home" activeClassName="suiyi">
			<i className="iconfont icon-viewgallery"></i>
			首页</NavLink>
			</li>
			<li>
			<NavLink to="/investmentprojects" activeClassName="suiyi">
			<i className="iconfont icon-trade"></i>投资项目</NavLink></li>
			<li>
			<NavLink to="/login" activeClassName="suiyi">
			<i className="iconfont icon-account"></i>我的账户</NavLink></li>
			<li>
			<NavLink to="/more" activeClassName="suiyi">
			<i className="iconfont icon-originalimage"></i>更多</NavLink></li>
			</ul>
			</footer>
			</div>
			)
	}
}

export default App;