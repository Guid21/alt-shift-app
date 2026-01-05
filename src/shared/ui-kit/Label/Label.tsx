import React from 'react';
import classNames from 'classnames';

export type LabelProps = {
  htmlFor?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Label({ htmlFor, children, className }: LabelProps) {
  if (!children) return null;

  return (
    <label
      className={classNames('text-text-sm-medium text-color-label', className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
