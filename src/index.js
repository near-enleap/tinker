import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/global.css';
import App from './App';

if(document.getElementById('root')){
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

