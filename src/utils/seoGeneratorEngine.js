// Professional YouTube SEO Generation Engine

// High-converting power words for YouTube titles
const powerWords = [
  "Secret", "Proven", "Shocking", "Truth", "Fast", "Easy", "Insane",
  "Ultimate", "Mistake", "Formula", "Guaranteed", "Never", "Revealed",
  "Zabardast", "Asli", "Sach", "Top", "Step-by-Step", "2026"
];

// Helper to sanitize and extract root keywords from user input
export function extractKeywords(inputTitle) {
  if (!inputTitle || !inputTitle.trim()) return ["youtube", "growth", "viral"];

  const cleaned = inputTitle
    .replace(/[^\w\s\u0900-\u097F]/gi, ' ') // Keep Hindi and English characters
    .toLowerCase()
    .trim();

  const words = cleaned.split(/\s+/).filter(w => w.length > 2);
  const stopWords = new Set([
    "kaise", "kare", "karein", "hai", "hain", "how", "to", "the", "and", 
    "for", "with", "this", "that", "video", "me", "mein", "ko", "se", "par"
  ]);

  const coreWords = words.filter(w => !stopWords.has(w));
  return coreWords.length > 0 ? coreWords : words;
}

// Generates 5 tailored, high-performing titles
export function generateOptimizedTitles(rawTitle) {
  const clean = rawTitle.trim();
  const currentYear = 2026;

  // Title 1: Search-First SEO Title (Targeting YouTube Search)
  const searchTitle = `${clean} | Complete Step-by-Step Guide (${currentYear})`;

  // Title 2: High-CTR Curiosity & Click Magnet (For Browse & Suggested)
  const curiosityTitle = `Stop Doing This! The Real Truth About ${clean}`;

  // Title 3: High Urgency & Emotion (Viral Formula)
  const urgencyTitle = `Why 99% Of People Fail At ${clean} (And How to Fix It)`;

  // Title 4: Hindi/Hinglish Mass Appeal Title
  const hinglishTitle = `${clean}: 5 सबसे बड़ी गलतियां जो कभी मत करना! (${currentYear})`;

  // Title 5: Ultimate Masterclass / Evergreen
  const masterclassTitle = `The ONLY ${clean} Video You Need to Watch in ${currentYear}`;

  return [
    {
      id: 1,
      title: searchTitle,
      type: "Search-Intent SEO (Rank #1)",
      badge: "YouTube Search",
      ctrScore: 97,
      chars: searchTitle.length,
      ideal: searchTitle.length <= 60
    },
    {
      id: 2,
      title: curiosityTitle,
      type: "High-CTR Browse Magnet",
      badge: "Recommended Feed",
      ctrScore: 99,
      chars: curiosityTitle.length,
      ideal: curiosityTitle.length <= 60
    },
    {
      id: 3,
      title: urgencyTitle,
      type: "Shock & Curiosity Gap",
      badge: "High Click Rate",
      ctrScore: 95,
      chars: urgencyTitle.length,
      ideal: urgencyTitle.length <= 65
    },
    {
      id: 4,
      title: hinglishTitle,
      type: "Hindi + English Blend",
      badge: "Indian Audience",
      ctrScore: 98,
      chars: hinglishTitle.length,
      ideal: hinglishTitle.length <= 60
    },
    {
      id: 5,
      title: masterclassTitle,
      type: "Evergreen Authority",
      badge: "Lifetime Views",
      ctrScore: 96,
      chars: masterclassTitle.length,
      ideal: masterclassTitle.length <= 60
    }
  ];
}

// Generates high-searching keywords and YouTube tags (Targeting < 500 chars limit)
export function generateTagsAndKeywords(rawTitle) {
  const clean = rawTitle.trim().toLowerCase();
  const words = extractKeywords(rawTitle);
  const mainPhrase = words.slice(0, 3).join(" ");
  const currentYear = "2026";

  const generatedTags = [
    clean,
    `${clean} ${currentYear}`,
    `how to ${clean}`,
    `${clean} kaise kare`,
    `${clean} tutorial`,
    `${clean} tips and tricks`,
    `best ${clean} method`,
    `${clean} full course`,
    `${clean} for beginners`,
    `${clean} secret strategy`,
    `${clean} step by step`,
    `${clean} new update`,
    `how to grow with ${mainPhrase}`,
    `${mainPhrase} viral trick`,
    `${clean} in hindi`,
    `${clean} monetization`,
    `youtube seo for ${mainPhrase}`,
    `${mainPhrase} algorithm trick`
  ];

  // Remove duplicates and clean
  const uniqueTags = Array.from(new Set(generatedTags.map(t => t.trim())));

  // Calculate simulated high search volume, competition, and score
  const detailedKeywords = uniqueTags.map((tag, idx) => {
    const volumes = ["450K", "320K", "280K", "190K", "145K", "95K", "82K", "65K"];
    const comps = ["Low", "Low", "Medium", "Medium", "Low", "Medium", "High"];
    const scores = [98, 96, 94, 92, 95, 91, 89, 93];

    return {
      tag,
      searchVol: volumes[idx % volumes.length],
      competition: comps[idx % comps.length],
      score: scores[idx % scores.length]
    };
  });

  // Build comma-separated studio string within ~480 characters (YouTube allows max 500 chars)
  let studioTagsString = "";
  let studioTagsList = [];
  for (const item of detailedKeywords) {
    const candidate = studioTagsString ? `${studioTagsString}, ${item.tag}` : item.tag;
    if (candidate.length <= 480) {
      studioTagsString = candidate;
      studioTagsList.push(item.tag);
    } else {
      break;
    }
  }

  return {
    keywords: detailedKeywords,
    studioTagsString,
    studioTagsCount: studioTagsList.length,
    characterCount: studioTagsString.length
  };
}

// Generates viral hashtags
export function generateHashtags(rawTitle) {
  const words = extractKeywords(rawTitle);
  const baseTag = words.join("").replace(/[^\w]/g, '');

  const list = [
    `#${baseTag}`,
    `#${words[0] || 'YouTube'}`,
    `#YouTubeGrowth`,
    `#${baseTag}2026`,
    `#YouTubeSEO`,
    `#ViralVideo`,
    `#1000Subscribers`,
    `#4000WatchHours`,
    `#YouTubeTips`,
    `#CreatorStudio`,
    `#Trending`,
    `#Youtuber`
  ];

  const unique = Array.from(new Set(list));
  return {
    hashtags: unique,
    hashtagsString: unique.join(" ")
  };
}

// Generates a fully formatted, high-converting YouTube Description
export function generateCompleteDescription(rawTitle, selectedTitle, hashtagsString, tagsString) {
  const clean = rawTitle.trim();
  const currentYear = 2026;
  const titleUsed = selectedTitle || clean;

  return `
🔥 ${titleUsed}

In this video, we reveal the complete step-by-step strategy for ${clean}. If you are looking to get high engagement, boost watch time, and master ${clean} in ${currentYear}, this video covers everything from beginner to advanced level!

Make sure to watch till the end to not miss the most critical secret tip that 99% of creators overlook.

━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 TIMESTAMPS / VIDEO CHAPTERS:
00:00 - Introduction & The Big Problem
00:45 - Why Most People Get Stuck at ${clean}
02:15 - The Core Step-by-Step Method
05:30 - The Secret Trick for Maximum Retention
08:10 - Common Mistakes to Avoid
10:40 - Summary & Next Steps
━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 TOPICS & QUERIES COVERED IN THIS VIDEO:
• ${clean} in Hindi & English
• How to master ${clean} step by step in ${currentYear}
• Best tips and strategies for ${clean}
• Complete tutorial for beginners
• Secret algorithm hacks to grow faster

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔔 SUBSCRIBE for more practical YouTube growth strategies:
[Insert Your Channel Subscription Link Here]

💬 LET'S CONNECT:
• Instagram: @YourHandle
• Telegram: @YourChannel
• Twitter/X: @YourHandle

━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ DISCLAIMER:
This video is created for educational and informational purposes. Results may vary depending on consistency and quality of execution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━
${hashtagsString}
`.trim();
}
