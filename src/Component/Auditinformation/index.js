import React,{Component} from "react";
import "./index.scss";

class Auditinformation extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div id="audit">
					<div className="auditInfo"></div>
				</div>
			)
	}
}

export default Auditinformation;