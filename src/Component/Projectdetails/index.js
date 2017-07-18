import React,{Component} from "react";
import "./index.scss";

class Projectdetails extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div id="projectdetails">
				<div id="del-all">
					
						<div id="del">
							<div className="del-col">
								<div className="del-img"></div>
								<div className="del-col-top">
										<div className="del-col-top-info">
											<div className="del-col-top-info-tit">恒大中央广场合肥粤诚置业二号项目四期十五次开放期债权17165</div>
											<div className="del-col-top-left-down">
												<div className="perc2-left">5.90<span>%</span></div>
												<div className="perc2-right">
													<div className="perc2-right">
														<p className="p1">预期年化收益率</p>
													</div>
												</div>
											</div>
										</div>
									<div className="del-col-top-perc1">
										<div className="perc1-div">
											<span className="spa3">100%</span>			
										</div>
									</div>
								</div>
							</div>
						
						<div className="del-data">
							<ul>
								<li>
									<p className="p1">可投金额</p>
									<p className="p2">0元</p>
								</li>			
								<li className="liBorder">
									<p className="p1">标的总额</p>
									<p className="p2">100,000元</p>
								</li>
								<li>
									<p className="p1">投资期限</p>
									<p className="p2">180天</p>
								</li>
							</ul>
						</div>
						<div className="del-info-1">
							<ul>
								<li>
									<i className="i1"></i>
									<p className="p2">不可转让</p>
								</li>
								<li>
									<i className="i2"></i>
									<p className="p2">最低1000起投</p>
								</li>
								<li>
									<i className="i3"></i>
									<p className="p2">一次性到期还本付息</p>
								</li>
							</ul>
						</div>
						<div className="del-risk">
							<span className="delicon"><i></i>投资提示</span>
							<span className="arrow">></span>
						</div>
				</div>	</div>


				<div className="del-Infofrom">
								<div className="del-Infofrom-up">
									<i></i>还款来源信息
								</div>
								<div className="del-Infofrom-down">
											<div className="down-left">
											<p className="p1">还款来源:</p>
											</div>
												<div className="down-right">
													<p className="p2">1.借款人自由咨询</p>
													<p className="p2">2.借款人投资项目待收金额</p>
												</div>
								</div>
				</div>


				<div className="del-borrowInfo">
								<div className="del-title">
									<i></i>提款人信息
								</div>
								<div className="del-delInfo">
											<div className="info-left">
												<ul>
													<li>姓名：</li>
													<li>性别：</li>
													<li>年龄：</li>
													<li>手机：</li>
													<li>身份证：</li>
													<li>借款用途：</li>
												</ul>
											</div>
											<div className="info-right">
												<ul>
													<li>宋小宝</li>
													<li>男</li>
													<li>30岁</li>
													<li>138****8888</li>
													<li>31**************22</li>
													<li>买房</li>
												</ul>
											</div>
								</div>
				</div>
			</div>
			)
	}
}

export default Projectdetails;