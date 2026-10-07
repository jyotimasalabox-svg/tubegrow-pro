import React from 'react';
import { Youtube, Sparkles, ShieldCheck, Globe, Zap } from 'lucide-react';

export default function Header({ lang, setLang }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090a0f]/90 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 p-[2px] transition duration-300 group-hover:scale-105 shadow-lg shadow-red-500/20">
              <div className="w-full h-full bg-[#0c0d14] rounded-[14px] flex items-center justify-center">
                <Youtube className="w-7 h-7 text-red-500 fill-current" />
              </div>
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Tube<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Grow</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30 rounded-full">
                1K &bull; 4K Pro
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              {lang === 'hi' ? 'यूट्यूब क्रिएटर मोनेटाइजेशन सुइट' : 'YouTube Creator Monetization Suite'}
            </p>
          </div>
        </div>

        {/* Center Badge */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'hi' ? 'यूट्यूब पार्टनर प्रोग्राम गाइडलाइन्स 100% अनुकूल' : '100% YouTube Partner Program Compliant'}</span>
        </div>

        {/* Right actions: Lang toggle + Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 transition"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-bold shadow-md shadow-red-600/25">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>{lang === 'hi' ? '4K आवर्स फॉर्मूला' : '4K Hours Engine'}</span>
          </div>
        </div>

      </div>
    </header>
  );
}
