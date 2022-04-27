import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducers from './index.js';

export default createStore(reducers, compose(applyMiddleware(thunk)));