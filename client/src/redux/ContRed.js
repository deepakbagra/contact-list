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
        
        case Actions.SEARCH:
        
            const filteredContacts = action.payload !== '' ? contacts.filter((contact) =>
            contact.name?.toLowerCase().includes(action.payload?.toLowerCase())) : contacts;
            
            if (filteredContacts.length === 0) return [];
            
            else return filteredContacts;
        
        default :
        return contacts;
    }
}
export default contactReducers;