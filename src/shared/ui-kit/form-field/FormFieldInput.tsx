import React from 'react';
import classNames from 'classnames';

import { Input, type InputProps } from '../Input';
import fieldStyles from './field.module.css';
import { FormField } from './FormField';
import { getFieldControlProps } from './fieldUtils';

export type FormFieldInputProps = {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  fullWidth?: boolean;
  hideErrorMessage?: boolean;
} & InputProps;

export function FormFieldInput(props: FormFieldInputProps) {
  const { label, helperText, error, hideErrorMessage, id, className, fullWidth, ...rest } = props;
  const { hasError, controlProps } = getFieldControlProps({
    error,
    props: rest,
  });

  const { type = 'text', ...inputProps } = controlProps;

  return (
    <FormField
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      fullWidth={fullWidth}
      hasError={hasError}
      hideErrorMessage={hideErrorMessage}
    >
      <Input
        id={id}
        type={type}
        className={classNames(hasError && fieldStyles.error, className)}
        {...inputProps}
      />
    </FormField>
  );
}
