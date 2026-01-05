import React from 'react';
import classNames from 'classnames';

import { Typography } from '../Typography';
import styles from './character-counter.module.css';

export type CharacterCounterProps = {
  valueLength: number;
  maxLength?: number;
  isOverLimit?: boolean;
  className?: string;
};

export function CharacterCounter({
  valueLength,
  maxLength,
  isOverLimit,
  className,
}: CharacterCounterProps) {
  const overLimit =
    typeof isOverLimit === 'boolean'
      ? isOverLimit
      : typeof maxLength === 'number'
        ? valueLength > maxLength
        : false;
  const counterColor = overLimit ? 'error' : 'hint';

  return (
    <Typography
      variant="text-sm"
      color={counterColor}
      className={classNames(styles.counter, overLimit && styles.counterExceeded, className)}
      aria-live="polite"
    >
      {maxLength ? `${valueLength}/${maxLength}` : valueLength}
    </Typography>
  );
}
