import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  FileText, 
  Tag, 
  Hash, 
  TrendingUp, 
  Layers, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  Flame,
  CheckCircle2,
  ExternalLink,
  Zap,
  HelpCircle
} from 'lucide-react';
import { 
  generateOptimizedTitles, 
  generateTagsAndKeywords, 
  generateHashtags, 
  generateCompleteDescription 
} from '../utils/seoGeneratorEngine';

const demoPrompts = [
  "1000 subscribers kaise badhaye 2026",
  "4000 hours watch time fast trick",
  "Best smartphone under 20000",
  "Gaming PC build guide hindi",
  "Crispy samosa recipe at home"
];

export default function AllInOneSeoGenerator({ lang }) {
  const [inputTitle, setInputTitle] = useState("1000 subscribers kaise badhaye fast");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);
  const [titles, setTitles] = useState([]);
  const [tagData, setTagData] = useState({ keywords: [], studioTagsString: '', studioTagsCount: 0, characterCount: 0 });
  const [hashtagData, setHashtagData] = useState({ hashtags: [], hashtagsString: '' });
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Copied states
  const [copiedTitleIndex, setCopiedTitleIndex] = useState(null);
  const [copiedTags, setCopiedTags] = useState(false);
  const [copiedHashtags, setCopiedHashtags] = useState(false);
  const [copiedDesc, setCopiedDesc] = useState(false);
  const [copiedAllPack, setCopiedAllPack] = useState(false);

  // Run generation logic
  const handleGenerate = (customQuery) => {
    const query = customQuery !== undefined ? customQuery : inputTitle;
    if (!query.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      const generatedTitles = generateOptimizedTitles(query);
      const generatedTags = generateTagsAndKeywords(query);
      const generatedHashes = generateHashtags(query);
      const generatedDesc = generateCompleteDescription(
        query, 
        generatedTitles[0].title, 
        generatedHashes.hashtagsString, 
        generatedTags.studioTagsString
      );

      setTitles(generatedTitles);
      setSelectedTitleIndex(0);
      setTagData(generatedTags);
      setHashtagData(generatedHashes);
      setDescription(generatedDesc);
      setIsGenerating(false);
    }, 350);
  };

  // Run on first load
  useEffect(() => {
    handleGenerate();
  }, []);

  // When selected title changes, update the description's title line
  const handleSelectTitle = (idx) => {
    setSelectedTitleIndex(idx);
    if (titles[idx]) {
      const updatedDesc = generateCompleteDescription(
        inputTitle,
        titles[idx].title,
        hashtagData.hashtagsString,
        tagData.studioTagsString
      );
      setDescription(updatedDesc);
    }
  };

  // Copy helper
  const copyToClipboard = (text, type, idx = null) => {
    navigator.clipboard.writeText(text);
    if (type === 'title') {
      setCopiedTitleIndex(idx);
      setTimeout(() => setCopiedTitleIndex(null), 2000);
    } else if (type === 'tags') {
      setCopiedTags(true);
      setTimeout(() => setCopiedTags(false), 2000);
    } else if (type === 'hashtags') {
      setCopiedHashtags(true);
      setTimeout(() => setCopiedHashtags(false), 2000);
    } else if (type === 'desc') {
      setCopiedDesc(true);
      setTimeout(() => setCopiedDesc(false), 2000);
    } else if (type === 'all') {
      setCopiedAllPack(true);
      setTimeout(() => setCopiedAllPack(false), 2500);
    }
  };

  // Master Copy Everything Bundle
  const handleCopyMasterPack = () => {
    const activeTitle = titles[selectedTitleIndex]?.title || inputTitle;
    const masterBundle = `
=========================================
🚀 COMPLETE YOUTUBE SEO MASTER PACKAGE
=========================================

📌 SELECTED HIGH-CTR TITLE:
${activeTitle}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 OPTIMIZED VIDEO DESCRIPTION:
${description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏷️ YOUTUBE STUDIO TAGS (Comma-Separated, ${tagData.characterCount}/500 Chars):
${tagData.studioTagsString}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#️⃣ VIRAL HASHTAGS:
${hashtagData.hashtagsString}

=========================================
Generated with TubeGrow Pro SEO Studio
=========================================
`.trim();

    copyToClipboard(masterBundle, 'all');
  };

  return (
    <div className="space-y-8">
      {/* Hero Header & Title Input */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/80 border border-white/10 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-4 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'ऑल-इन-वन यूट्यूब SEO ऑटोमेशन' : 'All-In-One Complete YouTube SEO Generator'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {lang === 'hi' ? (
              <>
                वीडियो का टाइटल डालें — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">SEO टाइटल, कीवर्ड्स, हैशटैग और डिस्क्रिप्शन</span> सब एक साथ पाएं!
              </>
            ) : (
              <>
                Enter Video Title &mdash; Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">SEO Titles, Studio Tags, Hashtags & Description</span> Instantly!
              </>
            )}
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'YouTube और Google के हाई-सर्चिंग कीवर्ड्स के साथ 100/100 परफेक्ट SEO पैकेज। सीधे कॉपी करें और अपनी वीडियो को सर्च रिजल्ट्स में #1 रैंक कराएं।'
              : 'Google & YouTube high-search intent SEO engine. Generates Studio-ready tags, viral titles, hashtags, and description formatted to rank #1.'}
          </p>

          {/* Search Box */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}
            className="pt-2"
          >
            <div className="relative flex flex-col sm:flex-row items-center gap-2 p-2 bg-[#12141e]/90 border border-slate-700/80 rounded-2xl shadow-xl focus-within:border-red-500/60 transition">
              <div className="flex items-center w-full pl-3 gap-2">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  placeholder={lang === 'hi' ? "अपने वीडियो का टाइटल या विषय डालें (उदा. 1000 subscribers kaise badhaye)..." : "Enter your video title or topic (e.g. 1000 subscribers fast trick)..."}
                  className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-slate-500 py-2.5 font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-sm tracking-wide shrink-0 transition flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 disabled:opacity-50"
              >
                {isGenerating ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{lang === 'hi' ? 'SEO हो रहा है...' : 'Generating SEO...'}</span>
                  </span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{lang === 'hi' ? 'पूरा SEO तैयार करें' : 'Generate Full SEO'}</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Preset Title Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400">{lang === 'hi' ? 'ट्रेंडिंग आइडियाज:' : 'Try Trending Topics:'}</span>
            {demoPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputTitle(prompt);
                  handleGenerate(prompt);
                }}
                className="px-3 py-1 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 border border-slate-700/60 transition text-xs font-medium"
              >
                {prompt}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* SEO Score & Master Copy All Banner */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
            <Award className="w-9 h-9" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white">100/100</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                {lang === 'hi' ? 'परफेक्ट यूट्यूब SEO' : 'Perfect YouTube SEO'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'hi'
                ? 'टाइटल CTR, डिस्क्रिप्शन कीवर्ड डेंसिटी, 500-कैरेक्टर स्टूडियो टैग्स और हैशटैग्स सब अनुकूलित हैं।'
                : 'Title CTR, Description keywords, 500-char studio tags, and viral hashtags are 100% optimized.'}
            </p>
          </div>
        </div>

        {/* Master Copy Button */}
        <button
          onClick={handleCopyMasterPack}
          className={`px-6 py-4 rounded-2xl font-black text-sm flex items-center gap-2 transition shadow-xl shrink-0 ${
            copiedAllPack
              ? 'bg-emerald-600 text-white shadow-emerald-600/30'
              : 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-red-600/30 hover:opacity-95'
          }`}
        >
          {copiedAllPack ? <Check className="w-5 h-5 text-emerald-200" /> : <Copy className="w-5 h-5" />}
          <span>
            {copiedAllPack 
              ? (lang === 'hi' ? 'पूरा SEO पैकेज कॉपी हो गया!' : 'Entire SEO Pack Copied!') 
              : (lang === 'hi' ? '1-क्लिक पूरा SEO पैकेज कॉपी करें' : '1-Click Copy Complete SEO Pack')}
          </span>
        </button>
      </div>

      {/* SECTION 1: 5 High-Searching Optimized Titles */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-500" />
            <span>{lang === 'hi' ? '1. हाई-सर्चिंग वायरल टाइटल्स (5 विकल्प)' : '1. High-Searching Viral & SEO Titles'}</span>
          </h2>
          <span className="text-xs text-slate-400">
            {lang === 'hi' ? 'किसी भी टाइटल पर क्लिक करके सेलेक्ट करें' : 'Click any title to use in description'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {titles.map((item, idx) => {
            const isSelected = selectedTitleIndex === idx;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectTitle(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900 border-red-500/60 shadow-lg shadow-red-500/10'
                    : 'glass-panel hover:bg-slate-900/80 border-white/10'
                }`}
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isSelected 
                        ? 'bg-red-500 text-white' 
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}>
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>CTR Score: {item.ctrScore}%</span>
                    </span>
                    <span className="text-[11px] text-slate-400">
                      • {item.chars} {lang === 'hi' ? 'अक्षर' : 'chars'} ({item.ideal ? (lang === 'hi' ? 'परफेक्ट साइज' : 'Ideal Length') : 'Good'})
                    </span>
                  </div>

                  <p className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(item.title, 'title', idx);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                      copiedTitleIndex === idx
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                  >
                    {copiedTitleIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedTitleIndex === idx ? (lang === 'hi' ? 'कॉपी हुआ!' : 'Copied!') : (lang === 'hi' ? 'टाइटल कॉपी करें' : 'Copy')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: Studio-Ready Tags (Respecting 500 Character Limit) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-red-500" />
              <span>{lang === 'hi' ? '2. यूट्यूब स्टूडियो टैग्स (YouTube Studio Tags)' : '2. YouTube Studio SEO Tags'}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'hi' 
                ? `यूट्यूब की 500 अक्षरों की सीमा के भीतर: ${tagData.characterCount} / 500 अक्षर (${tagData.studioTagsCount} टैग्स)` 
                : `Within YouTube's 500 chars limit: ${tagData.characterCount} / 500 chars (${tagData.studioTagsCount} tags)`}
            </p>
          </div>

          <button
            onClick={() => copyToClipboard(tagData.studioTagsString, 'tags')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition self-start sm:self-auto ${
              copiedTags
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/20'
            }`}
          >
            {copiedTags ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copiedTags ? (lang === 'hi' ? 'सारे टैग्स कॉपी हो गए!' : 'All Tags Copied!') : (lang === 'hi' ? 'स्टूडियो के लिए सारे टैग्स कॉपी करें' : 'Copy All Studio Tags')}</span>
          </button>
        </div>

        {/* Tags Chips Display */}
        <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 space-y-4">
          <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto pr-1">
            {tagData.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-200 flex items-center gap-2 group hover:border-red-500/40 transition"
              >
                <span>#{kw.tag}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-emerald-400 font-bold">
                  {kw.searchVol}
                </span>
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>{lang === 'hi' ? 'कॉमा-सेपरेटेड फॉर्मेट (YouTube Studio अपलोड में सीधे पेस्ट करें)' : 'Formatted comma-separated for instant paste into YouTube Studio'}</span>
            <span className="font-bold text-emerald-400">{tagData.characterCount} / 500 chars</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: Viral Trending Hashtags */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Hash className="w-5 h-5 text-indigo-400" />
              <span>{lang === 'hi' ? '3. वायरल ट्रेंडिंग हैशटैग्स (Trending Hashtags)' : '3. High-Reach Trending Hashtags'}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'hi' ? 'यूट्यूब सर्च और शॉर्ट्स में वीडियो रैंक कराने के लिए' : 'Boosts discovery in search and topic hubs'}
            </p>
          </div>

          <button
            onClick={() => copyToClipboard(hashtagData.hashtagsString, 'hashtags')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              copiedHashtags
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            {copiedHashtags ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedHashtags ? (lang === 'hi' ? 'हैशटैग कॉपी हो गए!' : 'Hashtags Copied!') : (lang === 'hi' ? 'सारे हैशटैग कॉपी करें' : 'Copy Hashtags')}</span>
          </button>
        </div>

        <div className="glass-panel rounded-2xl p-4 border border-white/10 flex flex-wrap gap-2">
          {hashtagData.hashtags.map((h, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 text-xs font-semibold"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* SECTION 4: Professional Video Description Generator */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>{lang === 'hi' ? '4. कम्पलीट प्रोफेशनल वीडियो डिस्क्रिप्शन (SEO Description)' : '4. Complete Professional Video Description'}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {lang === 'hi' 
                ? 'हुक, टाइमस्टैम्प्स, रिलेटेड सर्च क्वेरीज़, सोशल लिंक्स और हैशटैग्स सहित' 
                : 'Includes SEO Hook, Timestamps, Related Search Queries, and Social Links'}
            </p>
          </div>

          <button
            onClick={() => copyToClipboard(description, 'desc')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition self-start sm:self-auto ${
              copiedDesc
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            {copiedDesc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedDesc ? (lang === 'hi' ? 'डिस्क्रिप्शन कॉपी हो गया!' : 'Description Copied!') : (lang === 'hi' ? 'डिस्क्रिप्शन कॉपी करें' : 'Copy Description')}</span>
          </button>
        </div>

        {/* Live Editable Textarea */}
        <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-white/10 space-y-3">
          <textarea
            rows={14}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#10121b] border border-slate-800 rounded-2xl p-4 text-xs sm:text-sm text-slate-200 font-mono focus:outline-none focus:border-amber-500/50 leading-relaxed resize-y"
          />

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span>{lang === 'hi' ? 'नोट: आप अपनी ज़रूरत के अनुसार इसमें सोशल मीडिया लिंक्स जोड़ सकते हैं।' : 'Note: You can directly edit the description above before copying.'}</span>
            <span className="font-mono text-slate-300">{description.length} chars</span>
          </div>
        </div>
      </div>

    </div>
  );
}
