import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/index';
import registerServiceWorker from './registerServiceWorker';
import './css/style.css'


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();