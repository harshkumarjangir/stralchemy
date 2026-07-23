import express from 'express';
import blogRoutes from './blogRoutes.js';
import contactRoutes from './contactRoutes.js';
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import strategyRoutes from './strategyRoutes.js';
import caseStudyRoutes from './caseStudyRoutes.js';
import statsRoutes from './statsRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running from routes directory');
});

router.use('/api/auth', authRoutes); // Admin Auth
router.use('/api/users', userRoutes); // Client Auth
router.use('/api/blogs', blogRoutes);
router.use('/api/contacts', contactRoutes);
router.use('/api/strategy', strategyRoutes);
router.use('/api/casestudies', caseStudyRoutes);
router.use('/api/stats', statsRoutes);

export default router;
