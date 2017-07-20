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
			isShow:false,
			isFirstShow:false
		}
	}
	

	render(){
		return(
			<div id="app">

			<header>
			<p>房金所</p>
			<div id="addIcon" onClick={
				()=>{
					this.setState({
							isShow:!this.state.isShow,
							isFirstShow:true
						})
				}
			}></div>
			<nav className={this.state.isShow?'show':'hide'} 
				style={{display:this.state.isFirstShow?'block':'none'}}
			>
				<ul id="headNav" onClick={()=>{
					this.setState({
						isShow:!this.state.isShow
					})
				}}>
					<li>
						<i className="pic1"></i><a>完善资料</a>
					</li>
					<li>
						<i className="pic2"></i><a>充值</a>
					</li>
					<li>
						<i className="pic3"></i><a>提现</a>
					</li>
				</ul>
			</nav>
			{/*<span>
			<img src="">
			</span>*/}
			</header>

			<section>
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