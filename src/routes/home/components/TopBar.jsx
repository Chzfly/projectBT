import React from 'react';
import './TopBar.css';
import PropTypes from 'prop-types';

/**
 * BEM
 * block
 * element
 * modifier
 */
const TopBar = ({city, showCityLayer}) => {
	return (
		<div className="topBar">
			<div className="topBar__city" onClick={showCityLayer}>{city}</div>
			<div className="topBar__search"></div>
			<div className="topBar__scan"></div>
		</div>
	);
};

TopBar.propTypes = {
	city: PropTypes.string.isRequired,
	showCityLayer: PropTypes.func.isRequired
};

export default TopBar;
