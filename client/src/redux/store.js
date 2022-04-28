// center store to keep book of all changes in the states received from reducers
// createStore is being depricated and need updates.

import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducers from './index.js';

export default createStore(reducers, compose(applyMiddleware(thunk)));