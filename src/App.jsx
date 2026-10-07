import React, { useState } from 'react';
import Header from './components/Header';
import UnifiedBusinessDashboard from './components/UnifiedBusinessDashboard';
import AllInOneSeoGenerator from './components/AllInOneSeoGenerator';
import ChannelAnalyzer from './components/ChannelAnalyzer';
import MilestoneRoadmap from './components/MilestoneRoadmap';
import ViralTitleGenerator from './components/ViralTitleGenerator';
import SeoTagOptimizer from './components/SeoTagOptimizer';
import ThumbnailPreviewer from './components/ThumbnailPreviewer';
import RetentionBooster from './components/RetentionBooster';
import SafePromotionGuide from './components/SafePromotionGuide';
import Footer from './components/Footer';
import { presetChannels } from './data/mockChannels';
import { translations } from './data/translations';
import { 
  Share2,
  Flame, 
  BarChart3, 
  Target, 
  Tag, 
  Zap, 
  Eye, 
  ShieldCheck,
  AlertTriangle,
  UploadCloud
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('hi'); // Default Hindi
  const [activeTab, setActiveTab] = useState('multiUpload'); // Make the multi-upload & business dashboard active
  const [currentChannel, setCurrentChannel] = useState(presetChannels[0]);

  const t = translations[lang] || translations.hi;

  const tabs = [
    { 
      id: 'multiUpload', 
      label: lang === 'hi' ? 'मल्टी-अपलोड & बिज़नेस डैशबोर्ड' : 'Multi-Upload & Business Hub', 
      icon: Share2, 
      badge: 'YT+FB+IG' 
    },
    { 
      id: 'seoStudio', 
      label: lang === 'hi' ? 'ऑल-इन-वन SEO स्टूडियो' : 'All-In-One SEO Studio', 
      icon: Flame, 
      badge: '100/100 SEO' 
    },
    { 
      id: 'analyzer', 
      label: t.tabs.analyzer, 
      icon: BarChart3 
    },
    { 
      id: 'roadmap', 
      label: lang === 'hi' ? '4K रोडमैप' : '4K Roadmap', 
      icon: Target 
    },
    { 
      id: 'titles', 
      label: t.tabs.titles, 
      icon: Zap 
    },
    { 
      id: 'tags', 
      label: t.tabs.tags, 
      icon: Tag 
    },
    { 
      id: 'retention', 
      label: t.tabs.retention, 
      icon: Zap, 
      badge: 'Watch Time' 
    },
    { 
      id: 'thumbnail', 
      label: t.tabs.thumbnail, 
      icon: Eye 
    },
    { 
      id: 'playbook', 
      label: t.tabs.playbook, 
      icon: ShieldCheck 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-red-600 selection:text-white">
      {/* Top Header */}
      <Header lang={lang} setLang={setLang} />

      {/* Safety Policy Alert Bar */}
      <div className="bg-gradient-to-r from-red-950/70 via-rose-950/40 to-slate-900 border-b border-red-500/20 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-rose-300">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
            <span className="font-semibold hidden sm:inline">{t.safetyBanner.title}</span>
            <span className="text-rose-200/90 text-[11px] sm:text-xs">
              {lang === 'hi' 
                ? 'फेक बॉट व्यूज से चैनल डिलीट हो जाते हैं। TubeGrow आपको 100% असली व सुरक्षित एल्गोरिदम ग्रोथ देता है।' 
                : 'Bot traffic leads to permanent channel bans. TubeGrow guarantees 100% terms-compliant organic growth.'}
            </span>
          </div>

          <button
            onClick={() => setActiveTab('playbook')}
            className="text-[11px] font-bold text-white hover:text-red-300 underline underline-offset-2 shrink-0 transition"
          >
            {lang === 'hi' ? 'नियम पढ़ें &rarr;' : 'Read Policy &rarr;'}
          </button>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-black uppercase ${
                    isActive ? 'bg-white/20 text-white' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="transition-all duration-300">
          {activeTab === 'multiUpload' && (
            <UnifiedBusinessDashboard
              lang={lang}
            />
          )}

          {activeTab === 'seoStudio' && (
            <AllInOneSeoGenerator
              lang={lang}
            />
          )}

          {activeTab === 'analyzer' && (
            <ChannelAnalyzer
              currentChannel={currentChannel}
              onSelectChannel={setCurrentChannel}
              lang={lang}
              onNavigateTab={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'roadmap' && (
            <MilestoneRoadmap
              currentChannel={currentChannel}
              lang={lang}
            />
          )}

          {activeTab === 'titles' && (
            <ViralTitleGenerator
              lang={lang}
            />
          )}

          {activeTab === 'tags' && (
            <SeoTagOptimizer
              lang={lang}
            />
          )}

          {activeTab === 'retention' && (
            <RetentionBooster
              lang={lang}
            />
          )}

          {activeTab === 'thumbnail' && (
            <ThumbnailPreviewer
              currentChannel={currentChannel}
              lang={lang}
            />
          )}

          {activeTab === 'playbook' && (
            <SafePromotionGuide
              lang={lang}
            />
          )}
        </div>

      </main>

      {/* Global Footer */}
      <Footer lang={lang} />
    </div>
  );
}
