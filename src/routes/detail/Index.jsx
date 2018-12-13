import React, { Component } from 'react';
import './Index.scss';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import CollapsibleText from '../../components/CollapsibleText';
import Artist from './components/Artist';
import request from '../../helpers/request';
import Comment from './components/Comment';
import LineLink from '../../components/LineLink';
import {Link} from 'react-router-dom';
import ImageSlider from './components/ImageSlider';

/******
**  author: Chenhongze
**  desc: 电影详情页根组件
******/

export default class Detail extends Component {
	state={
		artist: [],
		showImage: false
	}
	//定义请求数据函数
	getData = async () => {
		const data = await request('/artist');
		this.setState({
			artist: data
		});
	}
	componentDidMount(){
		this.getData();
	}

	toggleShowImage = () => {
		this.setState((prevState) => ({
			showImage: !prevState.showImage
		}));
	}

	render() {
		return (
			<div className="detail">
				<div className="detail__top">
					<div className="tOperator">
						<div className="tOperator__icon tOperator__icon--back" onClick={() => {window.history.back();}}></div>
						<div className="tOperator__icon tOperator__icon--share"></div>
					</div>
					<BaseInfo handler={this.toggleShowImage}></BaseInfo>
				</div>
				<div className="detail__content">
					<div className="detail__module"><ScoreSummary></ScoreSummary></div>
					<div className="detail__module">
						<CollapsibleText height={84}>
							<div className="detail__overview">
							唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘,于是开启了惊心动魄的破案之行，随着秦风的推理揭秘，真相渐渐浮出水面。
							</div>
						</CollapsibleText>
					</div>
					<div className="detail__module">
						<h3 className="detail__moduleTitle">演职人员</h3>
						<Artist artist={this.state.artist}></Artist>
					</div>
					<div className="detail__module">
						<h3 className="detail__moduleTitle">观众热评</h3>
						<Comment></Comment>
					</div>
					<div className="detail__module">
						<h3 className="detail__moduleTitle">影片资料</h3>
						<div>
							<LineLink href="javascript:void(0)" title="幕后花絮"></LineLink>
							<LineLink href="javascript:void(0)" title='台词精选'></LineLink>
							<LineLink href="javascript:void(0)" title='出品发行'></LineLink>
						</div>
					</div>
				</div>
				<Link to="/seat" className="detail__buyBtn">选座购票</Link>
				{this.state.showImage && <ImageSlider handler={this.toggleShowImage}></ImageSlider>}
			</div>
		);
	}
}
