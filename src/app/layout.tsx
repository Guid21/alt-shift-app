import type { Metadata } from 'next';
import cn from 'classnames';
import { fixelDisplay, fixelText } from '@/shared/brand/fonts/fonts';
import { Providers } from '../app-shell/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Alt Shift | Job application co-pilot',
    template: '%s | Alt Shift',
  },
  description:
    'Alt Shift uses Gemini to draft concise cover letters, save them locally, and track your job-search goals.',
  applicationName: 'Alt Shift',
  keywords: [
    'Alt Shift',
    'job applications',
    'cover letter generator',
    'Gemini',
    'AI writing',
    'job search goals',
  ],
  openGraph: {
    title: 'Alt Shift | Job application co-pilot',
    description:
      'Draft tailored cover letters with Gemini, keep applications organized, and monitor your weekly goals.',
    siteName: 'Alt Shift',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alt Shift | Job application co-pilot',
    description:
      'Draft tailored cover letters with Gemini, keep applications organized, and monitor your weekly goals.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fixelText.variable, fixelDisplay.variable, 'light')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
