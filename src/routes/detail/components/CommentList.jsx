import React from 'react';
import './CommentList.scss';
import Star from '../../../components/Star';
import CollapsibleText from '../../../components/CollapsibleText';
import PropTypes from 'prop-types';

export default function CommentList({data, toggleZan}) {
	return (
		<div className="commentList">
			{data.map(item => (
				<div key={item.id} className="commentItem">
					<div className="commentItem__user">
						<div className="commentItem__user--avatar" style={{backgroundImage: `url('/source/default-avatar.jpg')`}}></div>
						<div className="commentItem__user--right">
							<div className="commentItem__user--name">{item.name}</div>
							<div className="commentItem__user--score">
								<Star value={item.score}></Star><span className="commentItem__user--value">{item.score}</span>
							</div>
						</div>
					</div>
					<div className="commentItem__content">
						<CollapsibleText>
						{item.content}
						</CollapsibleText>
					</div>
					<div className="commentItem__bottom">
						<div className="commentItem__bottom--time">{item.time}</div>
						<div className={`commentItem__bottom--zan ${item.isZan && 'active'}`}>
							<i onClick={() => {
								toggleZan(item.id);
							}}></i>
						{item.zan}</div>
					</div>
				</div>
			))}

		</div>
	);
}

CommentList.propTypes = {
	data: PropTypes.array.isRequired,
	toggleZan: PropTypes.func.isRequired
};
