import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Label } from '@/shared/ui-kit/Label';

const meta = {
  title: 'UI-KIT/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    htmlFor: 'input-id',
    children: 'Label text',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
