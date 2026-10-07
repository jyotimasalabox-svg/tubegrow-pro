import React, { useState } from 'react';
import { 
  Eye, 
  Smartphone, 
  Monitor, 
  Sun, 
  Moon, 
  CheckCircle, 
  AlertCircle, 
  Upload, 
  Image as ImageIcon,
  Sparkles
} from 'lucide-react';

const presetThumbnails = [
  {
    name: "Tech High Contrast",
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Gaming Action",
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Food Close-Up",
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80"
  },
  {
    name: "Vlog Mystery",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80"
  }
];

export default function ThumbnailPreviewer({ currentChannel, lang }) {
  const [thumbUrl, setThumbUrl] = useState(presetThumbnails[0].url);
  const [videoTitle, setVideoTitle] = useState("Why 99% Of Creators Fail in 2026 (The Brutal Truth)");
  const [viewMode, setViewMode] = useState('mobile_dark'); // 'desktop', 'mobile_dark', 'mobile_light'
  const [videoDuration, setVideoDuration] = useState("12:45");

  const handleCustomUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setThumbUrl(objectUrl);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Eye className="w-6 h-6 text-red-500" />
            <span>{lang === 'hi' ? 'थंबनेल CTR इंस्पेक्टर & यूट्यूब सिम्युलेटर' : 'Thumbnail CTR Inspector & Feed Simulator'}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {lang === 'hi'
              ? 'देखें कि आपका थंबनेल यूट्यूब मोबाइल और डेस्कटॉप पर दूसरे बड़े चैनलों के बीच कैसा दिखेगा।'
              : 'Preview your thumbnail inside real YouTube Mobile & Desktop layouts before publishing.'}
          </p>
        </div>

        {/* View Switchers */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setViewMode('mobile_dark')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
              viewMode === 'mobile_dark' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Dark</span>
          </button>
          <button
            onClick={() => setViewMode('mobile_light')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
              viewMode === 'mobile_light' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Mobile Light</span>
          </button>
          <button
            onClick={() => setViewMode('desktop')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
              viewMode === 'desktop' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
        </div>
      </div>

      {/* Editor Controls */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Title & Duration */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {lang === 'hi' ? 'वीडियो का शीर्षक (Title):' : 'Video Title:'}
            </label>
            <input
              type="text"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#10121b] border border-slate-700/80 rounded-xl text-white text-xs focus:outline-none focus:border-red-500/60"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {lang === 'hi' ? 'वीडियो अवधि:' : 'Video Duration:'}
              </label>
              <input
                type="text"
                value={videoDuration}
                onChange={(e) => setVideoDuration(e.target.value)}
                placeholder="10:35"
                className="w-full px-4 py-2.5 bg-[#10121b] border border-slate-700/80 rounded-xl text-white text-xs focus:outline-none focus:border-red-500/60"
              />
            </div>
          </div>
        </div>

        {/* Thumbnail Selector / Custom Upload */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            {lang === 'hi' ? 'थंबनेल चुनें या अपलोड करें:' : 'Choose or Upload Thumbnail:'}
          </label>
          <div className="flex items-center gap-2">
            <label className="flex-1 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 border-dashed rounded-xl text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 cursor-pointer transition">
              <Upload className="w-4 h-4 text-red-400" />
              <span>{lang === 'hi' ? 'अपना थंबनेल अपलोड करें' : 'Upload Local Image'}</span>
              <input type="file" accept="image/*" onChange={handleCustomUpload} className="hidden" />
            </label>
          </div>

          <div className="flex gap-2">
            {presetThumbnails.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setThumbUrl(preset.url)}
                className={`flex-1 text-[11px] py-1.5 px-2 rounded-lg border truncate transition font-medium ${
                  thumbUrl === preset.url 
                    ? 'bg-red-500/20 text-red-300 border-red-500/50' 
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Simulator Frame */}
      <div className="flex justify-center">
        {viewMode === 'desktop' ? (
          /* Desktop Simulator */
          <div className="w-full max-w-4xl bg-[#0f0f0f] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="text-xs text-slate-500 font-bold mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>YouTube Desktop Feed Preview</span>
              <span className="text-slate-400">1920 &times; 1080 Aspect Ratio (16:9)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Main active video */}
              <div className="space-y-3 cursor-pointer group">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                  <img src={thumbUrl} alt="Thumbnail preview" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-bold">
                    {videoDuration}
                  </span>
                </div>
                <div className="flex gap-3">
                  <img src={currentChannel.avatar} alt="Avatar" className="w-9 h-9 rounded-full object-cover shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-slate-200">
                      {videoTitle}
                    </h3>
                    <p className="text-xs text-slate-400">{currentChannel.name}</p>
                    <p className="text-xs text-slate-500">14K views &bull; 2 hours ago</p>
                  </div>
                </div>
              </div>

              {/* Competitor Placeholder 1 */}
              <div className="space-y-3 opacity-60">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
                  <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-bold">18:20</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-700 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white line-clamp-2">How Top Creators Edit Videos 10x Faster</p>
                    <p className="text-xs text-slate-400">Creator Hub</p>
                    <p className="text-xs text-slate-500">92K views &bull; 1 day ago</p>
                  </div>
                </div>
              </div>

              {/* Competitor Placeholder 2 */}
              <div className="space-y-3 opacity-60">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
                  <img src="https://images.unsplash.com/photo-1616469829941-c7200edec809?w=500&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-bold">08:14</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-700 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white line-clamp-2">Stop Making These 5 Thumbnail Mistakes</p>
                    <p className="text-xs text-slate-400">Design Studio</p>
                    <p className="text-xs text-slate-500">45K views &bull; 3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mobile Phone Simulator */
          <div className={`w-[360px] rounded-[36px] p-4 border-4 shadow-2xl transition ${
            viewMode === 'mobile_dark' 
              ? 'bg-[#0f0f0f] border-slate-700 text-white' 
              : 'bg-white border-slate-300 text-slate-900'
          }`}>
            {/* Phone Speaker Notch */}
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4" />

            <div className="space-y-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-md">
                <img src={thumbUrl} alt="Mobile preview" className="w-full h-full object-cover" />
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/85 text-white text-[10px] font-bold">
                  {videoDuration}
                </span>
              </div>

              <div className="flex gap-3 pt-1">
                <img src={currentChannel.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div className="space-y-1 flex-1">
                  <h3 className={`text-xs font-bold leading-tight line-clamp-2 ${
                    viewMode === 'mobile_dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {videoTitle}
                  </h3>
                  <p className={`text-[11px] ${viewMode === 'mobile_dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {currentChannel.name} &bull; 8.4K views &bull; 1 day ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTR Diagnostic Checklist */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'hi' ? 'थंबनेल CTR चेकलिस्ट (8%+ CTR लाने के लिए)' : 'Thumbnail CTR 8%+ Quality Checklist'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>3-Word Rule</span>
            </span>
            <p className="text-slate-400">
              {lang === 'hi' ? 'थंबनेल पर 3 से 4 बड़े शब्दों से ज्यादा न लिखें।' : 'Never put more than 3-4 bold words on the image.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>High Contrast</span>
            </span>
            <p className="text-slate-400">
              {lang === 'hi' ? 'बैकग्राउंड डार्क हो तो टेक्स्ट ब्राइट येलो या वाइट रखें।' : 'Ensure high contrast against YouTube\'s dark and light UI.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Right-Corner Clear</span>
            </span>
            <p className="text-slate-400">
              {lang === 'hi' ? 'निचले दाएं कोने पर कुछ न लिखें, वहां वीडियो टाइमर आता है।' : 'Bottom-right corner must be empty (time badge covers it).'}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
