import React from 'react';
import classNames from 'classnames';

import controlStyles from '../form-field/field.module.css';
import styles from './input.module.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = 'text', ...rest }: InputProps) {
  return (
    <input
      type={type}
      className={classNames(controlStyles.control, styles.input, className)}
      {...rest}
    />
  );
}
