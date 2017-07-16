import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
}from "react-router-dom";

class Regist extends Component{
	constructor(prop){
		super(prop)
	}

	render(){
		return(
	<div id="regist">
		<div className="all">

			<div className="zho">
				<div className="datu"></div>
				<form>	
					<div className="yi">
						<label>手机号码
						<input type="tel" placeHolder="请输入手机号码" maxLength="11" className="shouji"/>
						</label>
					</div>
					<div className="er">
						<label>图形验证码
						<input type="text" placeHolder="请输入图形验证码" className="tuxing"/>
						</label>
					</div>
					<div className="san">
						<label>验证码
						<input type="text" placeHolder="请输入验证码"  className="yanzheng"/>
						</label>
					</div>
					<div className="si">
						<label>登录密码
						<input type="password" placeHolder="请输入登录密码" maxLength="11" className="denglu"/>
						</label>
					</div>
					<div className="wu">
						<label>确认密码
						<input type="password" placeHolder="请确认登录密码" maxLength="11" className="queren"/>
						</label>
					</div>
					<div className="liu">
						<label>邀请码
						<input type="text" placeHolder="请输入邀请码（选填）" className="yaoqing"/>
						</label>
					</div>
					<p className="yaoqiu">
						*8-20个字符（字母、数字），区分大小写
					</p>
					<p className="zhijie">
					已有账号，<NavLink to="/login" activeClassName="suiyi"><span>直接登录></span></NavLink>
					</p>
					<div className="anniu">
						<button>提交注册</button>
					</div>
				</form>	
				<div className="xieyi">
					<span className="aa">
					<NavLink to="/home" activeClassName="suiyi">注册代表同意</NavLink>
					</span> 
					<span className="ab">
					<NavLink to="/home" activeClassName="suiyi">《房金所平台服务协议》</NavLink>
					</span>、
					<span className="ac">
					<NavLink to="/home" activeClassName="suiyi">《新浪支付服务使用协议》</NavLink>
					</span>、
					<span className="ad">
					<NavLink to="/home" activeClassName="suiyi">《上海华瑞银行资金存管三方协议》</NavLink>
					</span>
				</div>
		</div>
	</div>
</div>
			)
	}
}

export default Regist;