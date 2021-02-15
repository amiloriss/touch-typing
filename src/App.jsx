import React, { useEffect } from 'react';
import './style.css'

import { Container, Grid, LinearProgress } from '@material-ui/core';

import TextTyping from './components/TextTyping';
import SidePanel from './components/SidePanel';

import { connect } from 'react-redux';
import { getData } from './action/action';


const App = ({ loading, getData }) => {
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    if(loading ){
        return <LinearProgress />
    }
    return (
        <Container maxWidth='xl'>
            <Grid spacing={4} container>
                <Grid item xs={9}><TextTyping paperStyle={paperStyle}/></Grid>
                <Grid style={{justifyContent: 'center'}} item xs={3}><SidePanel paperStyle={paperStyle} /></Grid>
            </Grid>
        </Container>
    );
};

const paperStyle = {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'justify',
}

const mapStateToProps = (state) => ({
    loading: state.loading,
});

export default connect(mapStateToProps, {getData})(App);
