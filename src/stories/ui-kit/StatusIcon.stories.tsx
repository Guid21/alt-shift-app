import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StatusIcon } from '@/shared/ui-kit/StatusIcon';

const meta = {
  title: 'UI-KIT/StatusIcon',
  component: StatusIcon,
  tags: ['autodocs'],
  args: {
    variant: 'success',
  },
} satisfies Meta<typeof StatusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};
