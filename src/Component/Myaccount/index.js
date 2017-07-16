import React,{Component} from "react";
import "./index.scss"

class Myaccount extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="Myaccount">
			
			{this.props.children}
			</div>
			)
	}
}

export default Myaccount; 