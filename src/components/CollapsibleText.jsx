import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './CollapsibleText.scss';


/******
**  author: 陈洪泽
**  time: 2018/12/06 17:00:38
**  desc: 全局组件——可折叠文本框	默认最大高度是84px，也可以传入自定义高度height
*******/



export default class CollapsibleText extends Component {
	state={
		collapsed: false,
		isNeedCollapse: false
	}
	static defaultProps = {
		height: 84
	}
	toggleStatus = () => {
		if(this.state.isNeedCollapse){
			this.setState((prevState) => ({
				collapsed: !prevState.collapsed
			}));
		}
	}
	componentDidMount(){
		const dom = ReactDOM.findDOMNode(this);
		const value = this.props.height;
		if(dom.clientHeight > value){
			this.setState({
				collapsed: true,
				isNeedCollapse: true
			});
		}
	}

	render() {
		const {collapsed} = this.state;
		const dynamic_classname = collapsed ? 'collapsibleText__collapsed' : '';
		const maxH = collapsed ? this.props.height : 'none';
		return (
			<div
				className={`collapsibleText ${dynamic_classname}`}
				style={{
					maxHeight: maxH
				}}
				onClick={this.toggleStatus}
			>
				{this.props.children}
				{collapsed && <div className="collapsibleText__label">展开</div>}
			</div>
		);
	}
}
CollapsibleText.propTypes = {
	children: PropTypes.any,
	height: PropTypes.number
};
