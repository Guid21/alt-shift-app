import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Button, ButtonSize, ButtonVariant, IconButton } from '@/shared/ui-kit/Button';
import { ICON_NAMES } from '@/shared/ui-kit/Icon';

const variants: ButtonVariant[] = ['primary', 'secondary', 'text'];
const sizes: ButtonSize[] = ['lg', 'md', 'sm'];
const iconOptions = ['none', ...ICON_NAMES];

const meta = {
  title: 'UI-KIT/Button',
  component: Button,
  subcomponents: { IconButton },
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    showText: true,
    loading: false,
    children: 'Button',
  },
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'inline-radio', options: sizes },
    leftIcon: { control: 'select', options: iconOptions, mapping: { none: undefined } },
    rightIcon: { control: 'select', options: iconOptions, mapping: { none: undefined } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const VariantsGrid: Story = {
  args: {
    leftIcon: 'plus',
    rightIcon: 'refresh',
  },
  render: (args) => {
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: '120px repeat(7, minmax(0, max-content))',
      columnGap: 16,
      rowGap: 12,
      alignItems: 'center',
    } as const;
    const headerCellClass = 'text-text-sm-medium text-color-secondary';

    return (
      <div style={{ display: 'grid', gap: 16 }}>
        <div style={gridStyle}>
          <span className={headerCellClass}>Variant</span>
          {sizes.map((size) => (
            <span key={`header-${size}`} className={headerCellClass}>
              {size}
            </span>
          ))}
          <span className={headerCellClass}>Color danger</span>
          <span className={headerCellClass}>Icon</span>
          <span className={headerCellClass}>Disabled</span>
          <span className={headerCellClass}>Loading</span>

          {variants.map((variant) => (
            <React.Fragment key={variant}>
              <span className={headerCellClass}>{variant}</span>
              {sizes.map((size) => (
                <Button key={`${variant}-${size}`} {...args} variant={variant} size={size} />
              ))}

              <Button {...args} variant={variant} size="md" color={'danger'}>
                danger
              </Button>
              <IconButton variant={variant} size="md" icon="home" aria-label={`${variant} icon`} />
              <Button {...args} variant={variant} size="md" disabled>
                Disabled
              </Button>
              <Button {...args} variant={variant} leftIcon={undefined} rightIcon="home" loading>
                Loading
              </Button>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
};
