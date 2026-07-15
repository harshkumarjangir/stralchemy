import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
};

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    author: 'Stralchemy',
    coverImage: '',
    tags: '',
    isPublished: false,
    publishedAt: new Date().toISOString().split('T')[0], // YYYY-MM-DD
  });
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(isEditing);

  useEffect(() => {
    if (isEditing) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      // Need to fetch by ID. Our public route gets by slug. 
      // For admin, we should be able to get all blogs and find it, or add a getById route.
      // Since we already fetched all blogs in the manager, let's just fetch all and find it, 
      // or better: add a quick fetch logic
      const { data } = await axios.get('http://localhost:5000/api/blogs?isAdmin=true');
      const blog = data.find(b => b._id === id);
      if (blog) {
        setFormData({
          title: blog.title,
          author: blog.author,
          coverImage: blog.coverImage,
          tags: blog.tags.join(', '),
          isPublished: blog.isPublished,
          publishedAt: new Date(blog.publishedAt).toISOString().split('T')[0],
        });
        setContent(blog.content);
      }
    } catch (error) {
      console.error('Error fetching blog for edit:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      content,
      tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
    };

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/blogs/${id}?isAdmin=true`, payload);
      } else {
        await axios.post('http://localhost:5000/api/blogs?isAdmin=true', payload);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog. See console for details.');
    }
  };

  if (loading) return <div className="p-8">Loading editor...</div>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{isEditing ? 'Edit Blog' : 'Create New Blog'}</h1>
        <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900 underline">
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Employer Branding Strategies"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
            <input
              type="text"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="branding, strategy, evp"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center h-5">
              <input
                id="isPublished"
                name="isPublished"
                type="checkbox"
                checked={formData.isPublished}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            <div className="text-sm">
              <label htmlFor="isPublished" className="font-medium text-gray-700">Publish immediately?</label>
              <p className="text-gray-500">If unchecked, it remains a draft.</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Publish Date</label>
            <input
              type="date"
              name="publishedAt"
              value={formData.publishedAt}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">If the date is in the future, it won't appear on the public site until then.</p>
          </div>
        </div>

        <div className="col-span-2 mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Content (Rich Text) *</label>
          <div className="h-96 mb-12">
            <ReactQuill 
              theme="snow" 
              value={content} 
              onChange={setContent} 
              modules={modules}
              className="h-full"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow"
          >
            {isEditing ? 'Save Changes' : 'Create Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;
