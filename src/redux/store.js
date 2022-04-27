import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import reducers from './index';

export default configureStore(reducers, compose(applyMiddleware(thunk)));