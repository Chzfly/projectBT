import React from 'react';
import './TagList.scss';
import PropTypes from 'prop-types';

/******
**  author: 陈洪泽
**  desc: 评论区标签组件
*******/


export default function TagList({tags, currentTag, changeTag}) {
	//对切换标签函数进行加工，点击当前选中标签不进行数据刷新
	const myChangeTag = v => {
		if(v !== currentTag){
			changeTag(v);
		}
	};
	return (
		<div className="tagList">
			{tags.map(item => <span
				key={item.text}
				className={`tagList__item ${item.text === currentTag ? 'tagList__item--active' : ''}`}
				onClick={() => myChangeTag(item.text)}
			>{item.text} {item.count}</span>)}
		</div>
	);
}

TagList.propTypes = {
	tags: PropTypes.array.isRequired,
	currentTag: PropTypes.string.isRequired,
	changeTag: PropTypes.func.isRequired,
};
