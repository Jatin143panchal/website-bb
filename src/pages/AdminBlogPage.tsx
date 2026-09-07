import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  FileText, 
  Tag, 
  Layers, 
  HelpCircle,
  Clock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  LogOut,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BlogArticle, 
  BLOG_CATEGORIES, 
  getStoredBlogs, 
  addOrUpdateBlog, 
  deleteStoredBlog,
  getAllBlogs
} from '../data/blogData';

const AUTH_STORAGE_KEY = 'bb_admin_authenticated';

export const AdminBlogPage: React.FC = () => {
  const navigate = useNavigate();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true' || localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // CMS State
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');
  const [customBlogs, setCustomBlogs] = useState<BlogArticle[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Launch Strategy');
  const [readTime, setReadTime] = useState('6 min read');
  const [author, setAuthor] = useState('Mayank Tiwari (Product Launch Expert)');
  const [excerpt, setExcerpt] = useState('');
  const [keywords, setKeywords] = useState('Product Launch Company, Brand Consultant India');
  const [intro, setIntro] = useState('');
  
  // Dynamic Sections
  const [sections, setSections] = useState<Array<{
    heading: string;
    subheading?: string;
    bodyText: string;
    keyPointsText?: string;
  }>>([
    {
      heading: '1. Market Strategy & Positioning',
      subheading: 'Identify high-margin market gaps.',
      bodyText: 'Start with comprehensive competitor analysis, margin calculations, and ingredient sourcing benchmarks before mass manufacturing.',
      keyPointsText: 'Validate consumer demand\nLock in minimum 70% gross margins\nBenchmark against market leaders'
    }
  ]);

  // Dynamic FAQs
  const [faqs, setFaqs] = useState<Array<{ q: string; a: string }>>([
    {
      q: 'How fast can I launch my brand with Banega Brand?',
      a: 'With Banega Brand’s structured 6-step framework, standard turnaround is 45 to 90 days from formulation to marketplace shelf.'
    }
  ]);

  const loadBlogs = () => {
    const stored = getStoredBlogs();
    setCustomBlogs(stored);
    setTotalCount(getAllBlogs().length);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadBlogs();
    }
  }, [isAuthenticated]);

  // Handle Login Authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    const validUsernames = ['admin', 'admin@banegabrand.com', 'mayank', 'mayank@banegabrand.com'];
    const validPasswords = ['admin', 'admin123', 'banega2026', 'banega@2026', 'banegabrand2026'];

    const inputUser = loginId.trim().toLowerCase();
    const inputPass = password.trim();

    if (validUsernames.includes(inputUser) && validPasswords.includes(inputPass)) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setLoginError(null);
    } else {
      setLoginError('Invalid Login ID or Password. Please check credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setLoginId('');
    setPassword('');
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingId) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setSlug(generatedSlug);
    }
  };

  const addSection = () => {
    setSections(prev => [
      ...prev,
      {
        heading: `${prev.length + 1}. Key Strategy Phase`,
        subheading: '',
        bodyText: '',
        keyPointsText: ''
      }
    ]);
  };

  const removeSection = (idx: number) => {
    if (sections.length <= 1) return;
    setSections(prev => prev.filter((_, i) => i !== idx));
  };

  const updateSection = (idx: number, field: string, value: string) => {
    setSections(prev => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [field]: value };
      return updated;
    });
  };

  const addFaq = () => {
    setFaqs(prev => [...prev, { q: '', a: '' }]);
  };

  const removeFaq = (idx: number) => {
    setFaqs(prev => prev.filter((_, i) => i !== idx));
  };

  const updateFaq = (idx: number, field: 'q' | 'a', value: string) => {
    setFaqs(prev => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [field]: value };
      return updated;
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setSlug('');
    setCategory('Launch Strategy');
    setReadTime('6 min read');
    setAuthor('Mayank Tiwari (Product Launch Expert)');
    setExcerpt('');
    setKeywords('Product Launch Company, Brand Consultant India');
    setIntro('');
    setSections([
      {
        heading: '1. Market Strategy & Positioning',
        subheading: 'Identify high-margin market gaps.',
        bodyText: '',
        keyPointsText: ''
      }
    ]);
    setFaqs([]);
  };

  const handleEdit = (blog: BlogArticle) => {
    setEditingId(blog.id);
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setReadTime(blog.readTime);
    setAuthor(blog.author);
    setExcerpt(blog.excerpt);
    setKeywords(blog.targetKeywords.join(', '));
    setIntro(blog.content.intro);
    setSections(
      blog.content.sections.map(s => ({
        heading: s.heading,
        subheading: s.subheading || '',
        bodyText: s.body.join('\n\n'),
        keyPointsText: s.keyPoints ? s.keyPoints.join('\n') : ''
      }))
    );
    setFaqs(blog.content.faqs || []);
    setActiveTab('create');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this custom article?')) {
      deleteStoredBlog(id);
      loadBlogs();
      setSuccessMsg('Article deleted successfully.');
      setTimeout(() => setSuccessMsg(null), 4000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !intro.trim()) {
      alert('Please fill in the article title and introduction.');
      return;
    }

    const formattedSections = sections.map(s => ({
      heading: s.heading,
      subheading: s.subheading?.trim() || undefined,
      body: s.bodyText.split('\n\n').map(p => p.trim()).filter(Boolean),
      keyPoints: s.keyPointsText?.trim() 
        ? s.keyPointsText.split('\n').map(p => p.trim().replace(/^[-•*]\s*/, '')).filter(Boolean)
        : undefined
    })).filter(s => s.heading.trim());

    const formattedFaqs = faqs
      .filter(f => f.q.trim() && f.a.trim())
      .map(f => ({ q: f.q.trim(), a: f.a.trim() }));

    const targetKeywordsList = keywords
      .split(',')
      .map(k => k.trim())
      .filter(Boolean);

    const blogData: BlogArticle = {
      id: editingId || `custom-${Date.now()}-${slug || 'article'}`,
      slug: slug.trim() || `article-${Date.now()}`,
      title: title.trim(),
      category,
      readTime: readTime.trim() || '5 min read',
      author: author.trim() || 'Mayank Tiwari',
      date: new Date().toISOString().split('T')[0],
      excerpt: excerpt.trim() || intro.slice(0, 160) + '...',
      targetKeywords: targetKeywordsList.length ? targetKeywordsList : [category, 'Product Launch'],
      h1: title.trim(),
      content: {
        intro: intro.trim(),
        sections: formattedSections,
        faqs: formattedFaqs.length ? formattedFaqs : undefined
      },
      isCustom: true
    };

    addOrUpdateBlog(blogData);
    loadBlogs();
    setSuccessMsg(`Article "${blogData.title}" published successfully! It is now live on the website.`);
    resetForm();
    setTimeout(() => setSuccessMsg(null), 6000);
  };

  // ──────────────────────────────────────────────────────────────────────────
  // 1. LOGIN SCREEN (IF UNAUTHENTICATED)
  // ──────────────────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div 
        className="min-h-screen bg-[#09090b] text-white flex flex-col justify-between selection:bg-[#FF5722] selection:text-white"
        style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
      >
        <Helmet>
          <title>Admin Login | Banega Brand Publisher</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        <Navbar />

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-32">
          <div className="w-full max-w-md bg-[#121217] border border-zinc-800 rounded-[32px] p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-7">
            
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/30 text-[#FF5722] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/10">
                <Lock size={26} />
              </div>
              <h1 
                className="text-2xl sm:text-3xl font-normal uppercase tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', 'Bodoni MT', Georgia, serif" }}
              >
                Admin <span className="text-[#FF5722]">Portal</span>
              </h1>
              <p className="text-xs text-zinc-400 font-normal">
                Sign in to create, publish, and manage live articles.
              </p>
            </div>

            {/* Error Message */}
            {loginError && (
              <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-500/30 text-red-300 text-xs font-semibold flex items-center gap-2">
                <AlertCircle size={16} className="text-red-400 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Login ID / Username
                </label>
                <div className="relative">
                  <input 
                    type="text"
                    required
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="admin or admin@banegabrand.com"
                    className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3.5 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20 transition-all outline-none"
                  />
                  <User size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3.5 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20 transition-all outline-none"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#FF5722] hover:bg-white hover:text-black text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,87,34,0.35)] cursor-pointer flex items-center justify-center gap-2"
              >
                <ShieldCheck size={16} />
                <span>Secure Sign In</span>
              </button>
            </form>

            {/* Quick Demo Credentials Info Pill */}
            <div className="pt-2 text-center border-t border-zinc-800/80">
              <div className="inline-block p-3 rounded-xl bg-[#181820] border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
                <div><span className="font-bold text-zinc-300">Default Login ID:</span> <code className="text-[#FF5722]">admin</code></div>
                <div><span className="font-bold text-zinc-300">Default Password:</span> <code className="text-[#FF5722]">admin</code> or <code className="text-[#FF5722]">banega@2026</code></div>
              </div>
            </div>

          </div>
        </div>

        <FigmaFooter />
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 2. AUTHENTICATED ADMIN CMS DASHBOARD
  // ──────────────────────────────────────────────────────────────────────────
  return (
    <div 
      className="min-h-screen bg-[#09090b] text-white"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      <Helmet>
        <title>Admin Blog & Article CMS | Banega Brand</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#FF5722] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              Editorial Portal (Authorized)
            </div>
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', 'Bodoni MT', Georgia, serif" }}
            >
              Blog & Article <span className="text-[#FF5722]">CMS</span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 font-normal mt-1">
              Publish and manage live articles that appear instantly across Banega Brand’s Knowledge Hub.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/blog"
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border border-white/20"
            >
              <Eye size={15} />
              Live Site (/blog)
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-full bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/30 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <LogOut size={15} />
              Log Out
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {successMsg && (
          <div className="mt-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center justify-between gap-4 animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
              <span className="text-sm font-semibold">{successMsg}</span>
            </div>
            <Link 
              to="/blog" 
              className="text-xs font-bold uppercase tracking-wider underline hover:text-white shrink-0"
            >
              View on Blog →
            </Link>
          </div>
        )}

        {/* Tab Switcher & Stats */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
          <div className="flex bg-[#141419] p-1.5 rounded-2xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('create')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'create'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {editingId ? 'Edit Article' : '✍️ Write & Publish Article'}
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'manage'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>📋 Custom Articles</span>
              <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-bold">
                {customBlogs.length}
              </span>
            </button>
          </div>

          <div className="text-xs text-zinc-400">
            Total Articles in Directory: <strong className="text-white">{totalCount}</strong>
          </div>
        </div>

        {/* ── TAB 1: WRITE & PUBLISH ────────────────────────────────────────── */}
        {activeTab === 'create' && (
          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            
            {/* 1. Core Metadata Card */}
            <div className="bg-[#121217] border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-4">
                <FileText size={18} className="text-[#FF5722]" />
                <h2 className="text-base font-bold uppercase tracking-wider text-white">
                  1. General Article Information
                </h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Article Title *
                  </label>
                  <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. How to Launch a Luxury D2C Fragrance Brand in India"
                    className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3.5 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20 transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      URL Slug
                    </label>
                    <input 
                      type="text"
                      required
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="how-to-launch-fragrance-brand"
                      className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Category
                    </label>
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3 text-sm font-medium text-white focus:border-[#FF5722] outline-none cursor-pointer"
                    >
                      {BLOG_CATEGORIES.filter(c => c !== 'All').map(cat => (
                        <option key={cat} value={cat} className="bg-[#1a1a22] text-white">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Read Time
                    </label>
                    <input 
                      type="text"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="6 min read"
                      className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Author Name
                    </label>
                    <input 
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Mayank Tiwari (Product Launch Expert)"
                      className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Target SEO Keywords (Comma Separated)
                    </label>
                    <input 
                      type="text"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      placeholder="Perfume Consultant, Launch Company, D2C India"
                      className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Article Excerpt / Quick Summary
                  </label>
                  <input 
                    type="text"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Short engaging summary shown on blog preview cards (1-2 sentences)..."
                    className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3.5 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Introduction Paragraph *
                  </label>
                  <textarea 
                    rows={3}
                    required
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                    placeholder="Provide the opening hook and context for this article..."
                    className="w-full bg-[#1a1a22] border border-zinc-700/80 rounded-xl p-3.5 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* 2. Dynamic Content Sections */}
            <div className="bg-[#121217] border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-[#FF5722]" />
                  <h2 className="text-base font-bold uppercase tracking-wider text-white">
                    2. Article Content Sections ({sections.length})
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={addSection}
                  className="px-4 py-2 rounded-full bg-[#FF5722]/15 hover:bg-[#FF5722]/25 text-[#FF5722] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus size={14} /> Add Section
                </button>
              </div>

              <div className="space-y-6">
                {sections.map((sec, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-2xl bg-[#181820] border border-zinc-700/80 space-y-4 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                        Section #{idx + 1}
                      </span>
                      {sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSection(idx)}
                          className="text-zinc-500 hover:text-red-400 p-1 rounded-lg transition-colors cursor-pointer"
                          title="Delete Section"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                          Section Heading *
                        </label>
                        <input 
                          type="text"
                          required
                          value={sec.heading}
                          onChange={(e) => updateSection(idx, 'heading', e.target.value)}
                          placeholder="e.g. 1. Formulation & Lab Batching"
                          className="w-full bg-[#121217] border border-zinc-700 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                          Subheading (Optional)
                        </label>
                        <input 
                          type="text"
                          value={sec.subheading}
                          onChange={(e) => updateSection(idx, 'subheading', e.target.value)}
                          placeholder="e.g. Key benchmarks for stability"
                          className="w-full bg-[#121217] border border-zinc-700 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                        Body Content (Separate paragraphs with double newlines) *
                      </label>
                      <textarea 
                        rows={4}
                        required
                        value={sec.bodyText}
                        onChange={(e) => updateSection(idx, 'bodyText', e.target.value)}
                        placeholder="Write in-depth analysis and guidance for this section..."
                        className="w-full bg-[#121217] border border-zinc-700 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                        Key Takeaway Points (1 bullet per line, optional)
                      </label>
                      <textarea 
                        rows={2}
                        value={sec.keyPointsText}
                        onChange={(e) => updateSection(idx, 'keyPointsText', e.target.value)}
                        placeholder="• Verify IFRA certification&#10;• Mandate 90-day stability tests"
                        className="w-full bg-[#121217] border border-zinc-700 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Article FAQs */}
            <div className="bg-[#121217] border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#FF5722]" />
                  <h2 className="text-base font-bold uppercase tracking-wider text-white">
                    3. Quick Clarity FAQs ({faqs.length})
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={addFaq}
                  className="px-4 py-2 rounded-full bg-[#FF5722]/15 hover:bg-[#FF5722]/25 text-[#FF5722] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus size={14} /> Add FAQ
                </button>
              </div>

              {faqs.length === 0 ? (
                <p className="text-xs text-zinc-500">No FAQs added. Click "+ Add FAQ" to attach question answers.</p>
              ) : (
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#181820] border border-zinc-700/80 space-y-3 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase text-orange-400">FAQ #{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeFaq(idx)}
                          className="text-zinc-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <input 
                        type="text"
                        value={faq.q}
                        onChange={(e) => updateFaq(idx, 'q', e.target.value)}
                        placeholder="Question (e.g. What is the minimum capital required?)"
                        className="w-full bg-[#121217] border border-zinc-700 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                      />
                      <textarea 
                        rows={2}
                        value={faq.a}
                        onChange={(e) => updateFaq(idx, 'a', e.target.value)}
                        placeholder="Direct answer for reader clarity..."
                        className="w-full bg-[#121217] border border-zinc-700 rounded-xl p-3 text-sm font-medium text-white placeholder:text-zinc-500 focus:border-[#FF5722] outline-none"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submission Actions */}
            <div className="flex flex-wrap items-center justify-end gap-4 pt-4">
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Cancel Edit
                </button>
              )}
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-[#FF5722] hover:bg-white hover:text-black text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,87,34,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <span>{editingId ? 'Update & Save Live Article' : '🚀 Publish Article to Live Website'}</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </form>
        )}

        {/* ── TAB 2: MANAGE ARTICLES ────────────────────────────────────────── */}
        {activeTab === 'manage' && (
          <div className="mt-8 space-y-6">
            {customBlogs.length === 0 ? (
              <div className="bg-[#121217] border border-zinc-800 rounded-3xl p-12 text-center space-y-4">
                <FileText size={40} className="text-zinc-600 mx-auto" />
                <h3 className="text-xl font-bold text-white">No Custom Articles Yet</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  You haven’t posted any custom articles yet. Switch to the "Write & Publish Article" tab to publish your first post!
                </p>
                <button
                  onClick={() => setActiveTab('create')}
                  className="px-6 py-3 rounded-full bg-[#FF5722] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#e04a1b] cursor-pointer"
                >
                  Write First Article
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {customBlogs.map((blog) => (
                  <div 
                    key={blog.id}
                    className="bg-[#121217] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FF5722] text-[10px] font-bold uppercase tracking-wider">
                          {blog.category}
                        </span>
                        <span className="text-xs text-zinc-500 flex items-center gap-1">
                          <Clock size={12} /> {blog.readTime}
                        </span>
                        <span className="text-xs text-zinc-500">
                          • {blog.date}
                        </span>
                      </div>
                      <h3 
                        className="text-lg sm:text-xl font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Playfair Display', 'Bodoni MT', Georgia, serif" }}
                      >
                        {blog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Edit3 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="px-4 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                      <Link
                        to="/blog"
                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                        title="View Live"
                      >
                        <ExternalLink size={16} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>

      <FigmaFooter />
    </div>
  );
};
