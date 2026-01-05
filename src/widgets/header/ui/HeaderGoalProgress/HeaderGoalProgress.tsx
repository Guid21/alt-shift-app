'use client';

import { useApplicationsGoal } from '@/features/goal/track-applications-goal';
import { GoalProgress } from '@/widgets/GoalProgress';

export function HeaderGoalProgress() {
  const goal = useApplicationsGoal();

  return (
    <GoalProgress
      isAchieved={goal.isAchieved}
      target={goal.target}
      current={goal.current}
    />
  );
}
