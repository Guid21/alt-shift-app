import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Typography } from '@/shared/ui-kit/Typography';

const variants = [
  'body',
  'text-sm',
  'text-sm-medium',
  'text-md',
  'text-md-semibold',
  'text-lg',
  'text-lg-semibold',
  'heading-md-semibold',
  'heading-lg-semibold',
] as const;

const colors = ['primary', 'secondary', 'disabled', 'error', 'accent', 'label', 'hint'] as const;

const meta = {
  title: 'UI-KIT/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {variants.map((variant) => (
        <Typography key={variant} {...args} variant={variant}>
          {`${variant} – ${args.children}`}
        </Typography>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  args: {
    variant: 'text-md',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {colors.map((color) => (
        <Typography key={color} {...args} color={color}>
          {`${color} – ${args.children}`}
        </Typography>
      ))}
    </div>
  ),
};
