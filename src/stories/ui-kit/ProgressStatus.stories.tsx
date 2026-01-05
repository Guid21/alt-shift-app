import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProgressStatus } from '@/shared/ui-kit/ProgressStatus';

const meta = {
  title: 'UI-KIT/ProgressStatus',
  component: ProgressStatus,
  tags: ['autodocs'],
  args: {
    current: 1,
    total: 5,
    variant: 'dots',
  },
} satisfies Meta<typeof ProgressStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dots: Story = {};

export const Segments: Story = {
  args: {
    variant: 'segments',
  },
};
