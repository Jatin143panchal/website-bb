import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';
import { useNavigate } from 'react-router-dom';

export const AdminBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newBlog = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toISOString(),
    };

    const existingBlogs = localStorage.getItem('bb_blogs');
    const blogs = existingBlogs ? JSON.parse(existingBlogs) : [];
    
    blogs.unshift(newBlog); // Add to the top
    localStorage.setItem('bb_blogs', JSON.stringify(blogs));

    // Redirect to blog page
    navigate('/blog');
  };

  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans min-h-screen">
      <Helmet>
        <title>Admin - Create Blog | Banega Brand</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">
          Upload New Blog
        </h1>

        <form onSubmit={handlePublish} className="bg-white p-8 rounded-[24px] border border-[#EAEAEA] shadow-sm space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Blog Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none transition-all"
              placeholder="Enter an engaging title"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Blog Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] outline-none transition-all h-64 resize-y"
              placeholder="Write your blog post here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D97706] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all"
          >
            Publish Blog Post
          </button>
        </form>
      </main>

      <MainFooter />
    </div>
  );
};
