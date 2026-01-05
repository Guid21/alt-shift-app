import styles from './ApplicationsPageHeader.module.css';
import { Typography } from '@/shared/ui-kit/Typography';
import { Button } from '@/shared/ui-kit/Button';
import Link from 'next/link';
import { PATHS } from '@/shared/config/routes';

export function ApplicationsPageHeader() {
  return (
    <div className={styles.pageHeader}>
      <Typography variant="heading-lg-semibold">Applications</Typography>

      <Link href={PATHS.applications.create} aria-label="Create new application">
        <Button leftIcon="plus" size="md">
          Create<span className={styles.newText}> New</span>
        </Button>
      </Link>
    </div>
  );
}
