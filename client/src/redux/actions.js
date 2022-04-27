import * as Actions from "./constants";
import * as api from '../api';

//Action creators

export const listContacts = () => async (dispatch) => {
    try {
        const { data } = await api.listContacts();

        console.log('list contact actions', data )
        
        dispatch({
            type: Actions.LIST_CONTACTS,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const loadServer = (initialData) => async (dispatch) => {
    try {
        const { data } = await api.loadServer(initialData);

        console.log('load contact action', data )

        dispatch({
            type: Actions.LOAD_SERVER,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateContact = (id, contact) => async (dispatch) => {
    try {
        
        const { data } = await api.updateContact(id, contact);

        console.log('update action', data)
       
        dispatch({
            type: Actions.UPDATE,
            payload: data
        });
    } catch (error) {
        console.log(error);   
    }
}