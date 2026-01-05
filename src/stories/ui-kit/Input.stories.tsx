import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from '@/shared/ui-kit/Input';

const meta = {
  title: 'UI-KIT/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text',
  },
  argTypes: {
    type: {},
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
