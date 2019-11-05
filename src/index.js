import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style'
import store from './store/store'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
//引入本地css文件要在index.js下import引入，不要在index.html下进行
import './static/bootstrap/css/bootstrap.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
