import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Header, HeaderGoalControls } from '@/widgets/header';

const meta = {
  title: 'Widgets/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    leftSlot: { control: false },
    rightSlot: { control: false },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: React.ComponentProps<typeof Header>) => (
  <>
    <Header {...args} />
  </>
);

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const WithHeaderGoalProgress: Story = {
  render: (args) => <Template {...args} rightSlot={<HeaderGoalControls />} />,
};
