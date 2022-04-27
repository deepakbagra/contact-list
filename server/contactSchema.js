import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,    
});

export default mongoose.model('contacts', contactSchema);