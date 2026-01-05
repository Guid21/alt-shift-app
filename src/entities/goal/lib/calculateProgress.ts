import { Goal } from '../types';

export function calculateGoalProgress(goal: Goal, current: number) {
  return {
    current,
    target: goal.target,
    isAchieved: current >= goal.target,
  };
}
