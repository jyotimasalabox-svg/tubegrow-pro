import React, { useState } from 'react';
import { 
  Youtube, 
  Facebook, 
  Instagram, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Sparkles, 
  Share2, 
  BarChart3, 
  Layers, 
  ExternalLink, 
  Check, 
  Film, 
  Image as ImageIcon, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  Globe, 
  RefreshCw, 
  Sliders, 
  ArrowUpRight, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function UnifiedBusinessDashboard({ lang }) {
  // Navigation between 'uploader' and 'dashboard'
  const [subTab, setSubTab] = useState('uploader'); // 'uploader' | 'dashboard'

  // Uploader Form States
  const [videoFile, setVideoFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80');
  const [title, setTitle] = useState('1000 Subscribers Fast Trick 2026 | Full Strategy');
  const [description, setDescription] = useState('Watch full step-by-step masterclass to get 1000 subscribers and 4000 watch hours quickly and legally. #YouTubeGrowth #Creator #Viral');
  const [tags, setTags] = useState('1000 subscribers, 4000 watch hours, youtube growth, viral trick, creator studio');
  
  // Platform selections
  const [platforms, setPlatforms] = useState({
    youtube: true,
    facebook: true,
    instagram: true
  });

  // Aspect ratio / format choices
  const [fbPostType, setFbPostType] = useState('reels_and_page'); // 'reels_and_page' | 'full_post'
  const [igAspectRatio, setIgAspectRatio] = useState('1:1'); // '1:1' | '4:5' | '9:16'
  const [scheduleTime, setScheduleTime] = useState('now'); // 'now' | 'peak' | 'custom'

  // Uploading simulation states
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({
    youtube: 0,
    facebook: 0,
    instagram: 0
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Uploaded posts history
  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      title: "How to Grow YouTube Channel in 2026 (Zero to 10K)",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=80",
      date: "Today at 02:30 PM",
      platforms: ["youtube", "facebook", "instagram"],
      status: "Live",
      views: { yt: "14.2K", fb: "8.5K", ig: "21.4K" },
      engagement: "11.2%"
    },
    {
      id: 2,
      title: "5 Secret Camera Settings for Professional 4K Video",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=80",
      date: "Yesterday at 06:45 PM",
      platforms: ["youtube", "facebook", "instagram"],
      status: "Live",
      views: { yt: "28.5K", fb: "19.1K", ig: "45.0K" },
      engagement: "9.8%"
    },
    {
      id: 3,
      title: "Top 10 AI Tools Every Content Creator Needs Now",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop&q=80",
      date: "3 days ago",
      platforms: ["youtube", "facebook"],
      status: "Live",
      views: { yt: "52.0K", fb: "34.2K", ig: "0" },
      engagement: "8.4%"
    }
  ]);

  const togglePlatform = (key) => {
    setPlatforms(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleVideoSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleStartMultiUpload = (e) => {
    e.preventDefault();
    if (!platforms.youtube && !platforms.facebook && !platforms.instagram) {
      alert(lang === 'hi' ? 'कम से कम एक प्लेटफ़ॉर्म चुनें!' : 'Please select at least one platform!');
      return;
    }

    setIsUploading(true);
    setUploadSuccess(false);
    setUploadProgress({ youtube: 0, facebook: 0, instagram: 0 });

    // Simulate multi-platform background upload with progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const nextYt = platforms.youtube ? Math.min(100, prev.youtube + 20) : 100;
        const nextFb = platforms.facebook ? Math.min(100, prev.facebook + 25) : 100;
        const nextIg = platforms.instagram ? Math.min(100, prev.instagram + 22) : 100;

        if (nextYt === 100 && nextFb === 100 && nextIg === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setUploadSuccess(true);
            
            // Add to recent posts
            const newPost = {
              id: Date.now(),
              title: title,
              thumbnail: imagePreview,
              date: "Just Now",
              platforms: Object.keys(platforms).filter(k => platforms[k]),
              status: scheduleTime === 'now' ? 'Live' : 'Scheduled',
              views: { yt: "1", fb: "1", ig: "1" },
              engagement: "New"
            };
            setRecentPosts(prevPosts => [newPost, ...prevPosts]);
          }, 600);
        }

        return { youtube: nextYt, facebook: nextFb, instagram: nextIg };
      });
    }, 300);
  };

  return (
    <div className="space-y-8">
      
      {/* Top Header & Sub-Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-red-500/20 via-blue-500/20 to-purple-500/20 border border-white/10 text-xs font-bold text-white mb-2">
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'hi' ? 'यूट्यूब + फेसबुक + इंस्टाग्राम मल्टी-पब्लिशर' : 'YouTube + Facebook + Instagram Multi-Publisher'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {lang === 'hi' 
              ? 'मल्टी-प्लेटफ़ॉर्म वीडियो अपलोड & बिज़नेस डैशबोर्ड' 
              : 'Cross-Platform Video Upload & Business Dashboard'}
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            {lang === 'hi' 
              ? 'एक ही क्लिक में YouTube, Facebook और Instagram पर फुल-साइज़ इमेज व वीडियो अपलोड करें और तीनों का बिज़नेस डैशबोर्ड एक ही जगह ऑपरेट करें।'
              : 'Publish video & full-size images simultaneously across YouTube, Facebook, and Instagram, and manage business metrics in one command center.'}
          </p>
        </div>

        {/* View Switcher: Uploader vs Dashboard */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-2xl self-start md:self-auto shadow-inner">
          <button
            onClick={() => setSubTab('uploader')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
              subTab === 'uploader' 
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UploadCloud className="w-4 h-4" />
            <span>{lang === 'hi' ? '1-क्लिक मल्टी अपलोड' : '1-Click Multi Upload'}</span>
          </button>
          <button
            onClick={() => setSubTab('dashboard')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
              subTab === 'dashboard' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>{lang === 'hi' ? 'एकीकृत बिज़नेस डैशबोर्ड' : 'Business Command Center'}</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: MULTI-PLATFORM UPLOADER */}
      {subTab === 'uploader' && (
        <div className="space-y-8">
          
          {/* Main Upload Box */}
          <form onSubmit={handleStartMultiUpload} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Media & Platforms (5 Cols) */}
            <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-white/10 space-y-6">
              
              {/* Step 1: Select Platforms */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {lang === 'hi' ? '1. टारगेट प्लेटफ़ॉर्म चुनें (Target Platforms):' : '1. Choose Target Platforms:'}
                </label>
                
                <div className="grid grid-cols-3 gap-2.5">
                  {/* YouTube */}
                  <div 
                    onClick={() => togglePlatform('youtube')}
                    className={`p-3 rounded-2xl border cursor-pointer transition flex flex-col items-center justify-center gap-2 text-center select-none ${
                      platforms.youtube 
                        ? 'bg-red-500/15 border-red-500/50 text-white shadow-md shadow-red-500/10' 
                        : 'bg-slate-900/60 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-red-600/20 flex items-center justify-center text-red-500">
                      <Youtube className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-xs font-bold">YouTube</span>
                    <span className="text-[10px] text-slate-400">16:9 / Shorts</span>
                  </div>

                  {/* Facebook */}
                  <div 
                    onClick={() => togglePlatform('facebook')}
                    className={`p-3 rounded-2xl border cursor-pointer transition flex flex-col items-center justify-center gap-2 text-center select-none ${
                      platforms.facebook 
                        ? 'bg-blue-500/15 border-blue-500/50 text-white shadow-md shadow-blue-500/10' 
                        : 'bg-slate-900/60 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                      <Facebook className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-xs font-bold">Facebook</span>
                    <span className="text-[10px] text-slate-400">Page / Reels</span>
                  </div>

                  {/* Instagram */}
                  <div 
                    onClick={() => togglePlatform('instagram')}
                    className={`p-3 rounded-2xl border cursor-pointer transition flex flex-col items-center justify-center gap-2 text-center select-none ${
                      platforms.instagram 
                        ? 'bg-purple-500/15 border-purple-500/50 text-white shadow-md shadow-purple-500/10' 
                        : 'bg-slate-900/60 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 flex items-center justify-center text-rose-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold">Instagram</span>
                    <span className="text-[10px] text-slate-400">Full Post / Reel</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Upload Files (Video + Full Size Image) */}
              <div className="space-y-4">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {lang === 'hi' ? '2. मीडिया फाइलें चुनें (Video & Image):' : '2. Select Media Files:'}
                </label>

                {/* Video Picker */}
                <label className="p-4 rounded-2xl bg-slate-900/80 border-2 border-dashed border-slate-700/80 hover:border-red-500/50 cursor-pointer flex items-center gap-3 transition group">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                    <Film className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">
                      {videoFile ? videoFile.name : (lang === 'hi' ? 'वीडियो फाइल चुनें (MP4, MOV)' : 'Select Video File (MP4, MOV)')}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {videoFile ? `${(videoFile.size / 1024 / 1024).toFixed(1)} MB` : 'Up to 4K resolution supported'}
                    </p>
                  </div>
                  <input type="file" accept="video/*" onChange={handleVideoSelect} className="hidden" />
                </label>

                {/* Full-size Image / Thumbnail Picker */}
                <div className="space-y-2">
                  <label className="p-4 rounded-2xl bg-slate-900/80 border-2 border-dashed border-slate-700/80 hover:border-amber-500/50 cursor-pointer flex items-center gap-3 transition group">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-white truncate">
                        {imageFile ? imageFile.name : (lang === 'hi' ? 'फुल साइज़ इमेज / थंबनेल चुनें' : 'Select Full-Size Image / Thumbnail')}
                      </p>
                      <p className="text-[10px] text-slate-500">High-res (1080x1080 / 1920x1080)</p>
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
                  </label>

                  {/* Thumbnail Preview with Aspect Ratio Selector */}
                  <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-slate-800 aspect-video group">
                    <img src={imagePreview} alt="Selected thumbnail" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 justify-between">
                      <span className="text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-md backdrop-blur">
                        Full Size Preview
                      </span>
                      <div className="flex gap-1">
                        {['1:1', '4:5', '16:9'].map((ratio) => (
                          <button
                            key={ratio}
                            type="button"
                            onClick={() => setIgAspectRatio(ratio)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
                              igAspectRatio === ratio ? 'bg-purple-600 text-white' : 'bg-black/60 text-slate-300'
                            }`}
                          >
                            {ratio}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Title, Description, Scheduling & Submit (7 Cols) */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-white/10 space-y-5">
              
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {lang === 'hi' ? '3. वीडियो विवरण & SEO डेटा:' : '3. Post Content & Details:'}
                </label>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Cross-Platform Ready</span>
                </span>
              </div>

              {/* Title input */}
              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">
                  {lang === 'hi' ? 'शीर्षक (Title across YouTube, FB, IG):' : 'Video Title:'}
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-[#10121b] border border-slate-700/80 rounded-xl text-white text-xs font-semibold focus:outline-none focus:border-red-500/60"
                />
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">
                  {lang === 'hi' ? 'विवरण & कैप्शन (Caption & Description):' : 'Caption & Description:'}
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#10121b] border border-slate-700/80 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-red-500/60"
                />
              </div>

              {/* Tags */}
              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 font-medium">
                  {lang === 'hi' ? 'टैग्स व कीवर्ड्स (Tags & Keywords):' : 'Tags & Topics:'}
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#10121b] border border-slate-700/80 rounded-xl text-white text-xs focus:outline-none focus:border-red-500/60"
                />
              </div>

              {/* Publishing Schedule Options */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <label className="block text-xs font-bold text-slate-300">
                  {lang === 'hi' ? 'पब्लिशिंग समय (Publish Schedule):' : 'Publish Timing:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div
                    onClick={() => setScheduleTime('now')}
                    className={`p-3 rounded-xl border cursor-pointer transition flex items-center gap-2.5 ${
                      scheduleTime === 'now' 
                        ? 'bg-red-500/15 border-red-500/50 text-white' 
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <input type="radio" checked={scheduleTime === 'now'} onChange={() => {}} className="accent-red-500" />
                    <div>
                      <p className="text-xs font-bold text-white">{lang === 'hi' ? 'तुरंत पब्लिश करें' : 'Publish Immediately'}</p>
                      <p className="text-[10px] text-slate-400">Live across all 3 apps</p>
                    </div>
                  </div>

                  <div
                    onClick={() => setScheduleTime('peak')}
                    className={`p-3 rounded-xl border cursor-pointer transition flex items-center gap-2.5 ${
                      scheduleTime === 'peak' 
                        ? 'bg-amber-500/15 border-amber-500/50 text-white' 
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <input type="radio" checked={scheduleTime === 'peak'} onChange={() => {}} className="accent-amber-500" />
                    <div>
                      <p className="text-xs font-bold text-white">{lang === 'hi' ? 'पीक टाइम (शाम 6:30 PM)' : 'Peak Hours (6:30 PM IST)'}</p>
                      <p className="text-[10px] text-slate-400">Highest audience activity</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Upload Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:opacity-95 text-white font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-red-600/25 transition disabled:opacity-50"
                >
                  {isUploading ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{lang === 'hi' ? 'तीनों प्लेटफ़ॉर्म पर अपलोड हो रहा है...' : 'Syncing Across Platforms...'}</span>
                    </span>
                  ) : (
                    <>
                      <UploadCloud className="w-5 h-5" />
                      <span>
                        {lang === 'hi' 
                          ? 'YouTube, Facebook & Instagram पर अपलोड करें' 
                          : 'Publish to YouTube, Facebook & Instagram'}
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Multi-Progress Bar Simulation */}
              {isUploading && (
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 animate-fade-in">
                  <p className="text-xs font-bold text-white flex items-center justify-between">
                    <span>{lang === 'hi' ? 'लाइव अपलोड स्टेटस:' : 'Multi-Platform Sync Status:'}</span>
                    <span className="text-slate-400 text-[11px]">Processing in 4K...</span>
                  </p>

                  {platforms.youtube && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-red-400 font-bold flex items-center gap-1">
                          <Youtube className="w-3 h-3" /> YouTube Studio
                        </span>
                        <span className="text-slate-400">{uploadProgress.youtube}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-600 rounded-full transition-all duration-300" style={{ width: `${uploadProgress.youtube}%` }} />
                      </div>
                    </div>
                  )}

                  {platforms.facebook && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-blue-400 font-bold flex items-center gap-1">
                          <Facebook className="w-3 h-3" /> Facebook Meta Page
                        </span>
                        <span className="text-slate-400">{uploadProgress.facebook}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${uploadProgress.facebook}%` }} />
                      </div>
                    </div>
                  )}

                  {platforms.instagram && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-purple-400 font-bold flex items-center gap-1">
                          <Instagram className="w-3 h-3" /> Instagram Professional
                        </span>
                        <span className="text-slate-400">{uploadProgress.instagram}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600 rounded-full transition-all duration-300" style={{ width: `${uploadProgress.instagram}%` }} />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Upload Success Card */}
              {uploadSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <p className="text-xs font-bold text-white">
                      {lang === 'hi' ? 'सफलतापूर्वक पब्लिश हो गया! 🎉' : 'Successfully Published to All Platforms! 🎉'}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {lang === 'hi' 
                        ? 'आपका वीडियो और फुल-साइज़ इमेज YouTube, Facebook Page और Instagram पर लाइव हो गए हैं। नीचे बिज़नेस डैशबोर्ड में देखें।' 
                        : 'Your video and full-size image are now live across YouTube, Facebook, and Instagram.'}
                    </p>
                    <div className="pt-2 flex gap-3 text-xs">
                      <button 
                        type="button" 
                        onClick={() => setSubTab('dashboard')} 
                        className="text-emerald-400 font-bold hover:underline"
                      >
                        {lang === 'hi' ? 'डैशबोर्ड में मेट्रिक्स देखें &rarr;' : 'View in Dashboard &rarr;'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </form>

        </div>
      )}

      {/* SUB-TAB 2: UNIFIED BUSINESS COMMAND CENTER */}
      {subTab === 'dashboard' && (
        <div className="space-y-8 animate-fade-in">
          
          {/* Top 4 KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                <span>{lang === 'hi' ? 'कुल कंबाइंड ऑडियंस' : 'Combined Audience'}</span>
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white">168.4K</div>
              <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12.4% this month
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-rose-400" />
                <span>{lang === 'hi' ? 'कुल 30-दिन व्यूज' : '30-Day Cross Views'}</span>
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white">2.45M</div>
              <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +28.1% vs last month
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'hi' ? 'अनुमानित मासिक रेवेन्यू' : 'Monthly Estimated Rev.'}</span>
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white">₹58,400</div>
              <p className="text-[10px] text-slate-400">AdSense + Meta In-Stream</p>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'hi' ? 'औसत एंगेजमेंट दर' : 'Avg. Engagement'}</span>
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white">9.2%</div>
              <p className="text-[10px] text-slate-400">Top 5% in Creator Tier</p>
            </div>

          </div>

          {/* 3 Business Accounts Cards: YouTube, Facebook, Instagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* YouTube Studio Card */}
            <div className="glass-panel rounded-3xl p-6 border border-red-500/20 relative space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center text-red-500">
                    <Youtube className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">YouTube Studio</h3>
                    <p className="text-[11px] text-slate-400">@techgurugyan</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Connected
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Subscribers:</span>
                  <span className="font-bold text-white">342 / 1,000 (34%)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Public Watch Hours:</span>
                  <span className="font-bold text-white">1,250 / 4,000 hrs</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">30-Day Views:</span>
                  <span className="font-bold text-emerald-400">480,200</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Monetization Status:</span>
                  <span className="font-bold text-amber-400">In Progress</span>
                </div>
              </div>

              <a
                href="https://studio.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition border border-slate-700"
              >
                <span>YouTube Studio खोलें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Facebook Meta Business Suite Card */}
            <div className="glass-panel rounded-3xl p-6 border border-blue-500/20 relative space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                    <Facebook className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Meta Business Suite</h3>
                    <p className="text-[11px] text-slate-400">Tech Guru Page</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Connected
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Page Followers:</span>
                  <span className="font-bold text-white">74,200</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Post Reach (30D):</span>
                  <span className="font-bold text-white">1.1M Accounts</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Reels Plays:</span>
                  <span className="font-bold text-emerald-400">820,000</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">In-Stream Monetization:</span>
                  <span className="font-bold text-emerald-400">Active (₹22,100)</span>
                </div>
              </div>

              <a
                href="https://business.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition border border-slate-700"
              >
                <span>Meta Business Suite खोलें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Instagram Professional Creator Card */}
            <div className="glass-panel rounded-3xl p-6 border border-purple-500/20 relative space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Instagram Creator</h3>
                    <p className="text-[11px] text-slate-400">@techgurugyan_official</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Connected
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Followers:</span>
                  <span className="font-bold text-white">93,850</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Accounts Reached:</span>
                  <span className="font-bold text-white">1.8M</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Profile Visits:</span>
                  <span className="font-bold text-purple-400">42,600</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Creator Gifts / Brand:</span>
                  <span className="font-bold text-emerald-400">Eligible</span>
                </div>
              </div>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition border border-slate-700"
              >
                <span>Instagram Insights खोलें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Cross-Platform Analytics Distribution */}
          <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'hi' ? 'प्लेटफ़ॉर्म अनुसार व्यूज शेयर (Traffic Distribution):' : 'Platform Traffic & Audience Share:'}</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-red-400 font-bold flex items-center gap-1.5">
                    <Youtube className="w-3.5 h-3.5 fill-current" /> YouTube Long & Shorts
                  </span>
                  <span className="text-white font-bold">45% (1.10M views)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-purple-400 font-bold flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5" /> Instagram Reels & Feed
                  </span>
                  <span className="text-white font-bold">35% (857K views)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-rose-500 to-purple-600 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-blue-400 font-bold flex items-center gap-1.5">
                    <Facebook className="w-3.5 h-3.5 fill-current" /> Facebook Page & Video
                  </span>
                  <span className="text-white font-bold">20% (490K views)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '20%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Multi-Platform Uploads Table */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? 'हालिया मल्टी-प्लेटफ़ॉर्म अपलोड्स' : 'Recent Cross-Platform Uploads'}</span>
              </span>
              <span className="text-xs text-slate-400">{recentPosts.length} posts</span>
            </h3>

            <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/90 text-slate-400 uppercase font-bold text-[10px] tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="px-5 py-3.5">Video & Thumbnail</th>
                      <th className="px-5 py-3.5">Platforms</th>
                      <th className="px-5 py-3.5">Status</th>
                      <th className="px-5 py-3.5">Cross Views</th>
                      <th className="px-5 py-3.5">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {recentPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-slate-800/40 transition">
                        <td className="px-5 py-3.5 flex items-center gap-3">
                          <img src={post.thumbnail} alt="" className="w-14 h-9 rounded-lg object-cover shrink-0 border border-slate-700" />
                          <span className="font-bold text-white max-w-xs truncate">{post.title}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-1.5">
                            {post.platforms.includes('youtube') && (
                              <div className="p-1 rounded bg-red-600/20 text-red-500" title="YouTube">
                                <Youtube className="w-3.5 h-3.5 fill-current" />
                              </div>
                            )}
                            {post.platforms.includes('facebook') && (
                              <div className="p-1 rounded bg-blue-600/20 text-blue-500" title="Facebook">
                                <Facebook className="w-3.5 h-3.5 fill-current" />
                              </div>
                            )}
                            {post.platforms.includes('instagram') && (
                              <div className="p-1 rounded bg-purple-600/20 text-purple-400" title="Instagram">
                                <Instagram className="w-3.5 h-3.5" />
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {post.status}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-slate-300">
                          <div className="text-[11px] font-semibold space-x-2">
                            <span>YT: {post.views.yt}</span>
                            <span>• FB: {post.views.fb}</span>
                            <span>• IG: {post.views.ig}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5 text-slate-400 text-[11px]">
                          {post.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
