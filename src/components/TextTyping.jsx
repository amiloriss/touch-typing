import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

import { updateMistake, setCount } from '../action/action';

const TextTyping = ({
	paperStyle,
	text,
	mistake,
	updateMistake,
	setCount,
	count,
}) => {
	let index = 0;
	if (count < text.length) {
		text[count].current = true;
	}
	console.log(text.length);
	useEffect(() => {
		document.body.addEventListener('keydown', e => {
			console.log(text[count]);
			if (
				e.keyCode !== 16 &&
				e.keyCode !== 20 &&
				e.key.match(/^[a-zA-Z0-9_' '_._,-]*$/)
			) {
				if (count < text.length) {
					text[count].current = null;
				}

				if (count < text.length) {
					if (e.key === text[count].letter) {
						text[count].success = true;
						setCount((count += 1));
					} else {
						text[count].success = null;
						text[count].failure = true;
						setCount((count += 1));
						updateMistake((mistake += 1));
					}
					if (count === text.length) {
						// here i will call modal window
						alert('nice');
					}
				}
			}
		});
	}, [text]);

	return (
		<Paper style={paperStyle}>
			<div style={{ fontSize: '22px', lineHeight: '1.4' }}>
				{text.map(el => {
					index++;
					return (
						<span
							style={{ padding: '0 3px', margin: '0 1px' }}
							key={index}
							className={
								el.current
									? 'current-letter'
									: el.success
									? 'passed'
									: el.failure && 'failure'
							}
						>
							{el.letter}
						</span>
					);
				})}
			</div>
		</Paper>
	);
};

const mapStateToProps = state => {
	return { text: state.data, mistake: state.typingMistake, count: state.count };
};

export default connect(mapStateToProps, { updateMistake, setCount })(
	TextTyping
);
