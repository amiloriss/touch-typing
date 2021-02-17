import React, { useEffect } from 'react';
import './style.css';

import {
    AppBar,
    Container,
    Grid,
    LinearProgress,
} from '@material-ui/core';

import TextTyping from './components/TextTyping';
import SidePanel from './components/SidePanel';

import { connect } from 'react-redux';
import { getData } from './action/action';

const App = ({ loading, getData, data }) => {
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    if (loading || data === null) {
        return <LinearProgress />;
    }
    return (
        <>
            <AppBar position='relative' style={{ padding: '20px 35px' }}>
                <h2>Touch Typing Speed</h2>
            </AppBar>
            <Container style={{ marginTop: '20px' }} maxWidth='xl'>
                <Grid spacing={4} container>
                    <Grid item xs={9}>
                        <TextTyping paperStyle={paperStyle} />
                    </Grid>
                    <Grid
                        style={{ justifyContent: 'center', minWidth: '240px' }}
                        item
                        xs={3}>
                        <SidePanel paperStyle={paperStyle} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

const paperStyle = {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'justify',
};

const mapStateToProps = (state) => ({
    loading: state.loading,
    data: state.data,
});

export default connect(mapStateToProps, { getData })(App);
