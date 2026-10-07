import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  DollarSign, 
  Share2, 
  Compass, 
  Lock,
  Sparkles
} from 'lucide-react';

export default function SafePromotionGuide({ lang }) {
  const [checklist, setChecklist] = useState({
    subs: false,
    hours: false,
    twoStep: true,
    noStrikes: true,
    originalContent: true
  });

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-white flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          <span>{lang === 'hi' ? 'सेफ यूट्यूब प्रमोशन प्लेबुक & YPP चेकलिस्ट' : 'Safe Promotion Playbook & YPP Checklist'}</span>
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          {lang === 'hi'
            ? 'यूट्यूब के नियमों के अनुसार 100% सुरक्षित और कानूनी तरीके से चैनल मोनेटाइज करने का आधिकारिक रोडमैप।'
            : 'Official, terms-compliant strategies to cross 1K subs & 4K hours without risking account suspension.'}
        </p>
      </div>

      {/* Dangerous Myth vs Reality Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* The Danger */}
        <div className="p-6 rounded-3xl bg-rose-950/20 border border-rose-900/40 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span>{lang === 'hi' ? 'खतरा: फेक सब्सक्राइबर्स और बॉट्स' : 'Danger: Fake Subs & View Bots'}</span>
          </div>

          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'hi' ? 'चैनल हमेशा के लिए बैन:' : 'Permanent Channel Termination:'}</strong>{' '}
                {lang === 'hi' ? 'YouTube का AI तुरंत पहचान लेता है कि व्यूज रियल इंसानों से आ रहे हैं या स्क्रिप्टेड बॉट्स से।' : 'YouTube actively purges fake accounts and flags channels manipulating metrics.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'hi' ? 'अमान्य वॉच टाइम (Invalid Watch Time):' : 'Invalid Traffic Deductions:'}</strong>{' '}
                {lang === 'hi' ? 'अगर बॉट से 4000 घंटे कर भी लिए, तो मोनेटाइजेशन रिव्यू टीम उसे रिजेक्ट कर देती है।' : 'YouTube human review team verifies watch time traffic before approving AdSense.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'hi' ? 'डेड चैनल (Dead Audience):' : 'Dead Algorithm Metrics:'}</strong>{' '}
                {lang === 'hi' ? 'नकली सब्सक्राइबर्स कभी आपकी नई वीडियो नहीं देखेंगे, जिससे CTR 0% हो जाएगा।' : 'Bot subscribers will never watch future uploads, destroying CTR and impressions.'}
              </span>
            </li>
          </ul>
        </div>

        {/* The Safe Solution */}
        <div className="p-6 rounded-3xl bg-emerald-950/20 border border-emerald-900/40 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <span>{lang === 'hi' ? 'सुरक्षित तरीका: असली यूट्यूब ग्रोथ' : 'Safe Strategy: Organic Growth Engine'}</span>
          </div>

          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'hi' ? 'गूगल एड्स (Google Ads for Video):' : 'Official Google Video Ads:'}</strong>{' '}
                {lang === 'hi' ? 'मात्र ₹100-200 में आधिकारिक Google Ads चलाकर असली भारतीय दर्शक लाएं जो सच में सब्सक्राइब करेंगे।' : 'Run legitimate Google In-Feed campaigns to target high-intent viewers.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'hi' ? 'शॉर्ट्स से लॉन्ग वीडियो फनल:' : 'Shorts-to-Long Video Funnel:'}</strong>{' '}
                {lang === 'hi' ? 'शॉर्ट्स से 1000 सब्सक्राइबर्स जल्दी पूरे करें, और उनके रिलेटेड वीडियो में लॉन्ग वीडियो लिंक करके 4000 घंटे पूरे करें।' : 'Use high-viral Shorts to achieve 1K subs quickly, funneled into long-form videos.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'hi' ? 'लाइफटाइम कमाई (AdSense Earnings):' : 'Lifetime Passive Ad Revenue:'}</strong>{' '}
                {lang === 'hi' ? 'एक बार चैनल मोनेटाइज होने के बाद हर महीने बैंक में असली पैसे आएंगे।' : 'Guaranteed safe monetization approval with zero risk of demonetization.'}
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Official YouTube Partner Program 2026 Checklist */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-400" />
            <span>{lang === 'hi' ? 'आधिकारिक YPP मोनेटाइजेशन रेडीनेस चेकलिस्ट' : 'Official YPP Monetization Readiness Checklist'}</span>
          </h3>
          <span className="text-xs text-slate-400">
            {lang === 'hi' ? 'क्लिक करके चेक करें' : 'Click to check off'}
          </span>
        </div>

        <div className="space-y-3">
          {[
            {
              key: 'subs',
              title: lang === 'hi' ? '1,000 असली सब्सक्राइबर्स' : '1,000 Real Subscribers',
              desc: lang === 'hi' ? 'चैनल पर कम से कम 1000 एक्टिव सब्सक्राइबर्स होने चाहिए।' : 'Active real subscribers without bot inflation.'
            },
            {
              key: 'hours',
              title: lang === 'hi' ? '4,000 वैलिड पब्लिक वॉच आवर्स (पिछले 365 दिन)' : '4,000 Valid Public Watch Hours (Past 365 Days)',
              desc: lang === 'hi' ? 'प्राइवेट, अनलिस्टेड या डिलीटेड वीडियोज का वॉच टाइम इसमें नहीं जुड़ता।' : 'Watch hours from public long-form videos (excluding Shorts and private videos).'
            },
            {
              key: 'twoStep',
              title: lang === 'hi' ? '2-Step Verification ऑन है' : '2-Step Verification Enabled',
              desc: lang === 'hi' ? 'आपके गूगल अकाउंट पर सुरक्षा के लिए 2FA एक्टिव होना अनिवार्य है।' : 'Mandatory Google Account security check.'
            },
            {
              key: 'noStrikes',
              title: lang === 'hi' ? '0 एक्टिव कम्युनिटी गाइडलाइन्स स्ट्राइक' : '0 Active Community Guidelines Strikes',
              desc: lang === 'hi' ? 'चैनल पर कोई भी एक्टिव स्ट्राइक नहीं होनी चाहिए (वार्निंग चल सकती है)।' : 'Account must be in good standing without active strikes.'
            },
            {
              key: 'originalContent',
              title: lang === 'hi' ? 'ओरिजिनल कंटेंट (No Reused Content)' : 'Original Content & Voiceover',
              desc: lang === 'hi' ? 'दूसरों के वीडियो बिना अपनी आवाज/वैल्यू के डाउनलोड करके सीधे अपलोड न करें।' : 'Original voiceover or editing value to avoid Reused Content rejection.'
            }
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => toggleCheck(item.key)}
              className="p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 flex items-start gap-3 cursor-pointer transition select-none"
            >
              <input
                type="checkbox"
                checked={checklist[item.key]}
                onChange={() => {}}
                className="mt-1 h-4 w-4 accent-red-600 rounded cursor-pointer shrink-0"
              />
              <div className="space-y-0.5">
                <p className={`text-sm font-bold ${checklist[item.key] ? 'text-emerald-400 line-through' : 'text-white'}`}>
                  {item.title}
                </p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Ads CPV Step-by-Step Box */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'hi' ? 'गूगल एड्स से सेफ सब्सक्राइबर्स पाने की सही विधि' : 'How to Run Safe YouTube Ads for Subscribers'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-white text-xs">Step 1: Choose Video In-Feed</span>
            <p className="text-slate-400 text-[11px]">
              {lang === 'hi' ? 'स्किपेबल एड्स न चलाएं। "Video In-Feed" एड चुनें ताकि थंबनेल सर्च और होम फीड में दिखे।' : 'Select "In-Feed Video Ad" so viewers click willingly.'}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-white text-xs">Step 2: Set CPV to ₹0.15 - ₹0.30</span>
            <p className="text-slate-400 text-[11px]">
              {lang === 'hi' ? 'अधिकतम बिड ₹0.20 प्रति व्यू रखें। 1,000 व्यूज सिर्फ ₹150-200 में आ जाएंगे।' : 'Set target CPV to ₹0.15-₹0.30 for ultra-cost-efficient views.'}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-white text-xs">Step 3: Target Your Exact Audience</span>
            <p className="text-slate-400 text-[11px]">
              {lang === 'hi' ? 'अपने टॉपिक से जुड़े दूसरे चैनलों के दर्शकों को टारगेट करें। इससे 15-20% व्यूअर्स सब्सक्राइब करेंगे।' : 'Target placements on similar competitor channels for maximum subscriber conversion.'}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
