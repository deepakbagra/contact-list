import { combineReducers } from 'redux';
import contacts from './ContactReducers';
import currentId from './currentIdReducer';

export default combineReducers({ contacts, currentId });