import React,{Component} from "react";
import "./index.scss";
import{
	NavLink
}from "react-router-dom";

class Investmentprojects extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="investmentprojects">
			<ul className="one">
			<li>
			<NavLink to="/investmentprojects/investmentproject" activeClassName="active">投资项目</NavLink>
			</li>
			<li>
			收益
			</li>
			<li>
			期限
			</li>
			<li>
			进度
			</li>
			</ul>
			{this.props.children}
			
			</div>
			)
	}
}

export default Investmentprojects; 