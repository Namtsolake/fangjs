import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';
import {
	NavLink
}from "react-router-dom";

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

	componentDidMount(){
		axios.get("/api/xiangqing",{
			params:{
				page:++this.state.currentpage,
				count:7
			}
		}).then(res=>{
			console.log(res.data);
			this.setState({
				playinglist:res.data.data,
				total:res.data.data.pageSize
			})
		})

		 this.myscrollfunc=()=>{

			console.log(document.body.scrollTop);
		
		 }

		// window.addEventListener("scroll",this.myscrollfunc)
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
							<li key={index}>
							<div id="del">
							<div className="del-col">
								<div className="del-img"></div>
								<div className="del-col-top">
										<div className="del-col-top-info">
											<div className="del-col-top-info-tit">{item.name}</div>
											<div className="del-col-top-left-down">
												<div className="perc2-left">{item.trueRate}<span>%</span></div>
												<div className="perc2-right">
													<div className="perc2-right-1">
														<p className="p1">{item.totalAmount}元</p>
													</div>
													<div className="perc2-right-2">
														<span className="spa1">{item.period}</span>|<span className="spa2">{item.repaymentType}</span>
													</div>
												</div>
											</div>
										</div>
									<div className="del-col-top-perc1">
										<div className="perc1-div">
											<span className="spa3">{item.progressRate}</span>			
										</div>
									</div>
								</div>
							</div>
							<div className="del-col-bottom">
							<div className="del-col-bottom-word"><span className="del-col-bottom-delpic"></span>{item.guaranteeMode}</div>
							</div>
							</div>
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
			axios.get("/api/xiangqing",{
			params:{
				page:current,
				count:7
			}
		}).then(res=>{
			console.log(res.data);
			this.setState({
				playinglist:[...this.state.playinglist,...res.data.data],
			
			})
		})
		}
	}


export default Investmentproject; 