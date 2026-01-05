import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FormFieldInput } from '@/shared/ui-kit/form-field';

const meta = {
  title: 'UI-KIT/Form/FormFieldInput',
  component: FormFieldInput,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Enter text',
    id: 'field',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
  },
} satisfies Meta<typeof FormFieldInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
      <FormFieldInput {...args} id="field" />
      <FormFieldInput {...args} id="neutral-field" helperText="Neutral helper state" />
      <FormFieldInput {...args} id="error-field" error="Error helper text" />
      <FormFieldInput {...args} id="disabled-field" disabled helperText="Field is disabled" />
    </div>
  ),
};
