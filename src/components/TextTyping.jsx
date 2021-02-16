import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

const TextTyping = ({ paperStyle, text }) => {
    let [count, setCount] = useState(0);
    let index = 0;
    text[count].current = true;
    useEffect(() => {
        document.body.addEventListener('keydown', (e) => {
            if (
                e.keyCode !== 16 &&
                e.keyCode !== 20 &&
                e.key.match(/^[a-zA-Z0-9_' '_._,-]*$/)
            ) {
                text[count].current = null;

                if (e.key === text[count].letter) {
                    text[count].success = true;
                    setCount((count += 1));
                } else {
                    text[count].success = null;
                    text[count].failure = true;
                    setCount((count += 1));
                }
            }
        });
    }, []);

    return (
        <Paper style={paperStyle}>
            <div style={{ fontSize: '22px', lineHeight: '1.4',  }}>
                {text.map((el) => {
                    index++;
                    return (
                        <span style={{padding: '0 3px', margin: '0 1px'}}
                            key={index}
                            className={
                                el.current
                                    ? 'current-letter'
                                    : el.success
                                    ? 'passed'
                                    : el.failure && 'failure'
                            }>
                            {el.letter}
                        </span>
                    );
                })}
            </div>
        </Paper>
    );
};

const mapStateToProps = (state) => {
    return { text: state.data };
};

export default connect(mapStateToProps)(TextTyping);
