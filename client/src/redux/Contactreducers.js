import * as Actions from './constants';

const contactReducers = (contacts=[], action) => {
    switch(action.type) {
        case Actions.LIST_CONTACTS:
            return action.payload;
        
        case Actions.LOAD_SERVER:
            return [...contacts, action.payload]; 
        
        case Actions.UPDATE:
            return contacts.map(
                contact => contact._id === action.payload._id ? action.payload : contact); 
        
        case Actions.DELETE:
            return contacts.filter(post => post._id !== action.payload);
        
        default :
        return contacts;
    }
}
export default contactReducers;