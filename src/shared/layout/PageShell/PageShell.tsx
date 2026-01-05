import React, { ElementType } from 'react';
import cn from 'classnames';
import styles from './page-shell.module.css';

type PageShellProps<T extends ElementType = 'div'> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
};
export function PageShell({ children, className, as: Tag = 'div' }: PageShellProps) {
  return <Tag className={cn(styles.shell, className)}>{children}</Tag>;
}
