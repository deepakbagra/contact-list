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

export const updateContact = async (req, res) => {   
    const contact = req.body; 

    console.log('contact body for update', contact);
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No contact with this id');
    
    const updatedContact = await Contacts.findByIdAndUpdate(_id, contact, { new: true });
   
    res.json(updatedContact);    
}

export const deleteContact = async (req, res) => { 
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No contact with this id');

    await Contacts.findByIdAndRemove(id);

    res.json({ message: 'Contact deleted successfully' });    
}
