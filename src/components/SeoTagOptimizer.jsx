import React, { useState } from 'react';
import { 
  Tag, 
  Copy, 
  Check, 
  Search, 
  TrendingUp, 
  BarChart2, 
  Plus, 
  Sparkles 
} from 'lucide-react';
import { nicheData } from '../data/seoKeywords';

export default function SeoTagOptimizer({ lang }) {
  const [selectedNiche, setSelectedNiche] = useState('gaming');
  const [customTagInput, setCustomTagInput] = useState('');
  const [currentTags, setCurrentTags] = useState([]);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedSingle, setCopiedSingle] = useState(null);

  React.useEffect(() => {
    const list = nicheData[selectedNiche]?.keywords || nicheData.gaming.keywords;
    setCurrentTags(list);
  }, [selectedNiche]);

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!customTagInput.trim()) return;
    const newTag = {
      tag: customTagInput.trim().toLowerCase(),
      searchVol: "Custom",
      comp: "Low",
      score: 95
    };
    setCurrentTags([newTag, ...currentTags]);
    setCustomTagInput('');
  };

  const handleCopyAll = () => {
    const allTagsString = currentTags.map(t => t.tag).join(', ');
    navigator.clipboard.writeText(allTagsString);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleCopySingle = (tagText, idx) => {
    navigator.clipboard.writeText(tagText);
    setCopiedSingle(idx);
    setTimeout(() => setCopiedSingle(null), 1500);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Tag className="w-6 h-6 text-red-500" />
            <span>{lang === 'hi' ? 'हाई-रैंक यूट्यूब SEO टैग्स & कीवर्ड्स' : 'High-Rank YouTube SEO Tags & Keywords'}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {lang === 'hi'
              ? 'यूट्यूब स्टूडियो के लिए तैयार कॉमा-सेपरेटेड टैग्स जिन्हें सीधे वीडियो अपलोड में पेस्ट किया जा सकता है।'
              : 'Optimized YouTube Studio tags ready for direct copy-pasting to capture search traffic.'}
          </p>
        </div>

        <button
          onClick={handleCopyAll}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-red-600/25 transition self-start md:self-auto"
        >
          {copiedAll ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
          <span>{copiedAll ? (lang === 'hi' ? 'सभी टैग्स कॉपी हो गए!' : 'All Tags Copied!') : (lang === 'hi' ? 'यूट्यूब स्टूडियो के लिए सभी कॉपी करें' : 'Copy All Tags (Studio Format)')}</span>
        </button>
      </div>

      {/* Niche Selector & Custom Input */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-5">
        
        {/* Niche switcher */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            {lang === 'hi' ? 'कैटेगरी चुने:' : 'Select Category:'}
          </label>
          <div className="flex flex-wrap gap-2">
            {Object.entries(nicheData).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setSelectedNiche(key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition ${
                  selectedNiche === key
                    ? 'bg-red-500/20 text-red-300 border-red-500/40'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 border-slate-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Custom tag add */}
        <form onSubmit={handleAddCustom} className="flex gap-2">
          <input
            type="text"
            value={customTagInput}
            onChange={(e) => setCustomTagInput(e.target.value)}
            placeholder={lang === 'hi' ? "नया कीवर्ड जोड़ें (उदा. 4000 hours watch time trick)..." : "Add custom target keyword..."}
            className="flex-1 px-4 py-2.5 bg-[#10121b] border border-slate-700/80 rounded-xl text-white text-xs focus:outline-none focus:border-red-500/60"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'टैग जोड़ें' : 'Add Tag'}</span>
          </button>
        </form>

      </div>

      {/* Tags Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {currentTags.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel glass-card-hover rounded-2xl p-4 border border-white/10 flex flex-col justify-between gap-3 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Vol: {item.searchVol}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  item.comp === 'Low' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : (item.comp === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20')
                }`}>
                  Comp: {item.comp}
                </span>
              </div>
              <p className="text-sm font-bold text-white group-hover:text-red-400 transition">
                #{item.tag}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>SEO: {item.score}/100</span>
              </span>

              <button
                onClick={() => handleCopySingle(item.tag, idx)}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
                title="Copy single tag"
              >
                {copiedSingle === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Studio Pasting Guide */}
      <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2 text-xs text-slate-300">
        <h4 className="font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-red-500" />
          <span>{lang === 'hi' ? 'यूट्यूब स्टूडियो में टैग्स कैसे डालें?' : 'How to apply these tags in YouTube Studio:'}</span>
        </h4>
        <p className="text-slate-400">
          {lang === 'hi'
            ? '1. ऊपर "यूट्यूब स्टूडियो के लिए सभी कॉपी करें" बटन पर क्लिक करें। 2. YouTube Studio खोलें > वीडियो एडिट करें > "Show More" पर क्लिक करें। 3. "Tags" वाले बॉक्स में Right Click करके Paste कर दें। सारे टैग्स अपने आप अलग-अलग बॉक्स में भर जाएंगे!'
            : '1. Click "Copy All Tags (Studio Format)". 2. Open YouTube Studio > Edit Video > Click "Show More". 3. In the "Tags" field, simply right click and Paste. All tags will cleanly populate into separate chips!'}
        </p>
      </div>

    </div>
  );
}
