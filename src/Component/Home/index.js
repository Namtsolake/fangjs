import React,{Component} from "react";
import "./index.scss";
import draw from "./test.js";
import axios from "axios";
import ReactSwipe from "react-swipe";
import {
	NavLink
}from "react-router-dom";
class Home extends Component{
	constructor(prop){
		super(prop);
		this.state={
					looplist:[],
					looplist1:[]
				}

	}
	componentDidMount(){
			
			draw(99, Math.PI/2);
			axios.get("/api/home").then(res=>{
				console.log(res.data);
				this.setState({
					looplist:res.data
				})
			})
			axios.get("/api/product").then(res=>{
				console.log(res.data);
				this.setState({
					looplist1:res.data.data[0]
				})
			})

			
		}	render(){
		return(
			<div id="home">
			<div className="all">
				
				<div className="lunbo">
					<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000}} key={this.state.looplist.length}>{/*为了让react-swipe重新渲染， 需要安装文档设置key值为key={this.state.looplist.length} https://github.com/voronianski/react-swipe*/}
                {
                	this.state.looplist.map((item,index)=>
                		<img src={item.image} key={item.image}/>
                		)
                }
            </ReactSwipe>
				</div>
				<div className="gonggao">
				<p>最新公告：<span>房金贷+部分借款提前还款公告</span></p>
				</div>
				<div className="xiangqing">
				<NavLink to="/detail" activeClassName="suiyi"></NavLink>
				</div>
				<NavLink to="/detail" activeClassName="suiyi" className="tiao">
				<section className="dong">
					<canvas id="canvas" width="500" height="500"></canvas>
					<span className="up">预期年化收益率</span>
					<span className="down">{this.state.looplist1.annualizedYield}</span>
				</section></NavLink>
				<ul>  
					<li>1000元起投</li>
					<li>期限58天</li>
					<li>一次性还本付息</li>
				</ul>
				<div className="dianji">
					<NavLink to="/detail" activeClassName="suiyi">立即投资</NavLink>
				</div>
			</div>
			</div>
			)

	}
}

export default Home;