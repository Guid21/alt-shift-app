import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Icon, ICON_NAMES } from '@/shared/ui-kit/Icon';

const sizes = [20, 24, 28] as const;

const meta = {
  title: 'UI-KIT/Icons',
  component: Icon,
  tags: ['autodocs'],
  args: {
    color: 'var(--text-primary)',
  },
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
    },
    size: {
      control: 'inline-radio',
      options: sizes,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    name: 'home',
    size: 24,
  },
};

export const Catalog: Story = {
  args: {
    size: 24,
    name: 'copy',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {sizes.map((size) => (
        <div
          key={size}
          style={{
            display: 'grid',
            gridTemplateColumns: '80px repeat(7, minmax(32px, 1fr))',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span className="text-text-sm-medium text-color-secondary">{size}px</span>
          {ICON_NAMES.map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Icon {...args} name={name} size={size} />
              <span className="text-text-sm text-color-secondary">{name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
