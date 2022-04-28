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

        if (data) {
            alert('New contact has been addedd.')
        }

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
       
        if (data) {
            alert('The contact has been updated.')
        }
       
        dispatch({
            type: Actions.UPDATE,
            payload: data
        });
    } catch (error) {
        console.log(error);   
    }
}

export const deleteContact = (id) => async (dispatch) => {    
    try {
        
        const response = await api.deleteContact(id);

        if (response) {
            alert('The contact has been deleted.');
        }

        dispatch({
            type: Actions.DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}