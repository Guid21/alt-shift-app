import React from 'react';
import classNames from 'classnames';

import styles from './card.module.css';

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export function CardContent({ className, children, ...rest }: CardContentProps) {
  return (
    <div className={classNames(styles.content, className)} {...rest}>
      {children}
    </div>
  );
}

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export function CardFooter({ className, children, ...rest }: CardFooterProps) {
  return (
    <div className={classNames(styles.footer, className)} {...rest}>
      {children}
    </div>
  );
}

export type CardProps = {
  variant?: 'neutral' | 'accent';
  padding?: 'md' | 'lg';
  fullHeight?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({
  variant = 'neutral',
  padding = 'md',
  fullHeight,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={classNames(
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        fullHeight && styles.fullHeight,
        className
      )}
      {...rest}
    >
      <div className={styles.body}>{children}</div>
    </div>
  );
}
