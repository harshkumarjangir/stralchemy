import express from 'express';
import { submitCaseStudyLead, getCaseStudyLeads } from '../controllers/caseStudyController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/download', submitCaseStudyLead);
router.get('/admin', protect, getCaseStudyLeads);

export default router;
