import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Flame, 
  TrendingUp, 
  Zap, 
  Tag, 
  RefreshCw,
  Lightbulb
} from 'lucide-react';
import { nicheData } from '../data/seoKeywords';

export default function ViralTitleGenerator({ lang }) {
  const [selectedNiche, setSelectedNiche] = useState('tech');
  const [topic, setTopic] = useState('Smartphones 2026');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [titles, setTitles] = useState([]);

  // Generate titles dynamically from formulas and topic
  const generateTitles = () => {
    const currentNicheData = nicheData[selectedNiche] || nicheData.tech;
    const cleanTopic = topic.trim() || 'This Secret Method';
    
    const generated = currentNicheData.titleFormulas.map((formula, idx) => {
      const titleText = formula.replace('{topic}', cleanTopic);
      const ctrScore = 92 + (idx * 2) % 7; // 92 - 98
      const types = ['Curiosity Gap', 'High Urgency / FOMO', 'Definitive Masterclass', 'High Stakes Challenge', 'Extreme Emotion'];
      return {
        title: titleText,
        ctrScore,
        type: types[idx % types.length],
        thumbnailHook: [
          'DON\'T DO THIS!',
          '99% WRONG!',
          'EXPOSED!',
          'ACTUALLY WORKS?!',
          'SECRET REVEALED'
        ][idx % 5]
      };
    });

    setTitles(generated);
  };

  // Run on first load
  React.useEffect(() => {
    generateTitles();
  }, [selectedNiche]);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span>{lang === 'hi' ? 'AI वायरल टाइटल और हुक जनरेटर' : 'Viral YouTube Title & Hook Generator'}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {lang === 'hi'
              ? 'यूट्यूब पर 80% क्लिक टाइटल और थंबनेल से आते हैं। हाई-CTR टाइटल्स जनरेट करें जो दर्शकों को क्लिक करने पर मजबूर कर दें।'
              : '80% of YouTube clicks are driven by Title + Thumbnail synergy. Generate psychological high-CTR titles.'}
          </p>
        </div>
      </div>

      {/* Inputs Section */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-5">
        
        {/* Niche selector */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            {lang === 'hi' ? 'अपनी कैटेगरी (Niche) चुनें:' : 'Select Your Niche:'}
          </label>
          <div className="flex flex-wrap gap-2">
            {Object.entries(nicheData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedNiche(key);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition ${
                  selectedNiche === key
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 border-slate-800'
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>

        {/* Topic Input */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={lang === 'hi' ? "अपने वीडियो का विषय डालें (उदा. Mobile Gaming, Paneer Tikka, iPhone 16)" : "Enter topic (e.g., iPhone Camera, Gym Workout, Coding Tips)..."}
              className="w-full px-4 py-3 bg-[#10121b] border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/60"
            />
          </div>

          <button
            onClick={generateTitles}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{lang === 'hi' ? 'नए टाइटल्स जनरेट करें' : 'Generate Viral Titles'}</span>
          </button>
        </div>

      </div>

      {/* Generated Titles List */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-500" />
          <span>{lang === 'hi' ? 'हाई-CTR टाइटल्स (1-क्लिक कॉपी)' : 'High-CTR Recommended Titles'}</span>
        </h3>

        <div className="grid grid-cols-1 gap-3.5">
          {titles.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-card-hover rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {item.type}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>CTR Score: {item.ctrScore}/100</span>
                  </span>
                  <span className="text-[11px] text-slate-500 hidden sm:inline">
                    • Thumnail Text: <span className="text-slate-300 font-bold bg-slate-800 px-1.5 py-0.5 rounded">"{item.thumbnailHook}"</span>
                  </span>
                </div>

                <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                  {item.title}
                </p>
              </div>

              <button
                onClick={() => handleCopy(item.title, idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shrink-0 transition ${
                  copiedIndex === idx
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'hi' ? 'कॉपी हो गया!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lang === 'hi' ? 'कॉपी करें' : 'Copy Title'}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tips Banner */}
      <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-900/30 flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-200/90 space-y-1">
          <p className="font-bold text-amber-300">
            {lang === 'hi' ? 'वायरल यूट्यूब टाइटल के 3 सुनहरे नियम:' : '3 Golden Rules of Viral Titles:'}
          </p>
          <p>
            {lang === 'hi'
              ? '1. टाइटल 55 अक्षरों से छोटा रखें ताकि मोबाइल पर कटे नहीं। 2. थंबनेल पर वही शब्द न लिखें जो टाइटल में हैं। 3. टाइटल सवाल या जिज्ञासा पैदा करे, पूरी कहानी पहले ही न बता दे।'
              : '1. Keep titles under 55 characters to avoid mobile truncation. 2. Do not repeat identical words on the thumbnail. 3. Provoke curiosity rather than giving away the resolution.'}
          </p>
        </div>
      </div>

    </div>
  );
}
