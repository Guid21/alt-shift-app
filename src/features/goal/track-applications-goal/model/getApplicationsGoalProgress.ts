import { calculateGoalProgress } from '@/entities/goal/lib/calculateProgress';
import { APPLICATIONS_GOAL } from '@/entities/goal/model/application-goal';

export type ApplicationsGoalProgress = {
  isAchieved: boolean;
  target: number;
  current: number;
};

export function getApplicationsGoalProgress(applicationsCount: number): ApplicationsGoalProgress {
  const { isAchieved, target, current } = calculateGoalProgress(APPLICATIONS_GOAL, applicationsCount);

  return { isAchieved, target, current };
}
