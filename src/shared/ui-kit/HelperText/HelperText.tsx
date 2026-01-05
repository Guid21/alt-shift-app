import React from 'react';
import classNames from 'classnames';

import fieldStyles from '../form-field/field.module.css';

export type HelperTextProps = {
  id?: string;
  children?: React.ReactNode;
  tone?: 'default' | 'error';
  className?: string;
};

export function HelperText({ id, children, tone = 'default', className }: HelperTextProps) {
  if (!children) return null;

  const isError = tone === 'error';

  return (
    <span
      id={id}
      className={classNames(
        'text-text-sm',
        isError ? fieldStyles.helperError : fieldStyles.helperHint,
        fieldStyles.helper,
        className
      )}
    >
      {children}
    </span>
  );
}

export function ErrorText(props: Omit<HelperTextProps, 'tone'>) {
  return <HelperText {...props} tone="error" />;
}
