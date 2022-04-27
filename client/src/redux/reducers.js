import * as Actions from './constants';

const contactReducers = (posts=[], action) => {
    switch(action.type) {
        case Actions.LIST_CONTACTS:
            return action.payload;
        
        case Actions.LOAD_SERVER:
            return [...posts, action.payload];        
        
        default :
        return posts;
    }
}
export default contactReducers;