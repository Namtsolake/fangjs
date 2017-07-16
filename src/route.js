import React from "react";
import App from "./Component/App/index";
import Home from "./Component/Home/index";
import Investmentprojects from "./Component/Investmentprojects/index";
import Myaccount from "./Component/Myaccount/index";
import More from "./Component/More/index";
import Regist from "./Component/Regist/index";
import Login from "./Component/Login/index";
import Myder from "./Component/Myder/index";
import Investmentproject from "./Component/Investmentproject/index";
import Profit from "./Component/Profit/index";
import Term from "./Component/Term/index";
import Speedofprogress from "./Component/Speedofprogress/index";
import Detail from "./Component/Detail/index";
import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch
}from "react-router-dom"
import {Provider} from "react-redux";
import store from "./Redux/Store/index";

const route =(
	<Provider store={store}>
	<Router>
		<App>
		<Switch>
			<Route path="/home" component={Home}/>{/*home 切换到home页*/}

			<Route path="/investmentprojects" render={()=>
			<Investmentprojects>
			<Switch>
				<Route path="/investmentprojects/investmentproject" component={Investmentproject}/>投资项目
				<Route path="/investmentprojects/profit" component={Profit}/>收益
				<Route path="/investmentprojects/term" component={Term}/>期限
				<Route path="/investmentprojects/speedofprogress" component={Speedofprogress}/>进度
				<Redirect from="/" to="/investmentprojects/investmentproject"/>{/*默认跳转投资项目*/}
			</Switch>
			</Investmentprojects>
			}/>4
			
			<Route path="/myaccount" render={()=>
				<Myaccount>
				<Switch>
				<Route path="/myaccount/regist" component={Regist}/>
				<Route path="/myaccount/login" component={Login}/>				
				</Switch>
				</Myaccount>
			}/>1
			<Route path="/myaccount/myzhanghu" component={Myder}/>
			<Route path="/detail/:kerwinID" component={Detail}/>
			<Route path="/More" component={More}/>
			<Redirect from="/" to="/home"/>{/*默认跳转投资项目*/}
			</Switch>
		</App>
	</Router>
	</Provider>
)
export default route;