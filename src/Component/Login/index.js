import React,{Component} from "react";
import ReactDOM from 'react-dom';
import "./index.scss";
import {
	NavLink
}from "react-router-dom";
import {Link,browserHistory} from "react-router";
// import biaodan from "./js.js";
class Login extends Component{
	constructor(props){
		super(props);
		this.login = this.login.bind(this);
	}
	

	login(){
		fetch('/api/user/login', {
			headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			  },
			credentials: 'include',
		  method: 'POST',
		  body: "username=" + this.refs.username.value+"&psw="+ this.refs.psw.value
		}).then(function(res){
			return res.text();
		}).then((data)=>{
			console.log(data);
			if(data ==="登陆成功"){
				this.props.history.push('/myaccount');
			}
		})
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
						<input type="tel" placeholder="请输入手机号码" ref="username" maxLength="11" className="shouji" onBlur={this.chkvalue.bind(this)}/>
						</label>
						<p className="ts1">请填写用户名</p>
					</div>
					<div className="si">
						<label>登录密码
						<input type="password" placeholder="请输入登录密码" ref="psw" maxLength="11" className="denglu"  onBlur={this.chkvalue1.bind(this)}/>
						</label>
						<p className="ts2">请填写密码</p>
					</div>
					<div className="anniu">
						<button onClick = {this.login}>登录</button>
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
	 chkvalue() {
	 	var zj=/^1[34578]\d{9}$/;
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var username=document.querySelector(".shouji").value;
	 	var psw=document.querySelector(".denglu").value;
	 	// if(username==""){alert("文本框里必须填写内容!");}
	 	if(username==""||zj.test(username)==false){
	 	   document.querySelector(".ts1").style.display='block';
	 	}else{
	 	    document.querySelector(".ts1").style.display='block';
	 	    document.querySelector(".ts1").innerHTML='true'
	 	}
	 	// if(psw==""||mm.test(psw)==false){
	 	//     document.querySelector(".ts2").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts2").style.display='block';
	 	//     document.querySelector(".ts2").innerHTML='true'
	 	// }
	}
	 chkvalue1() {
	 	// var zj=/^1[0-9]{10}$/;
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	// var username=document.querySelector(".shouji").value;
	 	var psw=document.querySelector(".denglu").value;
	 	// if(username==""){alert("文本框里必须填写内容!");}
	 	
	 	if(psw==""||mm.test(psw)==false){
	 	    document.querySelector(".ts2").style.display='block';
	 	}else{
	 	    document.querySelector(".ts2").style.display='block';
	 	    document.querySelector(".ts2").innerHTML='true'
	 	}
	}

}

export default Login; 