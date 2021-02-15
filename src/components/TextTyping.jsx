import React from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

const TextTyping = ({ paperStyle, text }) => {
    return <Paper style={paperStyle}>{text}</Paper>;
};

const mapStateToProps = (state) => ({
    text: state.data,
});

export default connect(mapStateToProps)(TextTyping);
