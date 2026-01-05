import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';

import { CopyButton } from '@/features/application/copy/ui/CopyButton';

const meta = {
  title: 'Features/Application/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  args: {
    text: 'Frontend Engineer @ Acme Corp',
  },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function CopyButtonPlayground(props: React.ComponentProps<typeof CopyButton>) {
  const [copied, setCopied] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <CopyButton {...props} onCopied={() => setCopied(true)} />
      {copied && <span className="text-text-sm text-color-secondary">Copied!</span>}
    </div>
  );
}

export const Playground: Story = {
  render: (args) => <CopyButtonPlayground {...args} />,
};
