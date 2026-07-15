import Blog from '../models/Blog.js';

// Get all blogs (Admin sees all, public sees only published & scheduled before now)
export const getBlogs = async (req, res) => {
  try {
    const { isAdmin } = req.query; // Simple flag for now, in a real app use auth middleware
    
    let query = {};
    if (isAdmin !== 'true') {
      // Public view: must be published and publishedAt must be in the past
      query = {
        isPublished: true,
        publishedAt: { $lte: new Date() },
      };
    }

    const blogs = await Blog.find(query).sort({ publishedAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get single blog by slug
export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const { isAdmin } = req.query;

    let query = { slug };
    if (isAdmin !== 'true') {
      query.isPublished = true;
      query.publishedAt = { $lte: new Date() };
    }

    const blog = await Blog.findOne(query);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    // Handle duplicate slug error
    if (error.code === 11000) {
      return res.status(400).json({ message: 'A blog with this title/slug already exists' });
    }
    res.status(400).json({ message: 'Bad Request', error: error.message });
  }
};

// Update an existing blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    
    // If title changed but slug didn't, we might want to let the pre-validate middleware run.
    // However, findByIdAndUpdate skips pre-validate by default unless runValidators is true, 
    // but the slug logic is custom. Let's just fetch, update, and save.
    const blog = await Blog.findById(id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Update fields
    Object.keys(req.body).forEach(key => {
      blog[key] = req.body[key];
    });

    // Automatically regenerate slug if title changed and slug wasn't manually provided in body
    if (req.body.title && !req.body.slug) {
       blog.slug = req.body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    }

    const updatedBlog = await blog.save();
    res.status(200).json(updatedBlog);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'A blog with this title/slug already exists' });
    }
    res.status(400).json({ message: 'Bad Request', error: error.message });
  }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
