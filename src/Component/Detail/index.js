import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import {connect} from "react-redux";
class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			filminfo:null
		}
	}

	componentDidMount(){
		console.log(this.props.match.params);
		axios.get(`/v4/api/film/${this.props.match.params.kerwinID}`).then(res=>{
			console.log(res.data);
			this.setState({
				filminfo:res.data.data.film
			})
			this.props.change(res.data.data.film.name)
		})
	}

	render(){
		return(
			<div>
			{
				this.state.filminfo?
				(
				<div>
			<h3>{this.state.filminfo.name}</h3>
			<img src={this.state.filminfo.poster.origin}/>
			</div>
			):null
		}
			</div>
			)
	}
}

export default connect(
	null,
	{
		change:(name)=>{
			console.log(name);
			return{
				type:"KERWINCHANGE",
				kerwininfo:name
			}
		}
	}
	)(Detail);