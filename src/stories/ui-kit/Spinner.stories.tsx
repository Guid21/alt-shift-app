import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Spinner } from '@/shared/ui-kit/Spinner';

const sizes = [20, 24, 28] as const;

const meta = {
  title: 'UI-KIT/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  args: {
    size: 24,
    color: 'var(--text-primary)',
  },
  argTypes: {
    size: { control: 'inline-radio', options: sizes },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  args: {
    color: 'var(--text-primary)',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {sizes.map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Spinner {...args} size={size} />
          <span className="text-text-sm text-color-secondary">{size}px</span>
        </div>
      ))}
    </div>
  ),
};
