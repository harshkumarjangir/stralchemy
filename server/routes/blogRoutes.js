import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blogController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Setup Multer for Image uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    cb(null, `blog_cover_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Public & Admin routes (handled by isAdmin query param internally for simplicity)
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Admin only routes
router.post('/', protect, upload.single('coverImageFile'), createBlog);
router.put('/:id', protect, upload.single('coverImageFile'), updateBlog);
router.delete('/:id', protect, deleteBlog);

export default router;
