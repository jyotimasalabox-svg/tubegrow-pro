import React, { useState } from 'react';
import { 
  Target, 
  Calendar, 
  Flame, 
  CheckCircle, 
  Sliders, 
  Layers, 
  Download, 
  Check, 
  TrendingUp,
  Clock,
  Video,
  Eye,
  FileText
} from 'lucide-react';
import { calculateMilestones } from '../utils/growthCalculator';

export default function MilestoneRoadmap({ currentChannel, lang }) {
  const [targetDays, setTargetDays] = useState(60);
  const [videoDuration, setVideoDuration] = useState(currentChannel.avgDurationMin || 8);
  const [retentionPct, setRetentionPct] = useState(currentChannel.retentionRate || 42);
  const [copiedPlan, setCopiedPlan] = useState(false);

  const stats = calculateMilestones(
    currentChannel.subscribers,
    currentChannel.watchHours,
    currentChannel.avgViews || 600,
    videoDuration,
    retentionPct
  );

  const currentPace = targetDays === 30 ? stats.pace30 : (targetDays === 60 ? stats.pace60 : stats.pace90);

  const handleCopyPlan = () => {
    const textPlan = `
========================================
🚀 TubeGrow Pro - Monetization Growth Plan
Channel: ${currentChannel.name} (${currentChannel.handle})
Target: 1,000 Subscribers & 4,000 Watch Hours
Sprint Timeline: ${targetDays} Days
========================================
CURRENT STATUS:
- Subscribers: ${currentChannel.subscribers} / 1,000 (${stats.subsProgressPct}%)
- Watch Hours: ${currentChannel.watchHours} / 4,000 (${stats.hoursProgressPct}%)
- Remaining: ${stats.subsRemaining} Subs & ${stats.hoursRemaining} Hours

DAILY MILESTONE TARGETS:
- New Subscribers / Day: ${currentPace.dailySubsNeeded}
- Watch Hours / Day: ${currentPace.dailyHoursNeeded} hrs
- Required Views / Day: ${currentPace.dailyViewsNeeded.toLocaleString()} views
- Recommended Uploads: ${currentPace.videosPerWeek} videos/week

VIDEO PRODUCTION SPECIFICATIONS:
- Target Video Duration: ${videoDuration} minutes
- Target Audience Retention: ${retentionPct}% (Min. ${stats.minutesPerView} mins watched per view)
- Estimated New Videos to Hit Goal: ~${stats.videosNeeded} high-retention videos

4-PHASE STRATEGY:
Phase 1 (Days 1-${Math.round(targetDays * 0.25)}): Search Intent & 5s Hook Masterclass
Phase 2 (Days ${Math.round(targetDays * 0.25) + 1}-${Math.round(targetDays * 0.5)}): Series & Playlist Binge Loops
Phase 3 (Days ${Math.round(targetDays * 0.5) + 1}-${Math.round(targetDays * 0.75)}): Community Tab + Shorts Funnel
Phase 4 (Days ${Math.round(targetDays * 0.75) + 1}-${targetDays}): Final Push & YPP Partner Application
========================================
    `.trim();

    navigator.clipboard.writeText(textPlan);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-red-500" />
            <span>{lang === 'hi' ? '1,000 सब्सक्राइबर्स और 4,000 घंटे का कस्टमाइज़्ड रोडमैप' : '1,000 Subs & 4,000 Hours Growth Engine'}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {lang === 'hi' 
              ? 'देखें कि आपकी वर्तमान गति से लक्ष्य पूरा करने के लिए रोज़ कितने व्यूज और वीडियो चाहिए।'
              : 'Calculate exactly how many daily views, uploads, and retention minutes you need to reach YPP.'}
          </p>
        </div>

        <button
          onClick={handleCopyPlan}
          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-2 transition self-start md:self-auto shadow-md"
        >
          {copiedPlan ? <Check className="w-4 h-4 text-emerald-400" /> : <FileText className="w-4 h-4 text-amber-400" />}
          <span>{copiedPlan ? (lang === 'hi' ? 'प्लान कॉपी हो गया!' : 'Plan Copied!') : (lang === 'hi' ? 'रोडमैप कॉपी / सेव करें' : 'Export Growth Plan')}</span>
        </button>
      </div>

      {/* Target Sprint Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { days: 30, label: lang === 'hi' ? '30 दिन (फास्ट ट्रैक स्प्रिंट)' : '30 Days (Fast-Track Sprint)', desc: lang === 'hi' ? 'आक्रामक गति: 4 वीडियो/हफ्ता' : 'Aggressive: 4 uploads/week', icon: Flame, color: 'text-rose-400' },
          { days: 60, label: lang === 'hi' ? '60 दिन (संतुलित गति - बेस्ट)' : '60 Days (Balanced - Recommended)', desc: lang === 'hi' ? 'सर्वश्रेष्ठ संतुलन: 3 वीडियो/हफ्ता' : 'Optimal: 3 uploads/week', icon: Calendar, color: 'text-amber-400' },
          { days: 90, label: lang === 'hi' ? '90 दिन (आरामदायक गति)' : '90 Days (Sustainable Pace)', desc: lang === 'hi' ? 'आसान गति: 2 वीडियो/हफ्ता' : 'Steady: 2 uploads/week', icon: Clock, color: 'text-emerald-400' }
        ].map((item) => {
          const Icon = item.icon;
          const isActive = targetDays === item.days;
          return (
            <div
              key={item.days}
              onClick={() => setTargetDays(item.days)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                isActive 
                  ? 'bg-gradient-to-br from-red-950/40 to-slate-900 border-red-500/50 shadow-xl shadow-red-500/10' 
                  : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold ${item.color} flex items-center gap-1.5`}>
                  <Icon className="w-4 h-4" />
                  {item.label}
                </span>
                <input 
                  type="radio" 
                  checked={isActive} 
                  onChange={() => setTargetDays(item.days)}
                  className="accent-red-500 cursor-pointer"
                />
              </div>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Interactive Controls & Real-Time Math */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sliders Box (5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-white/10 space-y-6">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Sliders className="w-4 h-4 text-amber-400" />
            <span>{lang === 'hi' ? 'वीडियो सेटिंग्स एडजस्ट करें' : 'Adjust Video Variables'}</span>
          </div>

          {/* Slider 1: Average Duration */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'hi' ? 'वीडियो की लंबाई:' : 'Target Video Length:'}</span>
              <span className="font-extrabold text-amber-400">{videoDuration} {lang === 'hi' ? 'मिनट' : 'mins'}</span>
            </div>
            <input
              type="range"
              min="3"
              max="25"
              step="1"
              value={videoDuration}
              onChange={(e) => setVideoDuration(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              {lang === 'hi' ? '8-12 मिनट की वीडियो यूट्यूब एल्गोरिदम में ज्यादा वॉच टाइम देती है।' : '8-12 min videos generate significantly more watch time.'}
            </p>
          </div>

          {/* Slider 2: Retention Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{lang === 'hi' ? 'ऑडियंस रिटेंशन %:' : 'Target Audience Retention:'}</span>
              <span className="font-extrabold text-emerald-400">{retentionPct}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="70"
              step="1"
              value={retentionPct}
              onChange={(e) => setRetentionPct(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              {lang === 'hi' ? `हर दर्शक औसतन लगभग ${stats.minutesPerView} मिनट वीडियो देखेगा।` : `Each viewer will watch approx. ${stats.minutesPerView} minutes.`}
            </p>
          </div>

          {/* Quick Tip Card */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-900/50 text-xs text-indigo-200 space-y-1">
            <p className="font-bold flex items-center gap-1.5 text-indigo-300">
              <span>💡 {lang === 'hi' ? 'वॉच टाइम का गणित:' : 'Watch Time Math:'}</span>
            </p>
            <p className="text-[11px] leading-relaxed text-indigo-300/80">
              {lang === 'hi' 
                ? '4,000 घंटे = 2,40,000 मिनट। अगर आपकी 10 मिनट की वीडियो पर 45% रिटेंशन मिलता है (4.5 मिनट प्रति व्यू), तो आपको कुल सिर्फ 53,300 व्यूज चाहिए!'
                : '4,000 hours = 240,000 minutes. With 4.5 minutes average watch time, you only need ~53,300 total views across all your videos!'}
            </p>
          </div>
        </div>

        {/* Calculated Daily Targets (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'hi' ? `अगले ${targetDays} दिनों के लिए दैनिक लक्ष्य` : `Daily Targets for the Next ${targetDays} Days`}</span>
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold border border-slate-700">
              {currentPace.videosPerWeek} {lang === 'hi' ? 'वीडियो/हफ्ता' : 'uploads/week'}
            </span>
          </div>

          {/* Metric cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-red-400" />
                <span>{lang === 'hi' ? 'डेली सब्सक्राइबर्स' : 'Daily Subs Needed'}</span>
              </div>
              <div className="text-2xl font-black text-white">+{currentPace.dailySubsNeeded}</div>
              <div className="text-[10px] text-slate-500">{lang === 'hi' ? 'प्रति दिन' : 'per day'}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'hi' ? 'डेली वॉच आवर्स' : 'Daily Watch Hours'}</span>
              </div>
              <div className="text-2xl font-black text-white">+{currentPace.dailyHoursNeeded}h</div>
              <div className="text-[10px] text-slate-500">{lang === 'hi' ? 'घंटे प्रति दिन' : 'hours per day'}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1 col-span-2 sm:col-span-1">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-indigo-400" />
                <span>{lang === 'hi' ? 'डेली व्यूज' : 'Daily Views'}</span>
              </div>
              <div className="text-2xl font-black text-white">~{currentPace.dailyViewsNeeded.toLocaleString()}</div>
              <div className="text-[10px] text-slate-500">{lang === 'hi' ? 'व्यूज प्रति दिन' : 'views per day'}</div>
            </div>

          </div>

          {/* Required Videos Estimation Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/30 via-slate-900/60 to-slate-900 border border-red-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">{lang === 'hi' ? 'अनुमानित कुल नए वीडियोज की ज़रूरत:' : 'Estimated High-Retention Videos Needed:'}</p>
                <p className="text-base font-extrabold text-white">
                  ~{stats.videosNeeded} {lang === 'hi' ? 'क्वालिटी वीडियो' : 'Optimized Videos'}
                </p>
              </div>
            </div>
            <div className="text-right text-xs text-slate-400">
              <span className="font-bold text-red-400">100% Organic</span>
            </div>
          </div>

        </div>

      </div>

      {/* 4-Phase Step-by-Step Strategic Roadmap */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span>{lang === 'hi' ? 'चरणबद्ध कार्ययोजना (4-Phase Action Plan)' : '4-Phase Execution Blueprint'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Phase 1: Days 1-15
              </span>
              <span className="text-xs text-slate-400">Foundation</span>
            </div>
            <h4 className="text-sm font-bold text-white">
              {lang === 'hi' ? 'सर्च-बेस्ड कीवर्ड्स और पहले 250 सब्सक्राइबर्स' : 'Search-Intent Content & First 250 Subs'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'hi' 
                ? 'ऐसे टॉपिक्स चुनें जिन्हें लोग यूट्यूब सर्च बार में ढूंढते हैं (How to, Best..., Top 5)। पहले 5 सेकंड में बिना इंट्रो के हुक दें ताकि दर्शक तुरंत न भागें।'
                : 'Target high-volume search queries (How to, Top 5, Best...). Eliminate long intros to achieve > 70% retention in the first 30 seconds.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Phase 2: Days 16-30
              </span>
              <span className="text-xs text-slate-400">Retention</span>
            </div>
            <h4 className="text-sm font-bold text-white">
              {lang === 'hi' ? 'बिंज-वाचिंग लूप और 1,500 वॉच आवर्स' : 'Binge-Watch Loops & 1,500 Watch Hours'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'hi' 
                ? '3 से 5 वीडियो की सीरीज बनाएं और प्लेलिस्ट बनाएं। हर वीडियो के एंड-स्क्रीन और पिन कमेंट में अगली वीडियो का लिंक दें ताकि एक दर्शक 3-4 वीडियो एक साथ देखे।'
                : 'Create 3-5 part serialized videos. Use end screens and pinned comments to send viewers down rabbit holes, generating 3x watch time per session.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Phase 3: Days 31-45
              </span>
              <span className="text-xs text-slate-400">Multiplier</span>
            </div>
            <h4 className="text-sm font-bold text-white">
              {lang === 'hi' ? 'कम्युनिटी टैब पोल और यूट्यूब शॉर्ट्स फनल' : 'Community Polls & Shorts to Long-Form Funnel'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'hi' 
                ? 'हफ्ते में 3 इमेज पोल्स डालें (यूट्यूब का एल्गोरिदम पोल्स को नॉन-सब्सक्राइबर्स को भी दिखाता है)। वायरल शॉर्ट्स के रिलेटेड वीडियो में अपनी लॉन्ग वीडियो का लिंक जोड़ें।'
                : 'Post engaging image polls on Community Tab (high impression reach). Link high-performing Shorts directly to long-form videos to convert viral traffic.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Phase 4: Days 46-60
              </span>
              <span className="text-xs text-slate-400">Monetization</span>
            </div>
            <h4 className="text-sm font-bold text-white">
              {lang === 'hi' ? '1,000 सब्सक्राइबर्स & 4K पूरे कर YPP अप्लाई' : 'Cross 1,000 Subs & 4K Hours and Apply to YPP'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'hi' 
                ? '2-Step Verification ऑन करें। चैनल पर कॉपीराइट स्ट्राइक या रियूज्ड कंटेंट चेक करें और फिर यूट्यूब स्टूडियो में जाकर मोनेटाइजेशन के लिए अप्लाई करें।'
                : 'Ensure 2-Step Verification is active, no active Community Guidelines strikes, verify original content rights, and submit official YPP application.'}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
