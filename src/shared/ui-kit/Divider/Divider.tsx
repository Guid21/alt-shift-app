import React from 'react';
import classNames from 'classnames';

import styles from './divider.module.css';

export type DividerProps = React.HTMLAttributes<HTMLHRElement>;

export function Divider({ className, role = 'separator', ...rest }: DividerProps) {
  return <hr role={role} className={classNames(styles.divider, className)} {...rest} />;
}
