import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import {reducer} from './reducer/index.js';


import App from './App';


const store = createStore(reducer,applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

