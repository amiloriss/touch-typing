import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

import { updateMistake, setCount, updateAccuracy } from '../action/action';

const TextTyping = ({
    paperStyle,
    text,
    mistake,
    updateMistake,
    setCount,
    count,
    setIsCompleted,
	accuracy,
	updateAccuracy
}) => {
    let index = 0;
    if (count < text.length) {
        text[count].current = true;
    }

    useEffect(() => {
        document.body.addEventListener('keydown', (e) => {
            if (
                e.keyCode !== 16 &&
                e.keyCode !== 17 &&
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
                        updateAccuracy(accuracy -=0.5);
                    }
                    if (count === text.length) {
                        setIsCompleted(true);
                    }
                }
            }
        });
    }, [text]);

    return (
        <>
            <Paper style={paperStyle}>
                <div style={{ fontSize: '22px', lineHeight: '1.4' }}>
                    {text.map((el) => {
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
                                }>
                                {el.letter}
                            </span>
                        );
                    })}
                </div>
            </Paper>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        text: state.data,
        mistake: state.typingMistake,
        count: state.count,
        accuracy: state.typingAccuracy,
    };
};

export default connect(mapStateToProps, { updateMistake, setCount,  updateAccuracy})(
    TextTyping
);
