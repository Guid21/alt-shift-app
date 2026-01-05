import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';

import { DeleteButton } from '@/features/application/delete';

const meta = {
  title: 'Features/Application/DeleteButton',
  component: DeleteButton,
  tags: ['autodocs'],
  args: {
    id: 'app-123',
  },
} satisfies Meta<typeof DeleteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function DeleteButtonPlayground(props: React.ComponentProps<typeof DeleteButton>) {
  const [deleted, setDeleted] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <DeleteButton {...props} onCopied={() => setDeleted(true)} />
      {deleted && <span className="text-text-sm text-color-secondary">Deleted!</span>}
    </div>
  );
}

export const Playground: Story = {
  render: (args) => <DeleteButtonPlayground {...args} />,
};
