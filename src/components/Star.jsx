import React from 'react';
import PropTypes from 'prop-types';
import './Star.scss';
/******
**  author: Chenhongze
**  time: 2018,12,06 13:32:44
**  desc: 全局星星组件，根据评分显示对应的星星，params：  value： 分数 十分制 size： 尺寸
******/

export default function Star({value, size = 15}) {
	const bgSize = `${size}px`;
	return (
		<div className="star" style={{
			width: size * 5,
			height: size,
			backgroundSize: bgSize
		}}>
			<div className="star__cover" style={{
				width: `${value * 10}%`,
				height: '100%',
				backgroundSize: bgSize
			}}></div>
		</div>
	);
}
Star.propTypes = {
	value: PropTypes.number.isRequired,
	size: PropTypes.number
};
