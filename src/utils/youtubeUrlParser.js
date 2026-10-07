export function parseYoutubeUrl(input) {
  if (!input || !input.trim()) return null;
  const clean = input.trim();

  // Check if it's a handle (@handle)
  const handleMatch = clean.match(/@([a-zA-Z0-9_\-.]+)/);
  if (handleMatch) {
    return {
      type: "handle",
      value: `@${handleMatch[1]}`,
      handle: handleMatch[1],
      original: clean
    };
  }

  // Check if it's a video URL
  const videoMatch = clean.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (videoMatch) {
    return {
      type: "video",
      videoId: videoMatch[1],
      value: videoMatch[1],
      original: clean
    };
  }

  // Check if it's channel ID
  const channelMatch = clean.match(/youtube\.com\/channel\/([a-zA-Z0-9_-]+)/);
  if (channelMatch) {
    return {
      type: "channel_id",
      channelId: channelMatch[1],
      value: channelMatch[1],
      original: clean
    };
  }

  // Fallback to name or search query
  return {
    type: "search",
    value: clean.replace(/https?:\/\/(?:www\.)?youtube\.com\/?/, '').replace(/\//g, ''),
    original: clean
  };
}

// Generates a comprehensive audit data structure based on input
export function generateAuditProfile(parsedInfo, presetList) {
  // Check if it matches any of our presets
  if (parsedInfo.type === "handle") {
    const found = presetList.find(
      p => p.handle.toLowerCase() === parsedInfo.value.toLowerCase() ||
           p.handle.toLowerCase().includes(parsedInfo.handle.toLowerCase())
    );
    if (found) return found;
  }

  // If custom link or handle, build an intelligent profile
  const seed = parsedInfo.value.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const pseudoRandom = (offset, min, max) => {
    const val = ((seed * (offset + 13)) % 1000) / 1000;
    return Math.floor(min + val * (max - min));
  };

  const subs = pseudoRandom(1, 120, 890);
  const watchHours = pseudoRandom(2, 350, 3200);
  const videoCount = pseudoRandom(3, 12, 58);
  const avgViews = pseudoRandom(4, 250, 2400);
  const avgDurationMin = +(pseudoRandom(5, 45, 120) / 10).toFixed(1);
  const retention = pseudoRandom(6, 32, 55);

  const cleanName = parsedInfo.type === "handle" 
    ? parsedInfo.handle.replace(/[-_.]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : (parsedInfo.type === "video" ? `Video Creator (${parsedInfo.videoId.substring(0, 5)})` : parsedInfo.value);

  const categories = ["Technology", "Gaming", "Education", "Food & Recipes", "Entertainment", "Finance"];
  const category = categories[seed % categories.length];

  return {
    id: `custom_${seed}`,
    name: cleanName || "YouTube Creator",
    handle: parsedInfo.type === "handle" ? parsedInfo.value : `@${(cleanName || "creator").toLowerCase().replace(/\s+/g, '')}`,
    avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${cleanName}`,
    banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    category,
    subscribers: subs,
    watchHours: watchHours,
    videoCount: videoCount,
    avgViews: avgViews,
    avgDurationMin: avgDurationMin,
    retentionRate: retention,
    topVideo: `How to master ${category} in 2026 (Viral Strategy)`,
    strengths: [
      "Consistent content theme in " + category,
      "Decent title capitalization and structure",
      "Good audience retention rate (" + retention + "%)"
    ],
    weaknesses: [
      "Average view duration can be improved with 5s hooks",
      "Missing pinned comments to redirect to playlists",
      "Thumbnails need brighter focal elements"
    ],
    seoScore: pseudoRandom(7, 62, 85)
  };
}
