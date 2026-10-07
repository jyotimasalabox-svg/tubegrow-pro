import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ArrowRight, 
  Tv, 
  Award,
  Zap,
  BarChart3
} from 'lucide-react';
import { presetChannels } from '../data/mockChannels';
import { parseYoutubeUrl, generateAuditProfile } from '../utils/youtubeUrlParser';

export default function ChannelAnalyzer({ 
  currentChannel, 
  onSelectChannel, 
  lang, 
  onNavigateTab 
}) {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleAudit = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) {
      setErrorMsg(lang === 'hi' ? 'कृपया यूट्यूब चैनल या वीडियो का लिंक दर्ज करें' : 'Please enter a valid YouTube channel or video link');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      const parsed = parseYoutubeUrl(inputValue);
      const profile = generateAuditProfile(parsed, presetChannels);
      onSelectChannel(profile);
      setLoading(false);
    }, 600);
  };

  const handlePresetClick = (preset) => {
    setInputValue(preset.handle);
    onSelectChannel(preset);
  };

  const subTarget = 1000;
  const hourTarget = 4000;
  const subPercent = Math.min(100, Math.round((currentChannel.subscribers / subTarget) * 100));
  const hourPercent = Math.min(100, Math.round((currentChannel.watchHours / hourTarget) * 100));

  return (
    <div className="space-y-8">
      {/* Top Hero Search Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-950/80 border border-white/10 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'स्मार्ट यूट्यूब चैनल ग्रोथ ऑडिट' : 'AI-Powered YouTube Growth Audit'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {lang === 'hi' ? (
              <>
                चैनल लिंक डालें और <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">1K Subs & 4K Hours</span> का रोडमैप पाएं
              </>
            ) : (
              <>
                Paste Channel Link & Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">1K Subs & 4K Hours</span> Roadmap
              </>
            )}
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            {lang === 'hi' 
              ? 'बॉट या फेक व्यूज से बचें! अपने चैनल के असली मेट्रिक्स को समझें और जानें कि आपको मोनेटाइज होने के लिए कितने व्यूज, वॉच टाइम और वीडियोज की ज़रूरत है।'
              : 'Avoid channel bans from fake bots! Audit your channel with real analytics and discover your exact custom roadmap to 1,000 subscribers and 4,000 watch hours.'}
          </p>

          {/* Search Box */}
          <form onSubmit={handleAudit} className="pt-2">
            <div className="relative flex flex-col sm:flex-row items-center gap-2 p-2 bg-[#12141e]/90 border border-slate-700/80 rounded-2xl shadow-xl focus-within:border-red-500/60 transition">
              <div className="flex items-center w-full pl-3 gap-2">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={lang === 'hi' ? "उदा. https://youtube.com/@channelName या वीडियो लिंक" : "Paste channel URL, @handle, or video link..."}
                  className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-slate-500 py-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm tracking-wide shrink-0 transition flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {lang === 'hi' ? 'जाँच हो रही है...' : 'Auditing...'}
                  </span>
                ) : (
                  <>
                    <span>{lang === 'hi' ? 'ग्रोथ ऑडिट शुरू करें' : 'Analyze Channel'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            {errorMsg && (
              <p className="text-red-400 text-xs mt-2 text-left pl-3">{errorMsg}</p>
            )}
          </form>

          {/* Preset Channels */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400">{lang === 'hi' ? 'डेमो चैनल आजमाएं:' : 'Try Demo Channels:'}</span>
            {presetChannels.map((p) => (
              <button
                key={p.id}
                onClick={() => handlePresetClick(p)}
                className={`px-3 py-1 rounded-lg border transition text-xs font-medium ${
                  currentChannel.id === p.id 
                    ? 'bg-red-500/20 text-red-300 border-red-500/40 font-semibold' 
                    : 'bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 border-slate-700/60'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Profile & Overview Header */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          
          <div className="flex items-center gap-4">
            <img 
              src={currentChannel.avatar} 
              alt={currentChannel.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-red-500/40 shadow-xl" 
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl font-bold text-white">{currentChannel.name}</h2>
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {currentChannel.category}
                </span>
              </div>
              <p className="text-slate-400 text-sm">{currentChannel.handle}</p>
              <p className="text-slate-400 text-xs mt-1">
                {lang === 'hi' ? `कुल ${currentChannel.videoCount} वीडियो अपलोड्स • औसतन ${currentChannel.avgViews} व्यूज प्रति वीडियो` : `${currentChannel.videoCount} Total Videos • Avg. ${currentChannel.avgViews} views/video`}
              </p>
            </div>
          </div>

          {/* Overall Health Score */}
          <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 self-stretch lg:self-auto justify-between lg:justify-start">
            <div>
              <p className="text-xs text-slate-400">{lang === 'hi' ? 'यूट्यूब SEO & ग्रोथ स्कोर' : 'YouTube SEO & Health'}</p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  {currentChannel.seoScore}
                </span>
                <span className="text-xs text-slate-500 font-bold">/100</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* 1,000 Subs & 4,000 Watch Hours Dual Milestone Meter */}
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Tv className="w-5 h-5 text-red-500" />
              <span>{lang === 'hi' ? 'मोनेटाइजेशन (YPP) टारगेट ट्रैकर' : 'Monetization (YPP) Target Tracker'}</span>
            </h3>
            <span className="text-xs text-slate-400">
              {lang === 'hi' ? 'यूट्यूब पार्टनर प्रोग्राम न्यूनतम आवश्यकताएं' : 'Official YouTube Partner Program Thresholds'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1,000 Subscribers Progress Card */}
            <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-5 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {lang === 'hi' ? 'सब्सक्राइबर्स माइलस्टोन' : 'Subscribers Milestone'}
                    </h4>
                    <p className="text-xs text-slate-400">1,000 {lang === 'hi' ? 'सब्सक्राइबर्स की ज़रूरत' : 'Subs Required'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-white">{currentChannel.subscribers.toLocaleString()}</span>
                  <span className="text-xs text-slate-500"> / 1,000</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${subPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>{subPercent}% {lang === 'hi' ? 'पूरा हुआ' : 'Achieved'}</span>
                  <span>
                    {subTarget > currentChannel.subscribers 
                      ? `${subTarget - currentChannel.subscribers} ${lang === 'hi' ? 'सब्सक्राइबर्स बाकी' : 'more needed'}`
                      : (lang === 'hi' ? 'लक्ष्य पूरा! 🎉' : 'Goal Met! 🎉')}
                  </span>
                </div>
              </div>
            </div>

            {/* 4,000 Watch Hours Progress Card */}
            <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-5 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {lang === 'hi' ? 'पब्लिक वॉच आवर्स' : 'Public Watch Hours'}
                    </h4>
                    <p className="text-xs text-slate-400">4,000 {lang === 'hi' ? 'घंटे (पिछले 365 दिन)' : 'Hours (Past 365 Days)'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-white">{currentChannel.watchHours.toLocaleString()}</span>
                  <span className="text-xs text-slate-500"> / 4,000 hrs</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-emerald-400 rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${hourPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>{hourPercent}% {lang === 'hi' ? 'पूरा हुआ' : 'Achieved'}</span>
                  <span>
                    {hourTarget > currentChannel.watchHours 
                      ? `${hourTarget - currentChannel.watchHours} ${lang === 'hi' ? 'घंटे बाकी' : 'hours needed'}`
                      : (lang === 'hi' ? 'लक्ष्य पूरा! 🎉' : 'Goal Met! 🎉')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Strengths & Weaknesses Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          
          {/* Strengths */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{lang === 'hi' ? 'चैनल की मजबूत बातें (Strengths)' : 'Channel Strengths'}</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentChannel.strengths.map((str, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottlenecks to Fix */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/40 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{lang === 'hi' ? 'सुधार के मुख्य बिंदु (Bottlenecks)' : 'Areas to Improve for 4K Hours'}</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentChannel.weaknesses.map((weak, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span>{weak}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Quick Action Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-3 items-center justify-between">
          <div className="text-xs text-slate-400">
            {lang === 'hi' ? 'अगला कदम: नीचे दिए टूल्स से अपनी ग्रोथ तेज करें:' : 'Next Step: Fast-track your progress with built-in tools:'}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onNavigateTab('roadmap')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <BarChart3 className="w-3.5 h-3.5 text-red-400" />
              <span>{lang === 'hi' ? 'रोडमैप प्लानर खोलें' : 'Open Roadmap'}</span>
            </button>
            <button
              onClick={() => onNavigateTab('titles')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'hi' ? 'वायरल टाइटल्स बनाएं' : 'Generate Titles'}</span>
            </button>
            <button
              onClick={() => onNavigateTab('retention')}
              className="px-4 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Zap className="w-3.5 h-3.5 text-red-400" />
              <span>{lang === 'hi' ? 'वॉच टाइम बूस्टर' : 'Watch Time Booster'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
