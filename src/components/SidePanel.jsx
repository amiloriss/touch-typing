import React from 'react';
import {connect} from 'react-redux'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper, 
} from '@material-ui/core';

const SidePanel = ({ paperStyle, mistake }) => {

    return (
        <Paper style={paperStyle, {flexDirection: 'row'}}>
            <List>
                <ListItem>
                    <ListItemIcon style={iconStyleWrapper}>
                        <i
                            style={{
                                fontSize: '25px',
                                color: 'rgb(93, 173, 226)',
                            }}
                            className='fas fa-tachometer-alt'></i>
                    </ListItemIcon>
                    <ListItemText style={textStyle}>слов / мин: 100</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon style={iconStyleWrapper}>
                        <i
                            style={{
                                fontSize: '29px',
                                color: 'rgb(  175, 122, 197 )',
                            }}
                            className='fas fa-crosshairs'></i>
                    </ListItemIcon>
                    <ListItemText style={textStyle}>точность: 95%</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon style={iconStyleWrapper}>
                        <i
                            style={{
                                fontSize: '30px',
                                color: 'rgb( 236, 112, 99)',
                            }}
                            className='fas fa-times'></i>
                    </ListItemIcon>
                    <ListItemText style={textStyle}>ошибки: {mistake}</ListItemText>
                </ListItem>
                </List>


        </Paper>
    );
};

const textStyle = {
    color: 'rgb(  123, 125, 125  )',
};

const iconStyleWrapper = {
    justifyContent: 'center',
};

const mapStateToProps = (state) =>({
    mistake: state.typingMistake,
})
export default connect (mapStateToProps) (SidePanel);
