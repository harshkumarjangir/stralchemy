import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 relative z-10">
          <p className="text-brand-purple font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Our Insights
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            The Stralchemy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expert strategies, industry trends, and actionable advice to accelerate your business growth.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-xl text-gray-500 font-medium">Loading insights...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 text-xl text-gray-500 font-medium">Check back soon for our latest insights.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog._id} 
                to={`/blogs/${blog.slug}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 bg-gray-200 overflow-hidden relative">
                  {blog.coverImage ? (
                    <img 
                      src={blog.coverImage} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                      <span className="text-4xl opacity-50">📰</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    {blog.tags && blog.tags[0] && (
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-purple uppercase tracking-wider shadow-sm">
                        {blog.tags[0]}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 font-medium mb-3 space-x-4 uppercase tracking-wide">
                    <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors line-clamp-3 leading-snug">
                    {blog.title}
                  </h2>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-700">{blog.author}</span>
                    <span className="text-brand-purple font-bold flex items-center text-sm group-hover:translate-x-1 transition-transform">
                      Read More <span className="ml-1">➔</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
