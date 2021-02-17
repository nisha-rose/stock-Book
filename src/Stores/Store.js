import { createStore, compose , applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/index';

const enhancerList = [];

const composedEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk, logger), ...enhancerList) || compose(applyMiddleware(thunk, logger), ...enhancerList);

export const initStore = () => createStore(rootReducer, {}, composedEnhancer);
