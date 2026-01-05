import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ApplicationsGoalBanner } from '@/widgets/applications/Goal';

const meta = {
  title: 'Widgets/Applications/GoalBanner',
  component: ApplicationsGoalBanner,
  tags: ['autodocs'],
  args: {
    current: 1,
    target: 5,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ApplicationsGoalBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 24, background: '#f2f4f7' }}>
      <ApplicationsGoalBanner {...args} />
    </div>
  ),
};

export const CustomCopy: Story = {
  args: {
    title: 'Keep pushing',
    description: 'Send a few more tailored applications to reach your target.',
    current: 3,
    target: 6,
  },
  render: (args) => (
    <div style={{ padding: 24, background: '#f2f4f7' }}>
      <ApplicationsGoalBanner {...args} />
    </div>
  ),
};
