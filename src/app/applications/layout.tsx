import type { Metadata } from 'next';
import { Header, HeaderGoalControls } from '@/widgets/header';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Applications',
  description:
    'Generate cover letters with Gemini, reopen saved drafts, and keep your weekly application goal in sight.',
  openGraph: {
    title: 'Applications',
    description:
      'Generate cover letters with Gemini, reopen saved drafts, and keep your weekly application goal in sight.',
  },
  twitter: {
    title: 'Applications',
    description:
      'Generate cover letters with Gemini, reopen saved drafts, and keep your weekly application goal in sight.',
  },
};

export default function RootLayout({
  children,
  GoalSection,
}: Readonly<{
  children: React.ReactNode;
  GoalSection: React.ReactNode;
}>) {
  return (
    <div className={styles.root}>
      <Header rightSlot={<HeaderGoalControls />} />
      <div className={styles.page}>
        {children}
        {GoalSection}
      </div>
    </div>
  );
}
