import express from 'express';
import { loadServer, getContacts, updateContact, deleteContact } from './controller.js';

const router = express.Router();

// routing to http://localhost:9000/contacts

router.get('/', getContacts);
router.post('/', loadServer);
router.patch('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
