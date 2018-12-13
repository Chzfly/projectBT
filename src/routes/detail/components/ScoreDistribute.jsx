import React, { Component } from 'react';
import './ScoreDistribute.scss';
import Star from '../../../components/Star';

/******
**  author: 陈洪泽
**  desc: 评分分布组件 flex 左右布局
*******/

export default class ScoreDistribute extends Component {
	render() {
		return (
			<div className="scoreDistribute">
				<div className="scoreDistribute__left">
					<div className="scoreDistribute__left--score">9.3</div>
					<div className="scoreDistribute__left--total">295,294人评 <i></i></div>
				</div>
				<div className="scoreDistribute__right">
					<div className="scoreDistribute__star">
						<Star value={10} size={8}></Star>
						<div className="scoreDistribute__range">
							<div
								className="scoreDistribute__range--cover"
								style={{
									width: '100%'
								}}
							></div>
						</div>
					</div>
					<div className="scoreDistribute__star">
						<Star value={8} size={8}></Star>
						<div className="scoreDistribute__range">
							<div
								className="scoreDistribute__range--cover"
								style={{
									width: '80%'
								}}
							></div>
						</div>
					</div>
					<div className="scoreDistribute__star">
						<Star value={6} size={8}></Star>
						<div className="scoreDistribute__range">
							<div
								className="scoreDistribute__range--cover"
								style={{
									width: '60%'
								}}
							></div>
						</div>
					</div>
					<div className="scoreDistribute__star">
						<Star value={4} size={8}></Star>
						<div className="scoreDistribute__range">
							<div
								className="scoreDistribute__range--cover"
								style={{
									width: '40%'
								}}
							></div>
						</div>
					</div>
					<div className="scoreDistribute__star">
						<Star value={5} size={8}></Star>
						<div className="scoreDistribute__range">
							<div
								className="scoreDistribute__range--cover"
								style={{
									width: '50%'
								}}
							></div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}
