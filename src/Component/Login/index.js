import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
}from "react-router-dom";

class Login extends Component{
	constructor(props){
		super(props)
	}

	// componentDidMount(){
	// 		axios.get("../../data.json").then(res=>{
	// 			console.log(res.data.regist);
	// 			// this.setState({
	// 			// 	looplist:res.data.regist
	// 			// })
	// 		})

	// 	}
	render(){
		return(
			<div id="login">
			
		
				<div className="datu"></div>
				<form>	
					<div className="yi">
						<label>手机号码
						<input type="tel" placeholder="请输入手机号码" maxLength="11" className="shouji"/>
						</label>
					</div>
					<div className="si">
						<label>登录密码
						<input type="tel" placeholder="请输入登录密码" maxLength="11" className="denglu"/>
						</label>
					</div>
					<div className="anniu">
						<button>登录</button>
					</div>
				</form>	
				<div className="wangji">
					<span><NavLink to="/regist" activeClassName="suiyi">去注册</NavLink></span>
				</div>
				<div className="wenzi">
					*买房宝用户请用绑定的手机号作为用户名登录，登录密码不变(点击“忘记密码”可进行重置)。
				</div>
			
			</div>
			)
	}
}

export default Login; 