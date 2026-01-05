import React from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon';
import styles from './spinner.module.css';

export type SpinnerProps = Omit<React.ComponentProps<typeof Icon>, 'name'>;

export function Spinner({ size = 24, className, ...rest }: SpinnerProps) {
  return (
    <Icon
      name="spinner"
      size={size}
      className={classNames(styles.spinner, className)}
      {...rest}
    />
  );
}
