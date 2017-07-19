import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
}from "react-router-dom";

class Regist extends Component{
	constructor(prop){
		super(prop)
		this.regist = this.regist.bind(this);

	}
	regist(){
			var zj=/^1[34578]\d{9}$/;
			var mm=/^[a-zA-Z0-9]{6,}$/;
			var username=document.querySelector(".shouji").value;
			// var tuxing=document.querySelector(".tuxing").value;
			// var yanzheng=document.querySelector(".yanzheng").value;
			var denglu=document.querySelector(".denglu").value;
			// var queren=document.querySelector(".queren").value;
			// var yaoqing=document.querySelector(".yaoqing").value;

			if(username==""||zj.test(username)==false){
			   document.querySelector(".ts1").style.display='block';
			}else if(denglu==""||mm.test(denglu)==false){
	 	   document.querySelector(".ts4").style.display='block';
	 		}else{
	 				fetch('/api/user/regest', {
			headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			  },
		  method: 'POST',
		  body: "username=" + this.refs.username.value+"&psw="+ this.refs.psw.value
		}).then(function(res){
			return res.text();
		}).then((data)=>{
			console.log(data);
			if(data ==="注册成功！"){
					this.props.history.push('/login');
				}
		})
	 	}
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
						<input type="tel" ref="username" placeholder="请输入手机号码" maxLength="11" className="shouji" ref="username" onBlur={this.chkvalue.bind(this)}/>
						</label>
						<p className="ts1">请输入手机号码</p>
					</div>
					<div className="er">
						<label>图形验证码
						<input type="text" placeholder="请输入图形验证码" className="tuxing" onBlur={this.chkvalue1.bind(this)}/>
						</label>
						<p className="ts2">请输入图形验证码</p>
					</div>
					<div className="san">
						<label>验证码
						<input type="text" placeholder="请输入验证码"  className="yanzheng" onBlur={this.chkvalue2.bind(this)}/>
						</label>
						<p className="ts3">请输入验证码</p>
					</div>
					<div className="si">
						<label>登录密码
						<input type="password" ref="psw" placeholder="请输入登录密码" maxLength="11" className="denglu" onBlur={this.chkvalue3.bind(this)}/>
						</label>
						<p className="ts4">请输入登录密码</p>
					</div>
					<div className="wu">
						<label>确认密码
						<input type="password" placeholder="请确认登录密码" maxLength="11" className="queren" onBlur={this.chkvalue4.bind(this)}/>
						</label>
						<p className="ts5">请确认登录密码</p>
					</div>
					<div className="liu">
						<label>邀请码
						<input type="text" placeholder="请输入邀请码（选填）" className="yaoqing" />
						</label>
					</div>
					<p className="yaoqiu">
						*6个字符（字母、数字），区分大小写
					</p>
					<p className="zhijie">
					已有账号，<NavLink to="/login" activeClassName="suiyi"><span>直接登录></span></NavLink>
					</p>
					<div className="anniu">
						<button onClick = {this.regist}>提交注册</button>
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
	 chkvalue() {
	 	var zj=/^1[34578]\d{9}$/;
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var username=document.querySelector(".shouji").value;
	 	var tuxing=document.querySelector(".tuxing").value;
	 	var yanzheng=document.querySelector(".yanzheng").value;
	 	var denglu=document.querySelector(".denglu").value;
	 	var queren=document.querySelector(".queren").value;
	 	var yaoqing=document.querySelector(".yaoqing").value;
	 	
	 	// if(username==""){alert("文本框里必须填写内容!");}
	 	if(username==""||zj.test(username)==false){
	 	   document.querySelector(".ts1").style.display='block';
	 	}else{
	 	    document.querySelector(".ts1").style.display='block';
	 	    document.querySelector(".ts1").innerHTML='输入正确'
	 	}

	 	// if(tuxing==""||mm.test(tuxing)==false){
	 	//     document.querySelector(".ts2").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts2").style.display='block';
	 	//     document.querySelector(".ts2").innerHTML='输入正确'
	 	// }

	 	// if(yanzheng==""||zj.test(yanzheng)==false){
	 	//    document.querySelector(".ts3").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts3").style.display='block';
	 	//     document.querySelector(".ts3").innerHTML='输入正确'
	 	// }

	 	// if(denglu==""||zj.test(denglu)==false){
	 	//    document.querySelector(".ts4").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts4").style.display='block';
	 	//     document.querySelector(".ts4").innerHTML='输入正确'
	 	// }

	 	// if(queren==""||zj.test(queren)==false){
	 	//    document.querySelector(".ts5").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts5").style.display='block';
	 	//     document.querySelector(".ts5").innerHTML='输入正确'
	 	// }
	}

	 chkvalue1() {
	 	var zj=/^1[0-9]{10}$/;
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var username=document.querySelector(".shouji").value;
	 	var tuxing=document.querySelector(".tuxing").value;
	 	var yanzheng=document.querySelector(".yanzheng").value;
	 	var denglu=document.querySelector(".denglu").value;
	 	var queren=document.querySelector(".queren").value;
	 	var yaoqing=document.querySelector(".yaoqing").value;
	 	
	 	// if(username==""){alert("文本框里必须填写内容!");}
	 	// if(username==""||zj.test(username)==false){
	 	//    document.querySelector(".ts1").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts1").style.display='block';
	 	//     document.querySelector(".ts1").innerHTML='输入正确'
	 	// }

	 	if(tuxing==""||mm.test(tuxing)==false){
	 	    document.querySelector(".ts2").style.display='block';
	 	}else{
	 	    document.querySelector(".ts2").style.display='block';
	 	    document.querySelector(".ts2").innerHTML='输入正确'
	 	}

	 	// if(yanzheng==""||zj.test(yanzheng)==false){
	 	//    document.querySelector(".ts3").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts3").style.display='block';
	 	//     document.querySelector(".ts3").innerHTML='输入正确'
	 	// }

	 	// if(denglu==""||zj.test(denglu)==false){
	 	//    document.querySelector(".ts4").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts4").style.display='block';
	 	//     document.querySelector(".ts4").innerHTML='输入正确'
	 	// }

	 	// if(queren==""||zj.test(queren)==false){
	 	//    document.querySelector(".ts5").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts5").style.display='block';
	 	//     document.querySelector(".ts5").innerHTML='输入正确'
	 	// }
	}

	 chkvalue2() {
	 	var zj=/^1[0-9]{10}$/;
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var username=document.querySelector(".shouji").value;
	 	var tuxing=document.querySelector(".tuxing").value;
	 	var yanzheng=document.querySelector(".yanzheng").value;
	 	var denglu=document.querySelector(".denglu").value;
	 	var queren=document.querySelector(".queren").value;
	 	var yaoqing=document.querySelector(".yaoqing").value;
	 	
	 	// if(username==""){alert("文本框里必须填写内容!");}
	 	// if(username==""||zj.test(username)==false){
	 	//    document.querySelector(".ts1").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts1").style.display='block';
	 	//     document.querySelector(".ts1").innerHTML='输入正确'
	 	// }

	 	// if(tuxing==""||mm.test(tuxing)==false){
	 	//     document.querySelector(".ts2").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts2").style.display='block';
	 	//     document.querySelector(".ts2").innerHTML='输入正确'
	 	// }

	 	if(yanzheng==""||zj.test(yanzheng)==false){
	 	   document.querySelector(".ts3").style.display='block';
	 	}else{
	 	    document.querySelector(".ts3").style.display='block';
	 	    document.querySelector(".ts3").innerHTML='输入正确'
	 	}

	 	// if(denglu==""||zj.test(denglu)==false){
	 	//    document.querySelector(".ts4").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts4").style.display='block';
	 	//     document.querySelector(".ts4").innerHTML='输入正确'
	 	// }

	 	// if(queren==""||zj.test(queren)==false){
	 	//    document.querySelector(".ts5").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts5").style.display='block';
	 	//     document.querySelector(".ts5").innerHTML='输入正确'
	 	// }
	}

	chkvalue3() {
	 	var zj=/^1[0-9]{10}$/;
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var username=document.querySelector(".shouji").value;
	 	var tuxing=document.querySelector(".tuxing").value;
	 	var yanzheng=document.querySelector(".yanzheng").value;
	 	var denglu=document.querySelector(".denglu").value;
	 	var queren=document.querySelector(".queren").value;
	 	var yaoqing=document.querySelector(".yaoqing").value;
	 	
	 	// if(username==""){alert("文本框里必须填写内容!");}
	 	// if(username==""||zj.test(username)==false){
	 	//    document.querySelector(".ts1").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts1").style.display='block';
	 	//     document.querySelector(".ts1").innerHTML='输入正确'
	 	// }

	 	// if(tuxing==""||mm.test(tuxing)==false){
	 	//     document.querySelector(".ts2").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts2").style.display='block';
	 	//     document.querySelector(".ts2").innerHTML='输入正确'
	 	// }

	 	// if(yanzheng==""||zj.test(yanzheng)==false){
	 	//    document.querySelector(".ts3").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts3").style.display='block';
	 	//     document.querySelector(".ts3").innerHTML='输入正确'
	 	// }

	 	if(denglu==""||mm.test(denglu)==false){
	 	   document.querySelector(".ts4").style.display='block';
	 	}else{
	 	    document.querySelector(".ts4").style.display='block';
	 	    document.querySelector(".ts4").innerHTML='输入正确'
	 	}

	 	// if(queren==""||zj.test(queren)==false){
	 	//    document.querySelector(".ts5").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts5").style.display='block';
	 	//     document.querySelector(".ts5").innerHTML='输入正确'
	 	// }
	}
	chkvalue4() {
	 	var zj=/^1[0-9]{10}$/;
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var username=document.querySelector(".shouji").value;
	 	var tuxing=document.querySelector(".tuxing").value;
	 	var yanzheng=document.querySelector(".yanzheng").value;
	 	var denglu=document.querySelector(".denglu").value;
	 	var queren=document.querySelector(".queren").value;
	 	var yaoqing=document.querySelector(".yaoqing").value;
	 	
	 	// if(username==""){alert("文本框里必须填写内容!");}
	 	// if(username==""||zj.test(username)==false){
	 	//    document.querySelector(".ts1").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts1").style.display='block';
	 	//     document.querySelector(".ts1").innerHTML='输入正确'
	 	// }

	 	// if(tuxing==""||mm.test(tuxing)==false){
	 	//     document.querySelector(".ts2").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts2").style.display='block';
	 	//     document.querySelector(".ts2").innerHTML='输入正确'
	 	// }

	 	// if(yanzheng==""||zj.test(yanzheng)==false){
	 	//    document.querySelector(".ts3").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts3").style.display='block';
	 	//     document.querySelector(".ts3").innerHTML='输入正确'
	 	// }

	 	// if(denglu==""||zj.test(denglu)==false){
	 	//    document.querySelector(".ts4").style.display='block';
	 	// }else{
	 	//     document.querySelector(".ts4").style.display='block';
	 	//     document.querySelector(".ts4").innerHTML='输入正确'
	 	// }

	 	if(queren==""||mm.test(queren)==false){
	 	   document.querySelector(".ts5").style.display='block';
	 	}else{
	 	    document.querySelector(".ts5").style.display='block';
	 	    document.querySelector(".ts5").innerHTML='输入正确'
	 	}
	}
}

export default Regist;

