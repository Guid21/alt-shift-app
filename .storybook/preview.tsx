import type { Preview } from '@storybook/nextjs-vite';
import { fixelDisplay, fixelText } from '../src/shared/brand/fonts/fonts';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('light');
        document.body.classList.add(fixelText.variable, fixelDisplay.variable);
      }
      return <Story />;
    },
  ],
};

export default preview;
