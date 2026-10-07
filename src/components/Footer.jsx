import React from 'react';
import { Youtube, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer({ lang }) {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#090a0f] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <Youtube className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                TubeGrow Pro Studio
              </span>
              <p className="text-[11px] text-slate-500">
                {lang === 'hi' ? 'यूट्यूब क्रिएटर ग्रोथ & मोनेटाइजेशन प्लेटफॉर्म' : 'YouTube Creator Growth & Monetization Platform'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>YouTube TOS Compliant</span>
            </span>
            <span>&bull;</span>
            <span>Organic Growth Only</span>
            <span>&bull;</span>
            <span>No Bots / No Fake Traffic</span>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} TubeGrow Studio. All rights reserved. Built for YouTube Creators.
          </p>
          <p className="flex items-center gap-1">
            <span>Made with passion for independent creators</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
