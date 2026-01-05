import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GoalProgress } from '@/widgets/GoalProgress';

const meta = {
  title: 'Widgets/GoalProgress',
  component: GoalProgress,
  tags: ['autodocs'],
  args: {
    current: 3,
    target: 5,
    isAchieved: false,
  },
  argTypes: {
    current: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof GoalProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <GoalProgress {...args} />
    </div>
  ),
};

export const Achieved: Story = {
  args: {
    current: 5,
    target: 5,
    isAchieved: true,
  },
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <GoalProgress {...args} />
    </div>
  ),
};
