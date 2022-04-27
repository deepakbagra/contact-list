import axios from 'axios';

const url = 'http://localhost:9000';

//const url = 'https://hostserver.com';

const API = axios.create({ baseURL: url});


// axios APIs to communicate with backend 

export const listContacts = () => API.get('/contacts');
export const loadServer = (initialData) => API.post('/contacts', initialData);
export const updateContact = (id, newContact) => API.patch(`/contacts/${id}`, newContact);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);