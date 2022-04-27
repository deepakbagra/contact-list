import mongoose from 'mongoose';
import Contacts from './contactSchema.js';

export const getContacts = async (req, res) => {
    try {
        let allContacts = await Contacts.find();
        
        // sorting contact list with names alphabatically
        allContacts.sort((x, y) => (x.name.split(" ")[0] > y.name.split(" ")[0]) ? 1 : -1);

        res.status(200).json(allContacts);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}

export const loadServer = async (req, res) => {    
    const data = req.body;

    console.log(data)
    
    const initialContacts = new Contacts(data);
   
    try {
        await initialContacts.save();
        
        res.status(201).json(initialContacts);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}
