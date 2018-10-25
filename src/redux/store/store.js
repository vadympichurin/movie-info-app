import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export const history = createBrowserHistory();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (connectRouter(history)(rootReducer), composeEnhancers(applyMiddleware(thunk)));

// const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(
//     connectRouter(history)(rootReducer), compose(applyMiddleware(thunk), DevTools));

export default store;