import express from 'express';
import { loadServer, getContacts } from '../controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// routing to http://localhost:9000/posts


router.get('/', getContacts);
router.post('/' loadServer);

export default router;
