import React, { ElementType } from 'react';
import cn from 'classnames';

export type TypographyVariant =
  | 'body'
  | 'text-sm'
  | 'text-sm-medium'
  | 'text-md'
  | 'text-md-semibold'
  | 'text-lg'
  | 'text-lg-semibold'
  | 'heading-md-semibold'
  | 'heading-lg-semibold';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'error'
  | 'accent'
  | 'on-accent'
  | 'label'
  | 'hint';

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T;
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const variantClassNameMap: Record<TypographyVariant, string> = {
  body: 'text-body',
  'text-sm': 'text-text-sm',
  'text-sm-medium': 'text-text-sm-medium',
  'text-md': 'text-text-md',
  'text-md-semibold': 'text-text-md-semibold',
  'text-lg': 'text-text-lg',
  'text-lg-semibold': 'text-text-lg-semibold',
  'heading-md-semibold': 'text-heading-md-semibold',
  'heading-lg-semibold': 'text-heading-lg-semibold',
};

const colorClassNameMap: Record<TypographyColor, string> = {
  primary: 'text-color-primary',
  secondary: 'text-color-secondary',
  disabled: 'text-color-disabled',
  error: 'text-color-error',
  accent: 'text-color-accent',
  'on-accent': 'text-color-on-accent',
  label: 'text-color-label',
  hint: 'text-color-hint',
};

export function Typography<T extends ElementType = 'span'>({
  as,
  variant = 'body',
  color = 'primary',
  className,
  children,
  ...rest
}: TypographyProps<T>) {
  const Component = (as || 'span') as ElementType;

  return (
    <Component
      className={cn(variantClassNameMap[variant], colorClassNameMap[color], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
