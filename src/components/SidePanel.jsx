import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper, Divider
} from '@material-ui/core';

const SidePanel = ({ paperStyle }) => {
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
                            class='fas fa-tachometer-alt'></i>
                    </ListItemIcon>
                    <ListItemText style={textStyle}>100 слов/мин</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon style={iconStyleWrapper}>
                        <i
                            style={{
                                fontSize: '29px',
                                color: 'rgb(  175, 122, 197 )',
                            }}
                            class='fas fa-crosshairs'></i>
                    </ListItemIcon>
                    <ListItemText style={textStyle}>95%</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon style={iconStyleWrapper}>
                        <i
                            style={{
                                fontSize: '30px',
                                color: 'rgb( 236, 112, 99)',
                            }}
                            class='fas fa-times'></i>
                    </ListItemIcon>
                    <ListItemText style={textStyle}>ошибки: 2</ListItemText>
                </ListItem>
                </List>
                <Divider />
                <List>
                <ListItem style={{ cursor: 'pointer' }}>
                    <ListItemIcon style={iconStyleWrapper}>
                        <i
                            style={{
                                fontSize: '22px',
                                color: 'rgb(  88, 214, 141 )',
                            }}
                            class='fas fa-redo-alt'></i>
                    </ListItemIcon>
                    <ListItemText style={textStyle}>Заново</ListItemText>
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
export default SidePanel;
