
import reducer from './Redux/reducer/index.js'
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import {composeWithDevTools} from 'redux-devtools-extension'
// const reduxChrome = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
// import { createLogger } from "redux-logger";

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(createLogger(), thunk))
// );
// export default store;