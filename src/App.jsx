import React, { useEffect, useState } from 'react';
import './style.css';

import {
	AppBar,
	Container,
	Grid,
	LinearProgress,
	Paper,
} from '@material-ui/core';

import TextTyping from './components/TextTyping';
import ResultPanel from './components/ResultPanel';

import { connect } from 'react-redux';
import { getData } from './action/action';
import ModalWindow from './components/ModalWindow';

const App = ({ loading, getData, data }) => {
	const [isCompleted, setIsCompleted] = useState(false);
	// useEffect for run getData when component has mounted
	useEffect(() => {
		getData();
		// eslint-disable-next-line
		// [] to simulate componentDidMount to start once for stateless component lifecycle
	}, []);

	// show loading and when data has received then just return jsx of app
	if (loading || data === null) {
		return <LinearProgress />;
	}
	return (
		<div style={{minWidth: '1000px', margin: '0 auto'}}>
			<AppBar position='relative' style={{ padding: '20px 35px' }}>
				<h2>Touch Typing Speed</h2>
			</AppBar>
			<Container style={{ marginTop: '20px' }} maxWidth='xl'>
				{/* if text has been passed then open modal window else open text and left side panel*/}
				{isCompleted ? (
					<ModalWindow />
				) : (
					<Grid spacing={4} container>
						<Grid item xs={9}>
							<TextTyping
								paperStyle={paperStyle}
								setIsCompleted={setIsCompleted}
							/>
						</Grid>
						<Grid
							style={{ justifyContent: 'center', minWidth: '240px' }}
							item
							xs={3}
						>
							<Paper style={(paperStyle, { flexDirection: 'row' })}>
								<ResultPanel />
							</Paper>
						</Grid>
					</Grid>
				)}
			</Container>
		</div>
	);
};

const paperStyle = {
	padding: '20px',
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'justify',
};

const mapStateToProps = state => ({
	loading: state.loading,
	data: state.data,
});

export default connect(mapStateToProps, { getData })(App);
