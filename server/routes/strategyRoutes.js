import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {
  createInitialOrder,
  verifyInitialPayment,
  getUserStrategies,
  getAllStrategies,
  createFinalOrder,
  verifyFinalPayment,
  uploadPdf,
  downloadPdf
} from '../controllers/strategyController.js';

import { protect, protectUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Setup Multer for PDF uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    cb(null, `strategy_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });


// Public (Client) Routes
router.post('/create-order', createInitialOrder);
router.post('/verify-payment', verifyInitialPayment);
router.get('/user', protectUser, getUserStrategies);
router.post('/:id/create-final-order', createFinalOrder);
router.post('/:id/verify-final-payment', verifyFinalPayment);
router.get('/:id/download', downloadPdf);

// Admin Routes (In a real app, use protect middleware to ensure admin access)
router.get('/admin', getAllStrategies);
router.post('/admin/:id/upload', upload.single('pdf'), uploadPdf);

export default router;
