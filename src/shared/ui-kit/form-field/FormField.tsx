import React from 'react';
import classNames from 'classnames';

import { ErrorText, HelperText } from '../HelperText';
import { Label } from '../Label';
import fieldStyles from './field.module.css';

export type FormFieldProps = {
  id?: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  hasError?: boolean;
  fullWidth?: boolean;
  hideErrorMessage?: boolean;
  children: React.ReactNode;
};

export function FormField({
  id,
  label,
  helperText,
  error,
  hasError = false,
  fullWidth,
  hideErrorMessage = false,
  children,
}: FormFieldProps) {
  const showError = Boolean(error) && !hideErrorMessage;
  const showHelper = helperText && !showError;
  const helperTone = hasError && !hideErrorMessage ? 'error' : 'default';
  const message = showError ? (
    <ErrorText>{error}</ErrorText>
  ) : showHelper ? (
    <HelperText tone={helperTone}>{helperText}</HelperText>
  ) : null;

  return (
    <div className={classNames(fieldStyles.wrapper, fullWidth && fieldStyles.fullWidth)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {message}
    </div>
  );
}
