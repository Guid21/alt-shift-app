import React, { ElementType } from 'react';
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

export type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
  showText?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
} & React.ComponentPropsWithoutRef<T>;

export function Button<T extends ElementType>({
  as,
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
}: ButtonProps<T>) {
  const isDisabled = disabled || loading;
  const iconSize = sizeIconMap[showText ? size : 'iconOnly'];
  const Component = (as || 'button') as ElementType;

  return (
    <Component
      type={as === 'button' ? 'button' : undefined}
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
    </Component>
  );
}

export type IconButtonProps<T extends ElementType> = Omit<
  ButtonProps<T>,
  'showText' | 'children' | 'leftIcon' | 'rightIcon'
> & {
  icon: IconName;
  'aria-label': string;
};

export function IconButton<T extends ElementType>({ icon, as, ...rest }: IconButtonProps<T>) {
  return <Button {...rest} as={as as ElementType} leftIcon={icon} showText={false} />;
}
