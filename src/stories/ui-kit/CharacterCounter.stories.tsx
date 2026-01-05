import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CharacterCounter } from '@/shared/ui-kit/CharacterCounter';

const meta = {
  title: 'UI-KIT/CharacterCounter',
  component: CharacterCounter,
  tags: ['autodocs'],
  args: {
    valueLength: 42,
    maxLength: 120,
  },
} satisfies Meta<typeof CharacterCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const OverLimit: Story = {
  args: {
    valueLength: 130,
    maxLength: 120,
  },
};
