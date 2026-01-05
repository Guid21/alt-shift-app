'use client';

import { useApplicationsGoal } from '@/features/goal/track-applications-goal';
import { ApplicationsGoalBanner } from '@/widgets/applications/Goal';

export function ApplicationsGoalSection() {
  const { current, target, isAchieved } = useApplicationsGoal();

  if (isAchieved) {
    return null;
  }

  return <ApplicationsGoalBanner target={target} current={current} />;
}
