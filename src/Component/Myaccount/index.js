import React,{Component} from "react";
import "./index.scss"

class Myaccount extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="Myaccount">
			<div className="all">
				<div className="datu">
					<p id="tel">您好,亲爱的主人!</p>
					<span className="yi"></span>
					<a className="xin"><span className="er"></span></a>
					<a className="chong"><span className="san">充值</span></a>
				</div>
				<ul>
					<li>
						<p className="aa">总资产（元）</p>
						<p className="ab">0.00</p>
					</li>
					<li>
						<p className="ba">总收益（元）</p>
						<p className="bb">0.00</p>
					</li>
				</ul>
				<div className="hea">
					<div className="zuo">
						<p>投资中金额（元）</p>	
						<span>0.00</span>
					</div>
					<div className="you">
						<p>存钱罐余额（元）</p>	
						<span>0.00</span>
					</div>
				</div>
				<div className="heb">
					<div className="zuo">
						<p>可用余额（元）</p>	
						<span>0.00</span>
					</div>
					<div className="you">
						<p>冻结余额（元）</p>	
						<span>0.00</span>
					</div>
				</div>
			</div>
			
			</div>
			)
	}
	componentDidMount() {
        
        var str = document.cookie;
         console.log(str);
        var arr = str.split('; ');
        console.log(arr);

        var key_value;
        for (var i=0; i<arr.length; i++) {
            key_value = arr[i].split('=');
            console.log(key_value[1]);
            //key_value[0]就是cookie的name
            //key_value[1]就是cookie的value
            if (key_value[0] === 'username') {
                var dhh=key_value[1];
            }
        }

        console.log(dhh);
        var tel=document.querySelector('#tel');
        tel.innerHTML=dhh;
	}
}

export default Myaccount; 