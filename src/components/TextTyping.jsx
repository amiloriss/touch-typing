import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from '../action/action';

import { LinearProgress } from '@material-ui/core';

const TextTyping = ({ text, loading, getData }) => {
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    if(loading ){
        return <LinearProgress />
    }
    return <div>{text}</div>;
};

const mapStateToProps = (state) => ({
    loading: state.loading,
    text: state.data,
});

export default connect(mapStateToProps, { getData })(TextTyping);
