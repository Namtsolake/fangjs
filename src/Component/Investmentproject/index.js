import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';

class Investmentproject extends Component{
	constructor(props){
		super(props);
		this.state={
			playinglist:[],
			total:0,
			currentpage:0,
			hasMore:true
		}
	}

componentWillUnmount() {
	// window.removeEventListener("scroll",this.myscrollfunc)
}

	render(){
		return(
			<div id="investmentproject">
			<ul>
			<InfiniteScroll
		    pageStart={0}
		    loadMore={this.handleLoadeMore.bind(this)}
		    hasMore={this.state.hasMore}
		    initialLoad={false}
		    loader={<div className="loader">Loading ...</div>}>
			{
				this.state.playinglist.map((item,index)=>
					<li key={item.id} onClick={()=>{
						this.props.history.push("/home")
					}}>
					<img src={item.poster.origin}/>
					<h3>{item.name}</h3>
					<p>{item.intro}</p>
					</li>
					)
			}
			</InfiniteScroll>
			</ul>
			</div>
			)
	}

	handleLoadeMore(){
		console.log("请求数据");

		var current=++this.state.currentpage;
		if(current>this.state.total){
			this.setState({
				hasMore:false
			})
			return;
		}
		axios.get("/v4/api/film/now-playing",{
		params:{
			page:current,
			count:7
		}
	}).then(res=>{
		console.log(res.data);
		this.setState({
			playinglist:[...this.state.playinglist,...res.data.data.films],
		
		})
	})
	}
}

export default Investmentproject; 