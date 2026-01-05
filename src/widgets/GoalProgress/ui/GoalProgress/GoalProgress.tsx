'use client';

import { ProgressStatus } from '@/shared/ui-kit/ProgressStatus';
import { StatusIcon } from '@/shared/ui-kit/StatusIcon';
import { Typography } from '@/shared/ui-kit/Typography';
import cn from 'classnames';

import styles from './GoalProgress.module.css';

export type GoalProgressProps = {
  target: number;
  isAchieved: boolean;
  current: number;
};

export function GoalProgress({ current, target, isAchieved }: GoalProgressProps) {
  const total = Math.max(target, 1);

  return (
    <div className={styles.wrapper}>
      <Typography as="span" variant="body" color="secondary">
        {current}/{target} <span className={styles.mobileHidden}>applications generated</span>
      </Typography>
      {isAchieved ? (
        <StatusIcon variant="success" className={cn(styles.achievedIcon, styles.mobileHidden)} />
      ) : (
        <ProgressStatus current={current} total={total} className={styles.mobileHidden} />
      )}
    </div>
  );
}
