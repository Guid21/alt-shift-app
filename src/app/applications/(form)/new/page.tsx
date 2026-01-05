import type { Metadata } from 'next';

import { ApplicationGenerator } from '@/widgets/applications';
import styles from './page.module.css';

const pageDescription =
  'Start a fresh job application, fill in the role and company, and let Gemini craft a tailored cover letter.';

export const metadata: Metadata = {
  title: 'New application',
  description: pageDescription,
  openGraph: {
    title: 'New application',
    description: pageDescription,
  },
  twitter: {
    title: 'New application',
    description: pageDescription,
  },
};

export default function ApplicationsCreatePage() {
  return (
    <div className={styles.page}>
      <ApplicationGenerator />
    </div>
  );
}
