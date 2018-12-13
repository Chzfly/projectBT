import React from 'react';
import './ScoreSummary.scss';
import Star from '../../../components/Star';

/******
**  author: Chenhongze
**  time: 2018,12,06 11:49:34
**  desc: 分数概览组件、展示电影评分等信息
******/

export default function ScoreSummary() {
	return (
		<div className="scoreSummary">
			<div className="scoreSummaryTop">
				<div className="summaryItem">
					<div className="summaryItem__value">9.3<Star value={9.3}></Star></div>
					<div className="summaryItem__title">观众评分32424人</div>
				</div>
				<div className="summaryItem">
					<div className="summaryItem__value">80%</div>
					<div className="summaryItem__title">V淘推荐度</div>
				</div>
				<div className="summaryItem">
					<div className="summaryItem__value">58650</div>
					<div className="summaryItem__title">想看人数</div>
				</div>
			</div>
			<div className="scoreSummaryBtn">
				<button className="scoreSummaryBtn__item scoreSummaryBtn__item--want"><i></i>想看</button>
				<button className="scoreSummaryBtn__item scoreSummaryBtn__item--seen"><i></i>看过</button>
			</div>
		</div>
	);
}
