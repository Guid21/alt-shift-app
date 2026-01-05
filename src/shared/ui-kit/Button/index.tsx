import React from 'react';
import classNames from 'classnames';

import styles from './button.module.css';
import { Icon, IconName, IconSize } from '../Icon';
import { Spinner } from '../Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
const sizeTypographyMap: Record<ButtonSize, string> = {
  sm: 'text-text-md-semibold',
  md: 'text-text-md-semibold',
  lg: 'text-text-lg-semibold',
};
const sizeIconMap: Record<ButtonSize | 'iconOnly', IconSize> = {
  sm: 20,
  md: 20,
  lg: 24,
  iconOnly: 20,
};

export type ButtonColor = 'default' | 'danger';

export type ButtonProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
  showText?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  color = 'default',
  size = 'md',
  leftIcon,
  rightIcon,
  showText = true,
  children,
  className,
  loading,
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const iconSize = sizeIconMap[showText ? size : 'iconOnly'];
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        styles[variant],
        color !== 'default' && styles[`color-${color}`],
        styles[size],
        !showText && styles.iconOnly,
        loading && styles.loading,
        className
      )}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      <span className={classNames(styles.content, loading && styles.contentHidden)}>
        {leftIcon && <Icon name={leftIcon} size={iconSize} />}
        {showText && <span className={sizeTypographyMap[size]}>{children}</span>}
        {rightIcon && <Icon name={rightIcon} size={iconSize} />}
      </span>

      {loading && (
        <span className={styles.spinnerWrapper}>
          <Spinner size={iconSize} />
        </span>
      )}
    </button>
  );
}

export type IconButtonProps = Omit<
  ButtonProps,
  'showText' | 'children' | 'leftIcon' | 'rightIcon'
> & {
  icon: IconName;
  'aria-label': string;
};

export function IconButton({ icon, ...rest }: IconButtonProps) {
  return <Button {...rest} leftIcon={icon} showText={false} />;
}
