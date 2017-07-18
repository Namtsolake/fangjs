import React,{Component} from "react";
import "./index.scss";
import{
	NavLink
}from "react-router-dom";
class Detail extends Component{
	constructor(props){
		super(props);

	}

	

	render(){
		return(
			<div id="Detail">
			<ul className="two">
			<li>
			<NavLink to="/detail/projectdetails" activeClassName="active">项目详情</NavLink>
			</li>
			<li>
			<NavLink to="/detail/auditinformation" activeClassName="active">审核信息</NavLink>
			</li>
			<li>
			<NavLink to="/detail/investmentrecord" activeClassName="active">投资记录</NavLink>
			</li>
			</ul>
			{this.props.children}
			</div>
			)
	}
}

export default Detail;