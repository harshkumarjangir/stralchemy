import express from 'express';
import blogRoutes from './blogRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running from routes directory');
});

router.use('/api/blogs', blogRoutes);

export default router;
