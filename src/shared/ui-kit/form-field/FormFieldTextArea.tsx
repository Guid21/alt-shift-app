'use client';

import React from 'react';
import classNames from 'classnames';

import { CharacterCounter } from '../CharacterCounter';
import { TextArea, type TextAreaProps } from '../TextArea';
import fieldStyles from './field.module.css';
import { FormField } from './FormField';
import { getFieldControlProps } from './fieldUtils';

type BaseTextAreaProps = {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  fullWidth?: boolean;
  showCounter?: boolean;
  hideErrorMessage?: boolean;
};

export type FormFieldTextAreaProps = BaseTextAreaProps & TextAreaProps;

function toLength(value: unknown) {
  if (typeof value === 'string' || typeof value === 'number') {
    return `${value}`.length;
  }

  return 0;
}

export function FormFieldTextArea(props: FormFieldTextAreaProps) {
  const {
    label,
    helperText,
    error,
    hideErrorMessage,
    id,
    className,
    fullWidth,
    disabled,
    showCounter = true,
    ...rest
  } = props;

  const { hasError, controlProps } = getFieldControlProps({
    error,
    props: rest,
  });

  const { onChange, value, defaultValue, maxLength, ...textareaProps } = controlProps;

  const [characterCount, setCharacterCount] = React.useState(() => toLength(value ?? defaultValue));
  const isOverLimit = typeof maxLength === 'number' ? characterCount > maxLength : false;

  React.useEffect(() => {
    if (value !== undefined) {
      setCharacterCount(toLength(value));
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event);
    setCharacterCount(event.target.value.length);
  };

  const footer = showCounter ? (
    <CharacterCounter
      valueLength={characterCount}
      maxLength={typeof maxLength === 'number' ? maxLength : undefined}
      isOverLimit={isOverLimit}
    />
  ) : null;

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
      <div className={fieldStyles.controlGroup}>
        <TextArea
          id={id}
          className={classNames(hasError && fieldStyles.error, className)}
          disabled={disabled}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
          {...textareaProps}
        />
        {footer ? <div className={fieldStyles.footer}>{footer}</div> : null}
      </div>
    </FormField>
  );
}
