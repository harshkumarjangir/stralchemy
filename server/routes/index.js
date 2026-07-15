import express from 'express';
import blogRoutes from './blogRoutes.js';
import contactRoutes from './contactRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running from routes directory');
});

router.use('/api/blogs', blogRoutes);
router.use('/api/contacts', contactRoutes);

export default router;
