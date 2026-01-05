import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FormFieldTextArea } from '@/shared/ui-kit/form-field';

const meta = {
  title: 'UI-KIT/Form/FormFieldTextArea',
  component: FormFieldTextArea,
  tags: ['autodocs'],
  args: {
    id: 'field',
    label: 'Additional details',
    placeholder: 'Describe why you are a great fit or paste your bio',
    maxLength: 1200,
    showCounter: true,
  },
  argTypes: {
    rows: { control: { type: 'number', min: 2, max: 12, step: 1 } },
  },
} satisfies Meta<typeof FormFieldTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 520 }}>
      <FormFieldTextArea {...args} id="field" helperText={<span />} />
      <FormFieldTextArea {...args} id="with-helper-field" helperText={'Neutral helper state'} />
      <FormFieldTextArea {...args} id="error-field" error="Error helper text" />
      <FormFieldTextArea {...args} id="disabled-field" helperText={<span />} disabled />
    </div>
  ),
};
