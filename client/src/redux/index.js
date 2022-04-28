import { combineReducers } from 'redux';
import contacts from './ContactReducer';
import currentId from './currentIdReducer';

export default combineReducers({ contacts, currentId });