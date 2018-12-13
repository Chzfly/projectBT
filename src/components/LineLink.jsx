import React from 'react';
import './LineLink.scss';
import PropTypes from 'prop-types';

/******
**  author: 陈洪泽
**  desc: 全局组件，固定样式，单行标签可跳转
*******/

export default function LineLink({href, title, extra}) {
	return (
		<a href={href} className="lineLink">
			<div className="lineLink__title">{title}</div>
			<div className="lineLink__extra">{extra}</div>
			<i className="lineLink__arrow"></i>
		</a>
	);
}

LineLink.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	extra: PropTypes.string
};
