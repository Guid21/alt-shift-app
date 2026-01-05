import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { GenerateButton } from '@/features/application/generate/ui/GenerateButton';

const meta = {
  title: 'Features/Application/GenerateButton',
  component: GenerateButton,
  tags: ['autodocs'],
  args: {
    variant: 'generate',
    disabled: false,
  },
  argTypes: {
    className: { control: false },
  },
} satisfies Meta<typeof GenerateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function GenerateButtonPlayground(props: React.ComponentProps<typeof GenerateButton>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <GenerateButton {...props} />
    </div>
  );
}

export const Playground: Story = {
  args: {},
  render: (args) => <GenerateButtonPlayground {...args} />,
};

export const TryVariant: Story = {
  args: {
    variant: 'regenerate',
  },
  render: (args) => <GenerateButtonPlayground {...args} />,
};
