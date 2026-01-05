import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Loader } from '@/shared/ui-kit/Loader';

const meta = {
  title: 'UI-KIT/Loader',
  component: Loader,
  tags: ['autodocs'],
  args: {
    size: 120,
  },
  argTypes: {
    size: { control: { type: 'range', min: 80, max: 200, step: 8 } },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      background: '#101828',
      borderRadius: 16,
    }}
  >
    {children}
  </div>
);

export const Playground: Story = {
  render: (args) => (
    <Wrapper>
      <Loader {...args} />
    </Wrapper>
  ),
};

export const Sizes: Story = {
  render: (args) => {
    const sizes = [80, 120, 160] as const;

    return (
      <div style={{ display: 'flex', gap: 16 }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Wrapper>
              <Loader {...args} size={size} />
            </Wrapper>
            <span className="text-text-sm text-color-secondary" style={{ textAlign: 'center' }}>
              {size}px
            </span>
          </div>
        ))}
      </div>
    );
  },
};
