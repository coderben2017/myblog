/*
 * render DOM
 * 2016-06-19
 */

/* Parent Component */
var Resume = React.createClass({
	render: function(){
		return (
			<div>
				<h1>个人简历</h1>
				<Description />
				<Education />
				<Technology />
				<Projects />
				<Honor />
				<Character />
			</div>
		);
	}
});

/* Child Component */
var Description = React.createClass({
	render: function(){
		return (
			<div className="comp des">
				<h2>金奔</h2>
				<img src="./images/photo.jpg" />
				<p>男 / 1995-04 / 预备党员 / 山东青岛 / 汉族 / 班长</p>
				<p>手机：17862707938</p>
				<p>求职意向：前端开发实习生</p>
				<p>电子邮箱 : coderben2016@126.com</p>
				<p>个人博客：<a href="http://blog.csdn.net/qq846294282" target="_blank">http://blog.csdn.net/qq846294282</a></p>
				<p>GitHub 地址：<a href="https://github.com/coderben2017" target="_blank">https://github.com/coderben2017（保持更新）</a></p>
			</div>
		);
	}
});

var Education = React.createClass({
	render: function(){
		return (
			<div className="comp edu">
				<h2>教育背景</h2>
					<p>2014.09 — 2018.06&nbsp;&nbsp;&nbsp;&nbsp;山东大学(威海校区)&nbsp;&nbsp;&nbsp;&nbsp;数字媒体技术专业&nbsp;&nbsp;&nbsp;&nbsp;本科&nbsp;&nbsp;&nbsp;&nbsp;专业前20%</p>
					<h3>主修课程</h3>
					<p>C/C++、Java、数据库、数据结构、计算机组成原理、计算机网络、操作系统、算法设计与分析、Web 技术、色彩构成、立体构成、二维动画、三维动画等。</p>
			</div>
		);
	}
});

var Technology = React.createClass({
	render: function(){
		return (
			<div className="comp tec">
				<h2>专业技能</h2>
					<h3>技术水平</h3>
					<p>熟练掌握HTML、CSS、JavaScript，熟悉PHP、MySQL、算法、数据结构和各网络协议。目前常用技术栈为jQuery + CSS(原生) + ES5 / React + Flux，正在学习Redux + ES6。日常代码会及时整理到github。</p>
					<h3>英语水平</h3>
					<p>CET-4，英文读写熟练，能阅读技术文档、用英文书写github文章</p>
			</div>
		);
	}

});

var Projects = React.createClass({
	render: function(){
		return (
			<div className="comp pro">
				<div className="pro-child">
					<h2>项目经历</h2>
					<p>2016.09--2017.09</p>
					<h5>计算机系实验室助理</h5>
					<p>责任描述：协助老师负责机房群软硬件、网络及系统维护、企业招聘机试环境调试等工作。</p>
				</div>
				<div className="pro-child">
					<p>2016.11--2016.11</p>
					<h5>PC 端 2048 小游戏</h5>
					<p>开发语言：HTML / CSS / (原生)JavaScript</p>
					<p>开发工具：Sublime Text / Chrome Dev Tools / Wamp Server / Mark Man</p>
					<p>项目描述：仿手游2048，使用原生 JS 重写滑块控制，优化过数次用户体验，并添加了实时计分功能。</p>
					<p>演示地址：<a href="https://coderben2017.github.io/2048/" target="_blank">https://coderben2017.github.io/2048/ （方向控制键为 ↑、↓、←、→）</a></p>
					<p>职责分工：独立开发</p>
				</div>
				<div className="pro-child">
					<p>2017.01--2017.02</p>
					<h5>个人博客网站（前端H5、响应式页面）</h5>
					<p>开发语言：HTML5 / CSS3 / JavaScript</p>
					<p>开发工具：Sublime Text / Chrome Dev Tools / Wamp Server / Mark Man / PS</p>
					<p>项目描述：在 ACM 训练期间养成了写博客的习惯，随后完成了基于 PC、平板及移动设备的个人博客网站前端部分，包括主页、各类文章列表和个人简介页面，网站已上线。</p>
					<p>网站地址：<a href="http://www.iambenben.com" target="_blank">http://www.iambenben.com</a></p>
					<p>职责分工：H5 前端开发</p>
				</div>
				<div className="pro-child">
					<p>2017.04--2017.04</p>
					<h5>员工信息管理系统</h5>
					<p>开发语言：PHP / SQL / HTML / CSS / Javascript</p>
					<p>开发工具：Sublime Text / Chrome Dev Tools / Wamp Server（Apache）/ Navicat</p>
					<p>项目描述：此项目为Web技术课程大作业，老师只讲授ASP，跟老师商量后决定自学PHP来做。使用了 PHP 数据库框架 Medoo，目前已完成管理员登录/密码修改、员工信息打印/添加/修改/删除、上下级关系遍历、员工照片上传/更新/缩略图查看等功能。</p>
					<p>职责分工：独立开发</p>
				</div>
			</div>
		);
	}

});

var Honor = React.createClass({
	render: function(){
		return (
			<div className="comp hor">
				<h2>获奖情况</h2>
				<ul>
					<li>2017.04&nbsp;&nbsp;&nbsp;&nbsp;华为网络技术大赛&nbsp;&nbsp;&nbsp;&nbsp;进入复赛（江苏山东赛区前100名，初赛人数500+）</li>
					<li>2016.07&nbsp;&nbsp;&nbsp;&nbsp;第一届中国高校计算机大赛&nbsp;&nbsp;&nbsp;&nbsp;国家级优胜奖（决赛队伍前50%）</li>
					<li>2016.03&nbsp;&nbsp;&nbsp;&nbsp;第七届蓝桥杯程序设计大赛&nbsp;&nbsp;&nbsp;&nbsp;省级二等奖（山东赛区第75名）</li>
					<li>2016.11&nbsp;&nbsp;&nbsp;&nbsp;当选“校级优秀学生干部”（单项奖学金）</li>
					<li>2016.12&nbsp;&nbsp;&nbsp;&nbsp;当选“青春榜样——学生干部标兵” </li>
					<li>2017.05&nbsp;&nbsp;&nbsp;&nbsp;校运动会男子5000米第三名</li>
					<li>2015.04&nbsp;&nbsp;&nbsp;&nbsp;院运动会男子1500米第一名、5000米第二名</li>
				</ul>
			</div>
		);
	}

});

var Character = React.createClass({
	render: function(){
		return (
			<div className="comp cha">
				<h2>个人性格</h2>
				<p>热爱互联网、热爱前端、用户体验完美主义者。大学一直担任班长，班内零违纪、专业课零挂科、文体活动学院第一。享受挑战、乐于奉献，平时喜欢跑马拉松、骑车、听音乐、写博客。</p>
			</div>
		);
	}

});

/* Render */
ReactDOM.render(
	<Resume />
	,
	document.querySelector( "#container" )
);