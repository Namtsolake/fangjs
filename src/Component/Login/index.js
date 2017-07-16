import React,{Component} from "react";
import "./index.scss"

class Login extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="login">
			<div className="all">
				<header>
				<ul>
				<li className="fanhui"><i></i></li>
					<li>登录</li>
					<li className="you zhuce">立即注册</li>
				</ul>
					
				</header>
				<div className="datu"></div>
				<form>	
					<div className="yi">
						<label>手机号码
						<input type="tel" placeHolder="请输入手机号码" maxLength="11" className="shouji"/>
						</label>
					</div>
					<div className="si">
						<label>登录密码
						<input type="tel" placeHolder="请输入登录密码" maxLength="11" className="denglu"/>
						</label>
					</div>
					<div className="anniu">
						<button>登录</button>
					</div>
				</form>	
				<div className="wangji">
					<span><a href="javascript:;">忘记密码？</a></span>
				</div>
				<div className="wenzi">
					*买房宝用户请用绑定的手机号作为用户名登录，登录密码不变(点击“忘记密码”可进行重置)。
				</div>
			</div>	
			</div>
			)
	}
}

export default Login; 