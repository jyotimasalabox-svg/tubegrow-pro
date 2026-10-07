// Mathematical calculations for YouTube monetization (1000 subs, 4000 watch hours)
export function calculateMilestones(currentSubs, currentHours, avgViewsPerVideo = 500, avgDurationMin = 8, retentionPct = 40) {
  const targetSubs = 1000;
  const targetHours = 4000; // 240,000 minutes

  const subsRemaining = Math.max(0, targetSubs - currentSubs);
  const hoursRemaining = Math.max(0, targetHours - currentHours);

  const subsProgressPct = Math.min(100, Math.round((currentSubs / targetSubs) * 100));
  const hoursProgressPct = Math.min(100, Math.round((currentHours / targetHours) * 100));

  // Average watch time per view in minutes
  const minutesPerView = (avgDurationMin * (retentionPct / 100));
  // Total watch minutes needed
  const totalMinutesRemaining = hoursRemaining * 60;
  
  // Total views needed to generate remaining watch hours
  const viewsNeededForHours = minutesPerView > 0 ? Math.ceil(totalMinutesRemaining / minutesPerView) : 0;

  // Typical organic conversion rate: 1 subscriber per 50 to 100 views (approx 1.5%)
  const viewsNeededForSubs = subsRemaining * 65;

  // Key bottleneck view requirement
  const criticalViewsNeeded = Math.max(viewsNeededForHours, viewsNeededForSubs);

  // If releasing 3 videos per week:
  const videosNeeded = avgViewsPerVideo > 0 ? Math.ceil(criticalViewsNeeded / avgViewsPerVideo) : 12;

  // Pacing benchmarks:
  // 30 days, 60 days, 90 days plans
  const pace30 = {
    days: 30,
    dailySubsNeeded: Math.ceil(subsRemaining / 30),
    dailyHoursNeeded: +(hoursRemaining / 30).toFixed(1),
    dailyViewsNeeded: Math.ceil(criticalViewsNeeded / 30),
    videosPerWeek: 4
  };

  const pace60 = {
    days: 60,
    dailySubsNeeded: Math.ceil(subsRemaining / 60),
    dailyHoursNeeded: +(hoursRemaining / 60).toFixed(1),
    dailyViewsNeeded: Math.ceil(criticalViewsNeeded / 60),
    videosPerWeek: 3
  };

  const pace90 = {
    days: 90,
    dailySubsNeeded: Math.ceil(subsRemaining / 90),
    dailyHoursNeeded: +(hoursRemaining / 90).toFixed(1),
    dailyViewsNeeded: Math.ceil(criticalViewsNeeded / 90),
    videosPerWeek: 2
  };

  return {
    subsRemaining,
    hoursRemaining,
    subsProgressPct,
    hoursProgressPct,
    minutesPerView: +minutesPerView.toFixed(1),
    criticalViewsNeeded,
    videosNeeded,
    pace30,
    pace60,
    pace90
  };
}
