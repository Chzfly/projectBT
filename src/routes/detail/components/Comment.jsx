import React, { Component } from 'react';
import ScoreDistribute from './ScoreDistribute';
import TagList from './TagList';
import './Comment.scss';
import CommentList from './CommentList';
import request from '../../../helpers/request';

/******
**  author: 陈洪泽
**  desc: 评论区整体包括评分分布、标签、具体评论列表
*******/


export default class Comment extends Component {
	state = {
		tags: [],
		list: [],
		currentTag: ''
	}

	//请求数据
	getData = async() => {
		const {list, tags} = await request('/comment');
		this.setState({
			tags,
			list,
			currentTag: tags[0] ? tags[0].text : ''
		});
	}

	componentDidMount(){
		this.getData();
	}

	//切换tag
	changeTag = tag => {
		this.setState({
			currentTag: tag
		});
	}
	//点赞或者取消,改变isZan 和 zan 两个值
	toggleZan = (id) => {
		this.setState((prevState) => ({
			list: prevState.list.map(item => item.id === id ? {...item, isZan: !item.isZan, zan: item.isZan ? item.zan - 1 : item.zan + 1} : item)
		}));
	}

	render() {
		const{tags, list, currentTag} = this.state;
		const filterComment = list.filter(item => item.tag === currentTag);
		return (
			<div className="comment">
				<ScoreDistribute></ScoreDistribute>
				<div className="comment__tagList">
					<TagList tags={tags} currentTag={currentTag} changeTag={this.changeTag}></TagList>
				</div>
				<div className="comment__commentList">
					<CommentList data={filterComment} toggleZan={this.toggleZan}></CommentList>
				</div>
			</div>
		);
	}
}
