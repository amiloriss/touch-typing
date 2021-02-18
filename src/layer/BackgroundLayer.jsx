import React from 'react';

// layer for putting and position modal window on page
const BackgroundLayer = props => {
	return <div style={backgroundStyle}>{props.children}</div>;
};

const backgroundStyle = {
	top: 0,
	left: 0,
	position: 'absolute',
	width: '100vw',
	height: '100vh',
	backgroundColor: 'rgba(0,0,0,0.1)',
	zIndex: 2,
};

export default BackgroundLayer;
