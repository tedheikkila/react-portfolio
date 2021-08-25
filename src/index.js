import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favicon from 'react-favicon'

// renders to index.html root
ReactDOM.render(
<React.StrictMode>
    <Favicon url='https://github.githubassets.com/favicons/favicon.png' />
    <App />
</React.StrictMode>,
document.getElementById('root'));
