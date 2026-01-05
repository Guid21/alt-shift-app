import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Divider } from '@/shared/ui-kit/Divider';

const meta = {
  title: 'UI-KIT/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InLayout: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 320 }}>
      <div>Section one content</div>
      <Divider />
      <div>Section two content</div>
      <Divider />
      <div>Section three content</div>
    </div>
  ),
};
