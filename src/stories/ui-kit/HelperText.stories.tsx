import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ErrorText, HelperText } from '@/shared/ui-kit/HelperText';

const meta = {
  title: 'UI-KIT/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  args: {
    children: 'Helper text',
  },
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Error: Story = {
  render: (args) => <ErrorText {...args}>Error text</ErrorText>,
};
