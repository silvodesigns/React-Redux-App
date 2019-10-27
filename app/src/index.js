import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';


function reducer(){
    return{
        state: "this is my state"
    }
}

const store = createStore(reducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

