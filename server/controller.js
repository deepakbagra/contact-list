// ***************** impplementing backend APIs functions ***************** //

import mongoose from 'mongoose';
import Contacts from './contactSchema.js';

// fetching contact list from mongo db database
export const getContacts = async (req, res) => {
    
    try {
        let allContacts = await Contacts.find();
        
        // sorting contact list with names alphabatically
        allContacts.sort((x, y) => {

            // sorting base don first names
            if (x.name.split(" ")[0]?.toLowerCase() >
                y.name.split(" ")[0]?.toLowerCase())                
                return 1;
            
            else
                return -1;
            
        });

        res.status(200).json(allContacts);
    } catch (error) {
        res.status(404).json( {message: error.message});
    }
}

// loading contact onto mongo db database
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

// editing and updating onto mongo db database
export const updateContact = async (req, res) => {
    
    const contact = req.body; 

    // taking contact id as params
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No contact with this id');
    
    // updated response from Mongo db 
    const updatedContact = await Contacts.
        findByIdAndUpdate(_id, contact, { new: true });
   
    res.json(updatedContact);    
}

// deleting a contact from mongo db data base

export const deleteContact = async (req, res) => {
    
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No contact with this id');

    await Contacts.findByIdAndRemove(id);

    res.json({ message: 'Contact deleted successfully' });    
}
