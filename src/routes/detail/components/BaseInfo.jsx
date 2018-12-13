import React, { Component } from 'react';
import './BaseInfo.scss';
import PropTypes from 'prop-types';

/******
**  author: Chenhongze
**  time: 2018,12,06 11:36:57
**  desc: 电影详情页 基础信息组件 展示电影名 别名 时长等信息
******/

export default class BaseInfo extends Component {
	render() {
		return (
			<div className="baseInfo">
				<div className="baseInfo__detail">
					<h3 className="baseInfo__name">唐人街探案2</h3>
					<div className="baseInfo__subName">Detective Chinatown 2</div>
					<div className="baseInfo__other">喜剧 / 动作 / 剧情</div>
					<div className="baseInfo__other">中国大陆 | 130分钟</div>
					<div className="baseInfo__other">2018年2月大陆上映</div>
				</div>
				<div
					className="baseInfo__poster"
					style={{
						backgroundImage: "url('/source/movie/asset4.jpeg')"
					}}
					onClick={() => {
						this.props.handler();
					}}
				></div>
			</div>
		);
	}
}
BaseInfo.propTypes = {
	handler: PropTypes.func.isRequired
};
