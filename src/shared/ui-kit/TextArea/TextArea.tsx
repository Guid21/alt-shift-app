import React from 'react';
import classNames from 'classnames';

import controlStyles from '../form-field/field.module.css';
import styles from './textarea.module.css';

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={classNames(controlStyles.control, styles.textarea, className)}
      {...rest}
    />
  );
}
