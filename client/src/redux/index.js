import { combineReducers } from 'redux';
import contacts from './Contactreducers';
import currentId from './currentIdReducer';

export default combineReducers({ contacts, currentId });