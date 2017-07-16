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
			<NavLink to="/investmentprojects/profit" activeClassName="active">收益</NavLink>
			</li>
			<li>
			<NavLink to="/investmentprojects/term" activeClassName="active">期限</NavLink>
			</li>
			<li>
			<NavLink to="/investmentprojects/speedofprogress" activeClassName="active">进度</NavLink>
			</li>
			</ul>
			{this.props.children}
			
			</div>
			)
	}
}

export default Investmentprojects; 