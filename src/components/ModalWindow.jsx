import React from 'react';

import ResultPanel from '../components/ResultPanel';
import BackgroundLayer from '../layer/BackgroundLayer';

import { Paper } from '@material-ui/core';

// modal window that takes info from ResultPanel
const ModalWindow = () => {
    return (
        <BackgroundLayer>
            <Paper style={modalStyle}>
                <h2
                    style={{
                        color: 'rgb(  123, 125, 125  )',
                        fontWeight: '100',
                        textAlign: 'center',
                    }}>
                    Ваш результат:
                </h2>
                <ResultPanel />
                <hr />
                <br />
                <p>Презагрузите страницу, что бы начать сначала</p>
            </Paper>
        </BackgroundLayer>
    );
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
};

export default ModalWindow;
