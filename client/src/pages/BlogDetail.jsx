import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${slug}`);
        setBlog(data);
      } catch (err) {
        setError('Blog post not found or not published yet.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen pt-40 pb-24 flex justify-center">
        <div className="text-xl text-gray-500 font-medium animate-pulse">Loading insight...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="bg-gray-50 min-h-screen pt-40 pb-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">{error}</p>
        <Link to="/blogs" className="text-brand-purple font-bold hover:underline">
          &larr; Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24">
      {/* Header Banner */}
      <div className="relative w-full h-[250px] md:h-[350px] bg-gray-900 overflow-hidden border-b-[6px] border-brand-purple">
        {blog.coverImage ? (
          <img 
            src={blog.coverImage.startsWith('http') ? blog.coverImage : `${import.meta.env.VITE_API_URL}${blog.coverImage}`}
            alt={blog.title} 
            className="w-full h-full object-cover opacity-90"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-purple-900 to-indigo-900 flex items-center justify-center">
            <span className="text-6xl opacity-30">📰</span>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
        <div className="bg-white p-8 md:p-16 shadow-lg rounded-t-lg border border-gray-100">
          
          <div className="mb-10 border-b border-gray-100 pb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-4 block">BLOGS</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {blog.title}
            </h1>
            <div className="text-sm text-gray-500 font-medium">
              By <span className="text-gray-900">{blog.author}</span> • {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>

          <div 
            className="prose-custom text-gray-700 leading-relaxed space-y-6 break-words w-full overflow-hidden
              [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-gray-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:tracking-tight [&>h2]:break-words
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:break-words
              [&>p]:mb-6 [&>p]:text-[1.05rem] [&>p>strong]:text-gray-900 [&>p]:whitespace-normal [&>p]:break-words [&>p]:max-w-full
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3 [&>ul>li]:pl-2 [&>ul>li::marker]:text-brand-purple [&>ul]:break-words
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3 [&>ol>li]:pl-2 [&>ol]:break-words
              [&>a]:text-brand-purple [&>a]:underline hover:[&>a]:text-purple-800 [&>a]:break-all"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="border border-gray-200 text-gray-600 px-4 py-1.5 rounded-sm text-xs font-semibold hover:border-brand-purple hover:text-brand-purple transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mock Previous/Next Navigation (Bottom) */}
        <div className="bg-gray-50 p-8 border border-gray-200 border-t-0 flex justify-between items-center">
          <Link to="/blogs" className="group">
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1 block group-hover:text-brand-purple transition-colors">
              &larr; PREVIOUS (OR ALL)
            </span>
            <span className="text-sm font-semibold text-gray-800 group-hover:text-brand-purple transition-colors line-clamp-1 max-w-[200px]">
              Back to Blog Index
            </span>
          </Link>
          <div className="h-10 w-px bg-gray-300"></div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1 block">
              NEXT &rarr;
            </span>
            <span className="text-sm font-semibold text-gray-400 line-clamp-1 max-w-[200px]">
              Coming Soon
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
