import React,{ Component } from 'react';
import style from 'cms.css';
​
/**
 * 路由路径 登录成功后页面跳转到index
 */
import { index } from 'config';
​
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            isRemember: false,
            unameHelp: "",
            upwdHelp: ""
        }
    }
​
    //监听input中的数据，保存到state中
    changeUsername(e){
        let uname = e.target.value;
        this.setState({
            userName: uname
        });
        console.log(this.state.userName);
    }
​
    changePassword(e){
        let upwd = e.target.value;
        this.setState({
            userPassword: upwd
        })
    }
​
    //是否记住密码
    handleCheckbox(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({
                isRemember: true
            })
        }else{
            this.setState({
                isRemember: false
            })
        }
    }
​
    //点击登录按钮，触发后台接口提供的验证，对数据的处理等方法
    handleClick(){
        if(this.state.userName === ""||this.state.userName === null){
            this.setState({
                unameHelp: "* 用户名不能为空"
            })
        }else if(this.state.userPassword === ""||this.state.userPassword === null){
            this.setState({
                unameHelp: "",
                upwdHelp: "* 密码不能为空"
            })
        }else{
            this.setState({ //清除help-block提示文字
                unameHelp: "",
                upwdHelp: ""
            });
  
            if(this.state.isRemember === true){ //是否记住密码，若记住，则保存至localstorage，反之，清除
                // let loginData = {this.state.userName,this.state.userPassword};
                let loginData = {};
                loginData.userName = this.state.userName;
                loginData.userPassword = this.state.userPassword;
                Data.localSetItem("mm_loginStatus",loginData);
            }else{
                Data.localRemoveItem("jiaj-loginStatus");
            }
  
            this.props.login(this.state.userName,this.state.userPassword);
            console.log(this.state);
        }
​
​
    }
​
    render(){
​
        return (
            <div className="login-box">
​
                <div className="login-title">登   录</div>
                <form action="" className="form-horizontal">
                    <div className="form-group input-text">
                        <label htmlFor="uname">账号</label>
                        <input type="text" className="form-control" name="username" id="uname" ref="uname" placeholder="手机号/用户名"
                               onChange={this.changeUsername.bind(this)}/>
                        <span className="help-block">{this.state.unameHelp}</span>
                    </div>
​
                    <div className="form-group input-text">
                        <label htmlFor="upwd">密码</label>
                        <input type="password" className="form-control" name="password" id="upwd" ref="upwd" placeholder="密码"
                               onChange={this.changePassword.bind(this)}/>
                        <span className="help-block">{this.state.upwdHelp}</span>
                    </div>
​
                    <div className="form-group">
                        <label htmlFor="chk" className="check">
                            <input type="checkbox" id="chk" checked={this.state.isRemember} onClick={this.handleCheckbox.bind(this)} />
                            <span>记住密码</span>
                        </label>
                    </div>
​
                    <div className="form-group">
                        <button type="button" onClick={this.handleClick.bind(this,this.state.userName,this.state.userPassword)} className="btn btn-primary login-btn">登录</button>
                    </div>
                </form>
​
            </div>
        )
    }
}
​
​
    /**************登录(WXP)****************/
    .login-box{
    width: 60%;
    background: #e0e8e0;
    margin: 100px auto;
    padding: 50px 70px;
    box-shadow: 5px 5px #ddd;
    border-radius: 5px;
}
​
.login-title{
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
}
​
.input-text>label{
    display: inline-block;
    width: 15%;
}
​
.input-text>input{
    display: inline-block;
    width: 80%;
}
.check{
    margin-left: 15%;
    width: 40%
}
.check>span{
    margin-left: 3%;
}
.login-btn{
    margin-left: 15%;
    width: 80%;
    font-size: 16px;
}
.help-block{
    color: #e4393c;
    height: 20px;
    font-size: 12px;
    margin-left: 15%;
}