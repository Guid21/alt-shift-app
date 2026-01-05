import type { Metadata } from 'next';

import { ApplicationsPageHeader } from '@/widgets/applications/PageHeader';
import { ApplicationsList } from '@/widgets/applications';
import styles from './page.module.css';

const pageDescription =
  'Browse every cover letter you have generated, copy the text, or jump back into editing a draft.';

export const metadata: Metadata = {
  title: 'Applications',
  description: pageDescription,
  openGraph: {
    title: 'Applications',
    description: pageDescription,
  },
  twitter: {
    title: 'Applications',
    description: pageDescription,
  },
};

export default function Applications() {
  return (
    <main className={styles.content}>
      <ApplicationsPageHeader />
      <ApplicationsList />
    </main>
  );
}
