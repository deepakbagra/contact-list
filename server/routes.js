import express from 'express';
import { loadServer, getContacts } from './controller.js';

const router = express.Router();

// routing to http://localhost:9000/contacts

router.get('/', getContacts);
router.post('/', loadServer);

export default router;
