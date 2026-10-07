import React, { useState } from 'react';
import { 
  Zap, 
  Clock, 
  Copy, 
  Check, 
  TrendingUp, 
  Film, 
  Volume2, 
  Scissors, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { hookFormulas, retentionRules } from '../data/hookTemplates';

export default function RetentionBooster({ lang }) {
  const [copiedHook, setCopiedHook] = useState(null);

  const handleCopyHook = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedHook(id);
    setTimeout(() => setCopiedHook(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-red-500" />
            <span>{lang === 'hi' ? '4,000 घंटे वॉच टाइम बूस्टर & स्क्रिप्ट हुक्स' : '4,000 Hours Watch Time Multiplier'}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {lang === 'hi'
              ? 'यूट्यूब उन्हीं वीडियोज को प्रमोट करता है जिन पर ऑडियंस रिटेंशन 40% से ऊपर होता है। यहां वे स्क्रिप्ट हुक हैं जो दर्शकों को बांध कर रखते हैं।'
              : 'YouTube\'s recommendation algorithm rewards Average View Duration (AVD). Use high-retention hook formulas to keep viewers glued.'}
          </p>
        </div>
      </div>

      {/* Retention Timeline Graphic / Pattern Interrupt Visualizer */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Film className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'hi' ? 'परफेक्ट वीडियो स्ट्रक्चर (60%+ रिटेंशन फॉर्मूला)' : 'Anatomy of a High-Retention Video (60%+ AVD)'}</span>
          </h3>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
            Algorithm Optimized
          </span>
        </div>

        {/* Visual timeline bar */}
        <div className="space-y-3">
          <div className="grid grid-cols-12 gap-1.5 h-12 rounded-xl overflow-hidden p-1 bg-slate-900 border border-slate-800">
            <div className="col-span-2 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white uppercase tracking-wider text-center px-1 shadow-sm">
              0-15s Hook
            </div>
            <div className="col-span-3 bg-gradient-to-r from-rose-600 to-amber-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white uppercase tracking-wider text-center px-1 shadow-sm">
              The Problem
            </div>
            <div className="col-span-5 bg-gradient-to-r from-amber-600 to-emerald-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white uppercase tracking-wider text-center px-1 shadow-sm">
              High Value + Pattern Interrupts
            </div>
            <div className="col-span-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center text-[10px] font-black text-white uppercase tracking-wider text-center px-1 shadow-sm">
              Next Video CTA
            </div>
          </div>

          <div className="grid grid-cols-12 gap-1.5 text-[11px] text-slate-400 text-center font-medium">
            <span className="col-span-2 text-rose-400 font-bold">0:00 - 0:15</span>
            <span className="col-span-3 text-amber-400 font-bold">0:15 - 1:30</span>
            <span className="col-span-5 text-emerald-400 font-bold">1:30 - 8:00</span>
            <span className="col-span-2 text-teal-400 font-bold">End Screen</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs pt-2">
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <p className="font-bold text-white mb-1">1. The 15s Hook</p>
            <p className="text-slate-400 text-[11px]">
              {lang === 'hi' ? 'शुरुआत में कोई 3D लोगो या इंट्रो नहीं। सीधे मुख्य सस्पेंस या प्रॉमिस।' : 'No logos. Jump straight into the core promise or dramatic premise.'}
            </p>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <p className="font-bold text-white mb-1">2. Fast Staking</p>
            <p className="text-slate-400 text-[11px]">
              {lang === 'hi' ? 'दिखाएं कि यह वीडियो देखना दर्शक के लिए क्यों इतना जरूरी है।' : 'Establish the stakes—why watching this saves time or solves their pain.'}
            </p>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <p className="font-bold text-white mb-1">3. Pattern Interrupts</p>
            <p className="text-slate-400 text-[11px]">
              {lang === 'hi' ? 'हर 5-7 सेकंड में साउंड इफेक्ट (Whoosh, Ding), ज़ूम या B-roll लगाएं।' : 'Insert sound effects, camera zooms, or text animations every 6s.'}
            </p>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <p className="font-bold text-white mb-1">4. Seamless End-Screen</p>
            <p className="text-slate-400 text-[11px]">
              {lang === 'hi' ? 'अलविदा न कहें! सीधे कहें: "इस ट्रिक को प्रैक्टिकल देखने के लिए इस वीडियो पर क्लिक करें"।' : 'Never say goodbye! Direct them immediately to your next binge video.'}
            </p>
          </div>
        </div>
      </div>

      {/* Tested Viral Script Hook Formulas */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <Scissors className="w-4 h-4 text-red-500" />
          <span>{lang === 'hi' ? 'सिद्ध वायरल स्क्रिप्ट हुक टेम्पलेट्स (Script Hooks)' : 'Proven First 15-Second Hook Templates'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hookFormulas.map((hook) => (
            <div
              key={hook.id}
              className="glass-panel glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-white">{hook.name}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {hook.retentionBoost}
                  </span>
                </div>

                <p className="text-xs text-slate-400">{hook.description}</p>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 font-mono italic">
                  {hook.formula}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <span className="text-[11px] text-slate-500">English: {hook.example}</span>
                <button
                  onClick={() => handleCopyHook(hook.formula, hook.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                    copiedHook === hook.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  {copiedHook === hook.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === 'hi' ? 'कॉपी हुआ!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'hi' ? 'हुक कॉपी करें' : 'Copy Hook'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rules of High Retention */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'hi' ? 'वॉच टाइम बढ़ाने के 4 अचूक नियम' : '4 Golden Rules to Maximize Watch Hours'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {retentionRules.map((rule, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">{rule.step}</span>
                <span className="text-[10px] font-bold text-emerald-400">{rule.impact}</span>
              </div>
              <p className="text-slate-400 leading-relaxed">{rule.hindi}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
