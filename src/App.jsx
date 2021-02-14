import React from 'react';
import TextTyping from './components/TextTyping';

import { Provider } from 'react-redux';

import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <div className='container'>
                <TextTyping />
            </div>
        </Provider>
    );
};

export default App;
