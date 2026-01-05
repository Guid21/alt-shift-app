import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextArea } from '@/shared/ui-kit/TextArea';

const meta = {
  title: 'UI-KIT/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Describe why you are a great fit or paste your bio',
  },
  argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
