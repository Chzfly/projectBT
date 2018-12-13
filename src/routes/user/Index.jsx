import React from 'react';
import './Index.scss';
import LineLink from '../../components/LineLink';
import TabMenu from '../../components/TabMenu';

export default function Index() {
	return (
		<div className="user">
			<div className="user__top">
				<div className="tOperator">
					<div className="tOperator__icon tOperator__icon--setting"></div>
					<div className="tOperator__icon tOperator__icon--message"></div>
				</div>
				<div className="user__info">
					<div className="user__avatar">

					</div>
					<div className="user__detail">
						<div className="user__name">陈洪泽</div>
						<span className="user__fellow">关注 50</span>
						<span className="user__fans">粉丝 1250</span>
						<div className="user__level">钻石会员</div>
					</div>
				</div>
			</div>
			<div className="user__content">
				<LineLink title="收藏的电影" extra="20" href="javascript:void(0)"></LineLink>
				<LineLink title="看过的电影" extra="52" href="javascript:void(0)"></LineLink>
				<LineLink title="预约的电影" extra="1" href="javascript:void(0)"></LineLink>
			</div>
			<TabMenu current="user"></TabMenu>
		</div>
	);
}
