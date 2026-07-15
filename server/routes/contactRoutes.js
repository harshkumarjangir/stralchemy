import express from 'express';
import {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public route
router.post('/', submitContact);

// Admin routes
router.get('/', protect, getContacts);
router.put('/:id/status', protect, updateContactStatus);
router.delete('/:id', protect, deleteContact);

export default router;
