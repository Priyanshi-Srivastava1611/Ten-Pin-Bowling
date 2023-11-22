import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BowlingGameContainer from './components/BowlingGameContainer';
import {Provider} from 'react-redux';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BowlingGameContainer />
    </Provider>
);

