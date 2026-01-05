import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FormField } from '@/shared/ui-kit/form-field';
import { Input } from '@/shared/ui-kit/Input';

const meta = {
  title: 'UI-KIT/Form/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    helperText: 'Helper text',
    error: '',
    fullWidth: false,
    id: 'field',
  },
  argTypes: {
    error: { control: 'text' },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: <Input id="field" placeholder="Child control" />,
  },
};

export const WithError: Story = {
  args: {
    error: 'Error text',
    children: <Input id="field" placeholder="Child control" />,
  },
};
