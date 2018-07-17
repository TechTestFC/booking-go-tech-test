import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import saga from './store/sagas';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
