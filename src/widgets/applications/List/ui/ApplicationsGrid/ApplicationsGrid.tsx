import type { Application } from '@/entities/application/types';

import { ApplicationCard } from '../ApplicationCard/ApplicationCard';
import styles from './ApplicationsGrid.module.css';

export function ApplicationsGrid({ items }: { items: Application[] }) {
  return (
    <div className={styles.grid}>
      {items.map((app) => (
        <ApplicationCard key={app.id} application={app} />
      ))}
    </div>
  );
}
