import React from 'react';
import cn from 'classnames';

import styles from './progress-status.module.css';

type ProgressStatusVariant = 'dots' | 'segments';

const layoutClassByVariant: Record<ProgressStatusVariant, string> = {
  dots: styles.dotsLayout,
  segments: styles.segmentsLayout,
};

const itemClassByVariant: Record<ProgressStatusVariant, string> = {
  dots: styles.dotItem,
  segments: styles.segmentItem,
};

export type ProgressStatusProps = {
  current: number;
  total: number;
  variant?: ProgressStatusVariant;
} & React.HTMLAttributes<HTMLDivElement>;

export function ProgressStatus({
  current,
  total,
  className,
  variant = 'dots',
  ...rest
}: ProgressStatusProps) {
  return (
    <div
      className={cn(styles.root, layoutClassByVariant[variant], className)}
      aria-hidden="true"
      role="presentation"
      {...rest}
    >
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={cn(
            styles.dot,
            itemClassByVariant[variant],
            index < current && styles.dotActive
          )}
        />
      ))}
    </div>
  );
}
