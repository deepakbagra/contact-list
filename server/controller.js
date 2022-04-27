import mongoose from 'mongoose';
import Contacts from './contactSchema.js';

export const getContacts = async (req, res) => {
    try {
        const allContacts = await Contacts.find();        
        
        res.status(200).json(allContacts);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}

export const loadServer = async (req, res) => {    
    const post = req.body;
    
    const initialContacts = new Contacts(post);
   
    try {
        await initialContacts.save();
        
        res.status(201).json(initialContacts);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}
