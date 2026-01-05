import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Button } from '@/shared/ui-kit/Button';
import { Card, CardContent, CardFooter } from '@/shared/ui-kit/Card';
import { Typography } from '@/shared/ui-kit/Typography';

const BodyContent = () => (
  <CardContent>
    <Typography variant="text-md">Starter card with placeholder content.</Typography>
    <Typography variant="text-sm" color="secondary">
      Drop any elements, forms, or text here.
    </Typography>
  </CardContent>
);

const FooterActions = () => (
  <CardFooter>
    <Button variant="text" leftIcon="trash-basket" size="sm">
      Delete
    </Button>
    <Button variant="text" rightIcon="copy" size="sm">
      Copy to clipboard
    </Button>
  </CardFooter>
);

const meta = {
  title: 'UI-KIT/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    variant: 'neutral',
    padding: 'md',
    style: { width: '400px' },
    children: (
      <>
        <BodyContent />
        <FooterActions />
      </>
    ),
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['neutral', 'accent'] },
    padding: { control: 'inline-radio', options: ['md', 'lg'] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithLargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <>
        <CardContent>
          <Typography variant="heading-md-semibold">Large padded card</Typography>
          <Typography variant="text-md" color="secondary">
            Use the `padding` prop to toggle spacing. Card body can contain any custom layout or
            components.
          </Typography>
        </CardContent>
        <CardFooter>
          <Button variant="text" leftIcon="trash-basket" size="sm">
            Delete
          </Button>
          <Button variant="text" rightIcon="copy" size="sm">
            Copy to clipboard
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const AccentTone: Story = {
  args: {
    variant: 'accent',
    padding: 'lg',
    children: (
      <>
        <CardContent>
          <Typography variant="heading-md-semibold">Friendly accent card</Typography>
          <Typography variant="text-md" color="secondary">
            Use the `accent` variant for celebratory or encouraging content. Combine with buttons or
            progress indicators as needed.
          </Typography>
        </CardContent>
        <CardFooter>
          <div />
          <Button variant="text" rightIcon="copy" size="sm">
            Copy to clipboard
          </Button>
        </CardFooter>
      </>
    ),
  },
};
