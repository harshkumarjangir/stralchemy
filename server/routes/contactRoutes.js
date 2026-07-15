import express from 'express';
import {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';

const router = express.Router();

// Public route
router.post('/', submitContact);

// Admin routes
router.get('/', getContacts);
router.put('/:id/status', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
