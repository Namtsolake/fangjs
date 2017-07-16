import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import ReactSwipe from "react-swipe";
class Home extends Component{
	constructor(prop){
		super(prop);
		this.state={
			looplist:[],
			playinglist:[],
			comingsoon:[]
		}
	}
	
	render(){
		return(
			<div id="home">
			<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000}} key={this.state.looplist.length}>{/*为了让react-swipe重新渲染， 需要安装文档设置key值为key={this.state.looplist.length} https://github.com/voronianski/react-swipe*/}
                {
                	this.state.looplist.map((item,index)=>
                		<img src={item.imageUrl} key={item.id}/>
                		)
                }
            </ReactSwipe>

            <div className="nowplaying">
            {
            	this.state.playinglist.map((item,index)=>
            		<img src={item.cover.origin} key={item.id}/>
            		)
            }
            </div>

            <div className="comingsoon">
            <p>即将上映</p>
            {
            	this.state.comingsoon.map((item,index)=>
            		<img src={item.cover.origin} key={item.id}/>
            		)
            }
            </div>
			</div>
			)

	}
}

export default Home;