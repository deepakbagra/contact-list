// **************** main reducer to combine all other reducers as a single entity ******** //

import { combineReducers } from 'redux';

// importing all individual reducers
import contacts from './ContactReducer';
import currentId from './currentIdReducer';

export default combineReducers({ contacts, currentId });