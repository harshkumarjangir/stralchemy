import express from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blogController.js';

const router = express.Router();

// Public & Admin routes (handled by isAdmin query param internally for simplicity)
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Admin only routes (in a real app, add verifyToken middleware here)
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;
