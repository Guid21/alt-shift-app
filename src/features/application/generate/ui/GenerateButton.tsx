'use client';

import { Button, ButtonSize, type ButtonVariant } from '@/shared/ui-kit/Button';
import { IconName } from '@/shared/ui-kit/Icon';

type Variant = 'regenerate' | 'generate';

const buttonLabelMap: Record<Variant, string> = {
  regenerate: 'Try Again',
  generate: 'Generate Now',
};

const variantMap: Record<Variant, ButtonVariant> = {
  regenerate: 'secondary',
  generate: 'primary',
};

const iconMap: Record<Variant, IconName | undefined> = {
  regenerate: 'refresh',
  generate: undefined,
};

type GenerateButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  buttonLabel?: string;
  variant?: Variant;
  size?: ButtonSize | undefined;
  type?: 'button' | 'submit';
};

export function GenerateButton({
  disabled,
  loading,
  className,
  variant = 'generate',
  size,
  type = 'button',
}: GenerateButtonProps) {
  return (
    <Button
      variant={variantMap[variant]}
      leftIcon={iconMap[variant]}
      loading={loading}
      disabled={disabled}
      className={className}
      size={size}
      type={type}
    >
      {buttonLabelMap[variant]}
    </Button>
  );
}
