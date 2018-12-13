import React from 'react';
import './Artist.scss';
/******
**  author: 陈洪泽
**  desc: 演职人员列表组件 横向滚动
*******/

export default function Artist({artist}) {
	return (
		<div className="mArtist">
			<ul className="mArtist__list">
				{artist.map((item) => (
					<li key={item.image}>
						<a href="javascript:void(0)" className="artistInfo">
							<div className="artistInfo__image" style={{
								backgroundImage: `url(${item.image})`
							}}></div>
							<div>
								<dl className="artistInfo__name">{item.name}</dl>
								<dl className="artistInfo__job">{item.job}</dl>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
